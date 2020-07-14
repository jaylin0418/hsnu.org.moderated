import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// icons
import map from "../../images/icons/socialMedia/map.svg"
import phone from "../../images/icons/socialMedia/phone.svg"

const Footer = () => {
  const footers = [
    { name: "map", link: "https://goo.gl/maps/zm7LiQ1AZLLZmn4h8", icon: map },
    {
      name: "phone",
      link: "https://www.hs.ntnu.edu.tw/contactn/telfax/",
      icon: phone,
    },
  ]

  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col lg="6" className={"logo"}>
              <h2 className={"is-2 bold"}>聯絡資訊：(02)2707-5215</h2>
            </Col>
            <Col lg="6" className={"icons"}>
              {footers.map(icon => (
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.name}
                >
                  <img src={icon.icon} alt={icon.name}></img>
                </a>
              ))}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
