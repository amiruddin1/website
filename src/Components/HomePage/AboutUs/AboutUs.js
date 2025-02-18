import React from 'react';
import { Row, Col, Button, Typography, List } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './AboutUs.css';

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="main-container_about">
      <div className="header-section_about">

        {/* Full-Width Section */}

        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Title className="about-us-title headingText">{t("HomePage.AboutCompany.mainTitle")}</Title>
          </Col>
        </Row>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <Title level={3} className="subHeadingText">What We Do?</Title>
            <Paragraph className="paraText">
              At HRVI Group Of Company, we specialize in providing world-class solutions for the HVAC industry, focusing on Fan Coil Units (FCU), Air Handling Units (AHU), and Fresh Air Handling Units (FAHU). Our comprehensive services cater to diverse industries across the globe, delivering high-performance, energy-efficient systems that ensure comfort and sustainability.
            </Paragraph>
          </Col>

          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} className="about-us-image-wrapper">
            <div className="about-us-image-container">
              <img src="/Media/WhatWeDo.jpg" alt="What We Do" className="about-us-image" />
            </div>
          </Col>
        </Row>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} className="about-us-image-wrapper">
            <div className="about-us-image-container">
              <img src="/Media/CoreService.jpg" alt="Our Core Services" className="about-us-image" />
            </div>
          </Col>

          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
            <Title level={3} className="subHeadingText">Our Core Services Include:</Title>
            <List
              className="about-us-list paraText"
              dataSource={[
                t("HomePage.AboutCompany.service1"),
                t("HomePage.AboutCompany.service2"),
                t("HomePage.AboutCompany.service3"),
              ]}
              renderItem={(item) => (
                <List.Item>
                  <span className="list-icon">&#8669;</span> {item}
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <Paragraph className="about-us-secondHading subHeadingText">
              <strong> {t("HomePage.AboutCompany.secondTitle")}</strong>
            </Paragraph>
            <List
              className="about-us-list paraText"
              dataSource={[
                t("HomePage.AboutCompany.feature1"),
                t("HomePage.AboutCompany.feature2"),
                t("HomePage.AboutCompany.feature3"),
                t("HomePage.AboutCompany.feature4"),
                t("HomePage.AboutCompany.feature5"),
                t("HomePage.AboutCompany.feature6"),
              ]}
              renderItem={(item) => (
                <List.Item>
                  <span className="list-icon">&#8669;</span> {item}
                </List.Item>
              )}
            />
          </Col>

          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} className="about-us-image-wrapper">
            <div className="about-us-image-container">
              <img src="/Media/AboutUs.jpg" alt="Office Team" className="about-us-image" />
            </div>
          </Col>

          <Col xs={{ span: 24, order: 3 }} md={{ span: 12, order: 3 }}>
            <div className="about-us-buttons">
              <Button type="default" className="read-more-button">
                <Link to="/about">{t("HomePage.AboutCompany.btn1")}</Link>
              </Button>
              <Button type="default" className="download-button">
                <a href="/Media/Brochure.pdf" download="Brochure.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {t("HomePage.AboutCompany.btn2")}
                </a>
              </Button>
            </div>
          </Col>
        </Row>


      </div>
    </div>
  );
}
