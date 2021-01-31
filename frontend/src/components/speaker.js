import React from "react";
import Card from "react-bootstrap/Card";
import "../css/speaker.css";
const Speaker = (props) => {
  const {
    name,
    designation,
    org,
    facebook,
    twitter,
    linkedin,
    photourl,
  } = props;
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
            {org}
          </Card.Text>
        </Card.Body>
        <div className="overlay">
          <div className="social">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Speaker;
