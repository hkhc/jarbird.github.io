/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const valueNotFoundMessage = (key) => '[key \''+key+'\' is not found]';

const evaluate = (text, dict, fence, quietOnNotFound) => {

    let result = ''
    let currIndex = 0

    let inFence = false
    while (true) {
        if (!inFence) {
            let startIndex = text.indexOf(fence[0], currIndex);
            if (startIndex === -1) { // start fence is not found, flush the rest of string to result
                result += text.slice(currIndex);
                break;
            } else { // start fence is found, append the passed characters to result
                result += text.slice(currIndex, startIndex);
                currIndex = startIndex + fence[0].length;
                inFence = true;
            }
        } else {
            let keyIndex = text.indexOf(fence[1], currIndex);
            if (keyIndex === -1) { // end fence is not found, add back the start fence to result
                result += fence[0] + text.slice(currIndex);
                break;
            } else { // end fence is found. lookup the dict with key and append value to result
                let key = text.slice(currIndex, keyIndex).trim();
                let value = dict[key];
                result += value ? value : (quietOnNotFound ? '' : valueNotFoundMessage(value));
                currIndex = keyIndex + fence[1].length;
                inFence = false;
            }
        }
    }

    return result;
}

const transformNode = (node, dict, fence, quiey) => {
    const replaced = evaluate(node.value, dict, fence, quiey);
    if (node.type === 'code') {
        return [
            {
                type: node.type,
                lang: node.lang,
                meta: node.meta,
                value: replaced,
            }
        ];
    } else {
        return [
            {
                type: node.type,
                value: replaced,
            }
        ];
    }
};

const matchNode = (node) => {
    return node.type === 'code' || node.type === 'text' || node.type === 'comment';
}

module.exports = (options = {}) => {

    let {
        dict = {},
        fence = ['{{', '}}'],
        quiet = false
    } = options;

    let transformed = false;
    const transformer = (node) => {
        if (matchNode(node)) {
            transformed = true;
            return transformNode(node, dict, fence, quiet);
        }
        if (Array.isArray(node.children)) {
            let index = 0;
            while (index < node.children.length) {
                const result = transformer(node.children[index]);
                if (result) {
                    node.children.splice(index, 1, ...result);
                    index += result.length;
                } else {
                    index += 1;
                }
            }
        }
        return null;
    };
    return transformer;
};
