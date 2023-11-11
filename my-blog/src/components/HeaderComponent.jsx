import React from 'react'
import {
  Col,
  Row,
  Image,
  Typography,
} from "antd";


const headerStyle = {
  paddingInline: 0,
};

const rowInHeader = {
  border: "3px solid black",
};

const colLogo = {
  display: "flex",
  alignItems: "center",
};

const colBlogs = {
  backgroundColor: "lightGray",
  textAlign: "center",
  borderLeft: "3px solid black",
  borderRight: "3px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative", // Add this to make the arrow position relative to the column
};

const arrowStyle = {
  position: "absolute",
  bottom: "-25px", // Adjust this value to position the arrow
  left: "50%",
  transform: "translateX(-50%)",
  borderLeft: "25px solid transparent",
  borderRight: "25px solid transparent",
  borderTop: "25px solid black",
};

const colUserName = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};


const Header = () => {
  return (
    <div style={headerStyle}>
          <Row style={rowInHeader}>
            <Col span={10} style={colLogo}>
              <Image
                className="logo"
                width={100}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <Typography
                style={{
                  marginLeft: 10,
                  fontSize: 45,
                  fontWeight: 400,
                  fontFamily: "inherit",
                }}
              >
                Logo
              </Typography>
            </Col>
            <Col span={4} style={colBlogs}>
              <Typography
                style={{ fontSize: 45, fontWeight: 400, fontFamily: "inherit" }}
              >
                Blogs
              </Typography>
              <div style={arrowStyle}></div>
            </Col>
            <Col span={10} style={colUserName}>
              <Image
                className="avatar"
                style={{ border: "3px solid Gray" }}
                width={100}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <Typography
                style={{
                  marginLeft: 35,
                  marginRight: 35,
                  fontSize: 45,
                  fontWeight: 400,
                  fontFamily: "inherit",
                }}
              >
                UserName
              </Typography>
            </Col>
          </Row>
        </div>
  )
}

export default Header