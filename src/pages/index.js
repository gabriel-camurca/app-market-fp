// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// import android_robot_head from "../../public/android_robot_head.svg"

import {Row} from 'antd'

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Final Project Viz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main className={styles.main}>
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
          <h1 className={styles.primary_container_title} style={{marginLeft: "2vw"}}> How about getting the feel of what we're trying to achieve?</h1>
        </Row>
        <Row className={styles.primary_container_graph}>
          <h1 className={styles.primary_container_subtitle}>
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
