import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Layout,
  Space,
  Col,
  Row,
  Image,
  Typography,
  Collapse,
  Divider,
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


const contentStyle = {
  marginTop: 50,
};


const HomePage = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await axios.get('http://localhost:3001/v1/user');
        const usersWithFormattedTags = response.data.map((user) => ({
          ...user,
          post: user.post.map((post) => ({
            ...post,
            tags: Array.isArray(post.tags) ? post.tags : [],
          })),
        }));
        setUsers(usersWithFormattedTags);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  // Filter out users with no posts
  const usersWithPosts = users.filter((user) => user.post.length > 0);

  return (

    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Layout style={{ backgroundColor: "white" }}>
        {loading && <p>Loading posts...</p>}
        {usersWithPosts.map((user) => (
          <div key={user._id}>
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
                {user.name}
              </Typography>
            </Col>
          </Row>
        </div>
            <div style={contentStyle}>
              {user.post.map(post => (
                <div key={post._id}>
                  <Typography.Title style={{ textAlign: "center", fontSize: 65 }}>
                    {post.title}
                </Typography.Title>
              {/* information of author and tag */}
                <Row   style={{ margin: "0px 50px 0 50px", maxWidth: 1812 }}>
                  <Col
                    flex={1}
                    style={{
                      maxWidth: 500,
                    }}
                  >
                    <div className="colInfo">
                      <Typography
                        className="authorName"
                        style={{
                          fontSize: 45,
                          fontWeight: 400,
                          fontFamily: "inherit",
                        }}
                      >
                        Author: {user.name}
                      </Typography>
                      <Typography
                        className="createdAt"
                        style={{
                          fontSize: 45,
                          fontWeight: 400,
                          fontFamily: "inherit",
                        }}
                      >
                        Created at: {user.created_at}
                      </Typography>
                    </div>
                  </Col>
                  <Col
                    flex={1}
                    style={{
                      maxWidth: 380,
                      marginLeft: 1432,
                      position: "absolute",
                    }}
                    >
                    <div className="colTag">
                      {post.tags.map((tag) => (
                      <div
                        key={tag}
                        style={{
                          display: "inline-block",
                          margin: "0 5px",
                          padding: "5px 10px",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                        </div>
                  </Col>
                </Row>
          {/* content of post */}
          <Row style={{ margin: "50px 50px 0 50px", maxWidth: 1812 }}>
            <Typography.Paragraph
              style={{ fontSize: 45, fontWeight: 400, fontFamily: "inherit", textAlign:"justify" }}
            >
              {post.content}
            </Typography.Paragraph>
            </Row>
            </div>
            ))}
          <Divider />
          {/* Comment section */}
               {user.comment.length > 0 && (
                <div className="custom-collapse">
                  <Collapse defaultActiveKey={["0"]} style={{ border: "none", marginBottom:30 }}>
                    <Collapse.Panel header={`Comments (${user.comment.length})`} key="1">
                      {user.comment.map((cmt, index) => (
                        <div key={`${user._id}-${index}`}>
                          <div style={{ display: "flex", fontSize: 20 }}>
                            <Image
                              width={100}
                              height={100}
                              src={
                                "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                              }
                            />
                            <div>
                              <span style={{ marginRight: 10, marginLeft: 20 }}>{cmt.name}</span>
                              <span style={{ marginRight: 10, color: "lightgray" }}>{cmt.created_at}</span>
                            </div>
                            <p style={{ marginTop: 100 }}>{cmt.content}</p>
                          </div>
                        </div>
                      ))}
                    </Collapse.Panel>
                  </Collapse>
                </div>
              )}
            </div>
            <Divider/>
          </div>
        ))}
      </Layout>
    </Space>
  );
};

export default HomePage