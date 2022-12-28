import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { BsFillBasketFill } from "react-icons/bs";

const CardBox1 = () => {
  return (
    <Card
      className="my-2"
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "350px",
        width: "100%",
        margin: "0 10px",
      }}
    >
      <CardBody>
        <CardTitle
          tag="h5"
          style={{
            height: "25%",
          }}
        >
          AR Collection
        </CardTitle>
        <CardText
          style={{
            height: "50%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsFillBasketFill size={"70px"} color="red" />
        </CardText>
        <div
          style={{
            height: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <small className="text-muted">ORDERS</small>
            <small className="text-muted">0</small>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <small className="text-muted">NOTIFICATIONS</small>
            <small className="text-muted">0</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardBox1;
