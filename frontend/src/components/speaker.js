import React from "react";
import Card from "react-bootstrap/Card";
import "../css/speaker.css";
const Speaker = (props) => {
  const { name, designation, linkedin, photourl } = props;
  return (
    <div>
      <Card
        border="white"
        style={{
          maxWidth: "18rem",
          display: "inline-block",
          paddingTop: "0px",
        }}
        className="bg-dark text-white containerCard"
      >
        <Card.Img variant="top" src={photourl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {designation}
            <br />
            DSC CVRGU
          </Card.Text>
        </Card.Body>
        <div className="overlay">
          <div className="text">
            <a href={linkedin}>
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Speaker;
