// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// import android_robot_head from "../../public/android_robot_head.svg"

import {PrimarySection, InterSection} from '../components/PrimarySection.js'
import {SecondarySection} from '../components/SecondarySection.js'
import {CategoriesByPrice} from '../components/CategoriesByPrice.js'
import {ProportionEmails} from '../components/ProportionEmails.js'
import {Installs} from '../components/Installs.js'
import {CalendarGraph} from '../components/CalendarGraph.js'
import {CategoryRank} from '../components/CategoryRank.js'
import {RatingGraph} from '../components/RatingGraph.js'
import {LollipopChart} from '../components/LollipopChart.js'
import {MoneyGraph} from '../components/MoneyGraph.js'

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
             {sets: ['Ad Supported','In App Purchase'], size: 4647}]

  // var colours = ['darkgreen', 'green', 'black'];
  var colours = ['#3aad85', '#3ddc84'];

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

        {/* <CalendarGraph></CalendarGraph> */}
        <PrimarySection title="Time Series">
          <CalendarGraph></CalendarGraph>
        </PrimarySection>
        <hr width="100%" className={styles.line_upper}/>
        <Row className={styles.terciary_container}>
          <h1 className={styles.terciary_text}>In this time series we can highlight two important things. In the first graph we have a considerable increase in the number of applications launched around the beginning of 2020. In the second graph it is clear that a considerably low number of applications stopped being updated over time, since the curve grows a lot when we get close to the last recorded date.
          </h1>
        </Row>
        <hr width="100%" className={styles.line_bottom}/>

        <PrimarySection title="Category By Price">
          <CategoriesByPrice></CategoriesByPrice>
        </PrimarySection>

        <PrimarySection title="Category Ranking">
          <CategoryRank></CategoryRank>
        </PrimarySection>
        <hr width="100%" className={styles.line_upper}/>
        <Row className={styles.terciary_container}>
          <h1 className={styles.terciary_text}>With the rising of apps such as Duolingo and Babbel, alongside home schooling due to covid related events, it&apos;s easy to comprehend why educational apps are so prevalent. Everybody wants to learn something, so what better way to start doing so if not in the comfort of your own house?</h1>
        </Row>
        <hr width="100%" className={styles.line_bottom}/>

        <PrimarySection title="Proportion of Emails">
          {/* <ProportionEmails></ProportionEmails> */}
          <img src="chart_email.png" alt="email_chart"/>
        </PrimarySection>

        <PrimarySection title="Venn Diagram">
          <svg id="venn" width="600px" height="600px" style={{marginBottom: "7vh"}}></svg>
        </PrimarySection>
        <hr width="100%" className={styles.line_upper}/>
        <Row className={styles.terciary_container}>
          <h1 className={styles.terciary_text}>In the app market there are a few ways to generate revenue for developers. This Venn diagram show the incoming method of apps and how they are distributed between advertise and purchase in app.</h1>
        </Row>
        <hr width="100%" className={styles.line_bottom}/>

        <PrimarySection title="Ratings">
          <RatingGraph></RatingGraph>
        </PrimarySection>

        <PrimarySection title="Lollipop Graph">
          <img src="lollipop_chart.svg" alt="lollipop_chart"/>
        </PrimarySection>
        <hr width="100%" className={styles.line_upper}/>
        <Row className={styles.terciary_container}>
          <h1 className={styles.terciary_text}>This time, it&apos;s interesting to note the Music &amp; Audio category, with such little difference between minimum and maximum installs. Having to deal with aspects such as copyright and their market being dominated by few big apps, this category stands out from the others with it&apos;s unique situation, followed by the Casual category which has few apps in the top 70.
          <br></br>
          Another Interesting fact is that even the mean of minimum and maximum installs from the category Video Players &amp; Editors
          Is generally bigger than most maximum installs from other categories.
          </h1>
        </Row>
        <hr width="100%" className={styles.line_bottom}/>

        <PrimarySection title="Installs">
          <Installs></Installs>
        </PrimarySection>

        <PrimarySection title="Cost Comparison">
          <MoneyGraph></MoneyGraph>
        </PrimarySection>
        <hr width="100%" className={styles.line_upper}/>
        <Row className={styles.terciary_container}>
          <h1 className={styles.terciary_text}>A question that arose during the analysis of the data was the following: &quot;How much would it cost to have all the paid apps on the Playstore?&quot;. With that we decided to make a comparison with getting all products from other types of virtual stores. It&apos;s a good moment to be a fan League of Legends isn&apos;t it?
          </h1>
        </Row>
        <hr width="100%" className={styles.line_bottom}/>

        {/* <Row className={styles.secondary_container}>
          <h1 className={styles.secondary_container_subtitle}>
            Ever wondered how many Apps for each 0-5 Star Rating? <br/>
            This is a chart of the different App Ratings for each category!<br/>
          </h1>
          <iframe width="50%" height="350" frameBorder="0" style={{marginRight: "2vw"}}
  src="https://observablehq.com/embed/@gabriel-camurca/vizualizacao-de-dados-app-marketplace?cells=chart_barra"></iframe>
        </Row> */}
        {/* <Row className={styles.primary_container_graph}>
          <h1 className={styles.primary_container_subtitle}>
            <h2>Even though it&apos;s not related to our dataset, here&apos;s something fun illustrating things we may be doing in the fulture ;) </h2> <br/>
            This is a graph representing a network of similar songs <br/>
            <i>(psst! You can actually interact with the graph, try it!)</i>
          </h1>
        <iframe width="100%" height="684" frameBorder="0"
  src="https://observablehq.com/embed/@gabriel-camurca/similar-song-network-resposta-exercicio-2?cells=chart"></iframe>
        </Row> */}
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
