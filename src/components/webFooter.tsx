import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
const Webfooter = () => {
  return (
    <>
      <Container
        style={{ maxWidth: "100em", height: "10em", backgroundColor: "blue" }}
      >
        <Container style={{display: "flex-start", backgroundColor: "green", height: "50px", width: "50px"}}>

        </Container>
      </Container>
      <Container
        style={{ maxWidth: "100em", height: "25px", backgroundColor: "black" }}
      >
        <Typography style={{ textAlign: "center", color: "white" }}>
          Copyright@ WebBlog 2022
        </Typography>
      </Container>
    </>
  );
};

export default Webfooter;
