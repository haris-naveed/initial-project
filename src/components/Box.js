import React from "react";
import { CardBody, Card, CardTitle, CardText } from "reactstrap";
import { BsFillBasketFill } from "react-icons/bs";

const Box = () => {
  return (
    <Card
      className="mb-2"
      color="primary"
      inverse
      style={{
        width: "20vw",
        height: "8rem",
        borderRadius: "15px",
        marginLeft: "25px",
      }}
    >
      <CardBody
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CardTitle tag="h5">Stores</CardTitle>
          <CardText tag="h3">17</CardText>
        </div>
        <div>
          <CardText style={{ marginRight: "35px" }}>
            <BsFillBasketFill size={"25px"} />
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default Box;
