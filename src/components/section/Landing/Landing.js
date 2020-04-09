import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import { useStaticQuery, graphql } from "gatsby"

// style
import "./Landing.scss"

export const LandingPure = ({ headline }) => {
  return (
    <Jumbotron fluid>
      <img
        rel="preload"
        src={headline.node.acf.image.source_url + ".webp"}
        alt={"Headline"}
      ></img>
      <div className={"fade-layer"}></div>
      <a href={headline.node.acf.link}>
        <h1 className={"is-1 bold"}>{headline.node.title}</h1>
      </a>
    </Jumbotron>
  )
}
const Landing = () => {
  const headline = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 1, sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            acf {
              image {
                source_url
              }
              link
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges[0]

  return <LandingPure headline={headline} />
}

export default Landing
