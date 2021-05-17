import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Jarbird aims to keep the labour work of setting up component publishing to a minimum.
          Boilerplate code reduced.
      </>
    ),
  },
  {
    title: 'Publishing with D.R.Y.',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Sharing publishing information among sub-projects and among projects.
      </>
    ),
  },
  {
    title: 'Avoid provider lock-in',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Switch between different repositories has never been easier.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
