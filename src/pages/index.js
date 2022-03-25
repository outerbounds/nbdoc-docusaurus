import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <font size="+5">👉&nbsp;</font>
          <Link
            className="button button--secondary button--lg"
            to="/docs/nb">
            nbdoc Tutorial - 15min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A better way to author technical docs and blogs.">
      <HomepageHeader />
      <main>
      <center>
      <h1>Create Technical Documentation That...</h1>
      <p><font size="+1"><strong>Is fully testable</strong> with unit tests</font></p>
      <p><font size="+1"><strong>Doesn't require copy & pasting code</strong> into markdown files.</font></p>
      <p><font size="+1"><strong>Can automatically update</strong> by programatically running the code in your docs.</font></p>
      <p><font size="+1">Allows you to author docs <strong>using a WSIWYG style editor</strong>.</font></p>
      <p><font size="+1">Leverages <a href="https://docusaurus.io/">Docusaurus</a>, a popular static site generator built specifically for documentation.</font></p>
      <br></br>
      <br></br>
      <figure>
      <img width="949" alt="nbdoc4" src="https://user-images.githubusercontent.com/1483922/159776255-3eb05cd5-4d48-48c4-80e7-7825839da0ef.png"></img>
      <figcaption><font size="+1"><p>nbdoc is powered by <a href="https://github.com/fastai/nbdev">nbdev</a>, a literate programming system.</p></font>
</figcaption>
      </figure>
      <br></br>
      <h1>A Whirlwind Tour</h1>
      <h2>Hello World</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zclB89-exZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <br></br>
      <h2>Write Python Scripts and Shell Commands</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LP8w-JRi84A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <br></br>
      <h2>Toggle Visibility of Cell Inputs & Outputs</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/I2AA2N-kVl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <br></br>
      <h2>Create Interactive Plots</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ODPXd8xghzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <br></br>
      <h2>Test Documentation</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/vhA5WQiZ3wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br></br>
      <br></br>
      <h1>Ready To Get Started?  Take The Tutorial!</h1>
      <div className={styles.buttons}>
        <font size="+5">👉&nbsp;</font>
          <Link
            className="button button--secondary button--lg"
            to="/docs/nb">
            nbdoc Tutorial - 15min ⏱️
          </Link>
      </div>
      </center>
      </main>
    </Layout>
  );
}
