import React, { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Jumbotron from "react-bootstrap/Jumbotron"

// style
import "./Propaganda.scss"

const Propaganda = () => {
  // get image
  const [image, setImage] = useState()
  useEffect(() => {
    fetch(`https://wordpress.hsnu.org/wp-json/wp/v2/propaganda`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setInterval(() => {
          setImage([data[Math.floor(Math.random() * data.length)]])
        }, 3000)
      })
  }, [])

  return (
    <Jumbotron id="propaganda">
      {image ? (
        <>
          <LazyLoadImage
            rel="preload"
            src={image[0].acf.image.sizes.medium}
            alt={"propaganda"}
          />
          <div className={"fade-layer"}></div>
          <a
            href={image[0].acf.image.sizes.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={"is-1 serif bold"}>
              <span className={"is-3"}>近期活動｜</span>
              <br />
              {image[0].title.rendered}
            </h1>
          </a>
        </>
      ) : null}
    </Jumbotron>
  )
}

export default Propaganda
