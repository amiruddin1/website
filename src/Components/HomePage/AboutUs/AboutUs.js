import React from 'react';
import { Row, Col, Button, Typography, List } from 'antd';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  return (
    <>
      <div className="expertise-container_about">
        <div className="header-section_about">
          <Row gutter={32} align="middle">
            <Col xs={24} md={14}>
              <Title className="about-us-title">ABOUT US</Title>
              <Paragraph className="about-us-text">
                <strong>India's Leading Manufacturer of Energy-Efficient HVAC Solutions</strong>
              </Paragraph>
              <List
                className="about-us-list"
                dataSource={[
                  'Transform your spaces with cutting-edge HVAC systems designed for optimal comfort, superior efficiency, and timeless performance.',
                  'HRVI Groups specializes in FCUs, AHUs, and FAHUs tailored to meet the diverse needs of global markets.',
                  'With our headquarters in India, we are recognized as one of the leading manufacturers and suppliers of high-quality air conditioning solutions globally.',
                  'Our innovative HVAC products cater to residential, commercial, and industrial applications while enhancing energy efficiency and environmental sustainability.',
                  'We collaborate with architects, engineers, and project managers to provide customized HVAC solutions that ensure exceptional performance and reliability.',
                  'HRVI Groups is your partner in creating comfortable, energy-efficient, and sustainable environments across the globe!',
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <span className="list-icon">&#8669;</span> {item}
                  </List.Item>
                )}
              />
              <div className="about-us-buttons">
                <Button type="default" className="read-more-button">
                  <Link to="/about">Explore More</Link>
                </Button>
                <Button type="default" className="download-button">
                  <a
                    href="/Media/Brochure.pdf"
                    download="Brochure.pdf"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Download Brochure
                  </a>
                </Button>
              </div>
            </Col>

            <Col xs={24} md={10} className="about-us-image-wrapper">
              <div className="about-us-image-container">
                <img
                  src="/Media/AboutUs.jpg"
                  alt="Office Team"
                  className="about-us-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <hr />
    </>
  );
}
