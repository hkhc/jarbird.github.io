import Tabs from '@theme/Tabs';
import React from 'react';

const languageMap = {
    'groovy': 'Groovy',
    'kotlin': 'Kotlin'
}

const ScriptCodeBlock = props => {
    return (
        <Tabs
            groupId="buildscript"
            defaultValue="groovy"
            values={ props.lang.map(lang => { return { label : languageMap[lang], value: lang } }) }>
            { props.children }
        </Tabs>
    )
};

export default ScriptCodeBlock;
