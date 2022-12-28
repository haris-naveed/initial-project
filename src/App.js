import React, { Component, Fragment, PureComponent } from "react";
import Carousel from "react-elastic-carousel";

import "./App.css";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "reactstrap";
import CardBox1 from "./components/CardBox1";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];
class App extends Component {
  render() {
    const arr = [1, 2, 3, 4];

    return (
      // <div className="App ">
      // <Box/>
      // <Box/>
      // <Box/>
      // <Box/>
      // </div>

      // <Row className="mt-5">
      //   <Col lg={3} md={6} xs={12}>
      //   <Box/>
      //   </Col>
      //   <Col lg={3} md={6} xs={12}>
      //   <Box/>
      //   </Col>
      //   <Col lg={3} md={6} xs={12}>
      //   <Box/>
      //   </Col>
      //   <Col lg={3} md={6} xs={12}>
      //   <Box/>
      //   </Col>
      // </Row>
      <>
        <Row className="mt-5">
          {arr.map((item) => (
            <Col key={item} lg={3} md={6}>
              <Box />
            </Col>
          ))}
        </Row>
        <div style={{ marginTop: "50px" }}>
          <Carousel breakPoints={breakPoints}>
            <CardBox1 />
            <CardBox1 />
            <CardBox1 />
            <CardBox1 />
            <CardBox1 />
            <CardBox1 />
            <CardBox1 />
            <CardBox1 />
          </Carousel>
        </div>
      </>
    );
  }
}

export default App;
