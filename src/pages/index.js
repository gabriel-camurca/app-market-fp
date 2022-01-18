// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// import android_robot_head from "../../public/android_robot_head.svg"

import {VennDiagram} from 'venn.js'
import {selectAll, select} from 'd3'

import {Row} from 'antd'
import Script from 'next/script'
import { useEffect } from 'react'

const Home = () => {
  // var scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

  // var elementsToShow = document.querySelector('.show-on-scroll')

  // function loopScroll() {
  //   elementsToShow.forEach(function (element) {
  //     if (isElementInViewport(element)) {
  //       element.classList.add('is-visible');
  //     } else {
  //       element.classList.remove('is-visible');
  //     }
  //   });
  //   scroll(loopScroll)
  // }

const sets = [ {sets: ['Ad Supported'], size: 37757}, 
             {sets: ['In App Purchase'], size: 6420},
             {sets: ['Editors Choice'], size: 24},
             {sets: ['Ad Supported', 'Editors Choice'], size: 15},
             {sets: ['In App Purchase', 'Editors Choice'], size: 19},
             {sets: ['Ad Supported','In App Purchase'], size: 4647},
             {sets: ['Ad Supported', 'In App Purchase', 'Editors Choice'], size: 13},];

  // var colours = ['darkgreen', 'green', 'black'];
  var colours = ['#3aad85', '#3ddc84', 'grey'];

  var chart = VennDiagram()
  .width(600)
  .height(600)

  useEffect(() => {
    select("#venn").datum(sets).call(chart)
    selectAll("#venn .venn-circle path")
    .style("fill-opacity", 0.9)
    .style("fill", function(d,i) { return colours[i]; });

    selectAll("#venn text").attr("transform", "translate(-40)").style("fill", "white");
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Final Project Viz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main className={styles.main}>
        <Script src="../../scripts/venn_diagram.js" strategy='beforeInteractive'></Script>
        <Row className={styles.title_container}>
          <h1 className={styles.title} >Data Visualization - Final Project</h1>
          {/* <Image src={android_robot_head} alt="" width={"256px"} height={"256px"} className={styles.img_test} /> */}
          <img className={styles.img_test} src="https://upload.wikimedia.org/wikipedia/commons/3/31/Android_robot_head.svg" height={"175px"}/>
        </Row>
        <Row className={styles.secondary_container}>
          <h1
            className={`${styles.secondary_content} ${styles.fst_animation}`}
          >Hi, </h1>
          <h1
            className={`${styles.secondary_content} ${styles.snd_animation}`}
          >&nbsp;Welcome!</h1>
        </Row>
        <Row className={styles.primary_container}>
          <h1 className={styles.primary_container_title} style={{marginLeft: "2vw"}}> How about getting the feel of what we&apos;re trying to achieve?</h1>
        </Row>
        <Row className={styles.primary_container_graph}>
          <h1 className={styles.primary_container_subtitle}>
            This is a Venn Diagram of the different App income methods!<br/>
          </h1>
          <svg id="venn" width="600px" height="600px"></svg>
        </Row>
        <Row className={styles.primary_container_graph}>
          <h1 className={styles.primary_container_subtitle}>
            This is a Chart of the different App Ratings for each category!<br/>
          </h1>
          <iframe width="50%" height="350" frameBorder="0"
  src="https://observablehq.com/embed/@gabriel-camurca/vizualizacao-de-dados-app-marketplace?cells=chart_barra"></iframe>
        </Row>
        <Row className={styles.primary_container_graph}>
          <h1 className={styles.primary_container_subtitle}>
            <h2>Even though it&apos;s not related to our dataset, here&apos;s something fun illustrating things we may be doing in the fulture ;) </h2> <br/>
            This is a graph representing a network of similar songs <br/>
            <i>(psst! You can actually interact with the graph, try it!)</i>
          </h1>
        <iframe width="100%" height="684" frameBorder="0"
  src="https://observablehq.com/embed/@gabriel-camurca/similar-song-network-resposta-exercicio-2?cells=chart"></iframe>
        </Row>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
