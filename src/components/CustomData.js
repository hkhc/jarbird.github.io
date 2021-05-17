import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const CustomData = props => {

    const config = useDocusaurusContext();

    return (config.siteConfig.customFields[props.field]);
};

export default CustomData;
