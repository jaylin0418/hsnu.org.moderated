import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const meta = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
        }
      }
    }
  `).site.siteMetadata

  const seo = {
    title: title || meta.defaultTitle,
    description: description || meta.defaultDescription,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <meta charset="UTF-8" />
        <link rel="icon" href="src/images/icons/HSNU.png"></link>
        <meta name="author" content="github@Anmicius0" />
        <meta name="description" content={seo.description} />
      </Helmet>
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
}
