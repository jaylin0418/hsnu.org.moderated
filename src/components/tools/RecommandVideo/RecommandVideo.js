import React from "react"
import Sticky from "react-sticky-el"

import "./RecommandVideo.scss"

const RecommandVideo = () => {
  return (
    <Sticky
      className={"RecommandVideo"}
      topOffset={80}
      disabled={document.documentElement.clientWidth < 992 ? true : false}
    >
      {/* title */}
      <h2 className={"is-2 bold"}>推薦內容</h2>

      {/* embed */}
      <iframe
        title="youtube"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/w0mog_xxY9Q"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Sticky>
  )
}

export default RecommandVideo
