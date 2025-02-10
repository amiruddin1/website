import React from 'react';
import { Row, Col, Button, Typography, List } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './AboutUs.css';

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="expertise-container_about">
      <div className="header-section_about">

        {/* Full-Width Section */}
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Title className="about-us-title">{t("HomePage.AboutCompany.mainTitle")}</Title>
            <Title level={3} className="about-us-subtitle">{t("HomePage.AboutCompany.subTitle")}</Title>
            <Paragraph className="about-us-text">
            {t("HomePage.AboutCompany.mainDesc")}
            </Paragraph>
            <Paragraph className="about-us-text">
              <strong> {t("HomePage.AboutCompany.serviceTitle")}</strong>
            </Paragraph>
            <List
              className="about-us-list-services"
              dataSource={[
                t("HomePage.AboutCompany.service1"),
                t("HomePage.AboutCompany.service2"),
                t("HomePage.AboutCompany.service3"),
              ]}
              renderItem={(item) => (
                <List.Item className='list-services'>
                  <span className="list-icon"></span> {item}
                </List.Item>
              )}
            />
          </Col>
        </Row>

        {/* Split Section (50-50) */}
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <Paragraph className="about-us-text">
              <strong> {t("HomePage.AboutCompany.secondTitle")}</strong>
            </Paragraph>
            <List
              className="about-us-list"
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

            {/* Buttons */}
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

          {/* Image Column */}
          <Col xs={24} md={12} className="about-us-image-wrapper">
            <div className="about-us-image-container">
              <img src="/Media/AboutUs.jpg" alt="Office Team" className="about-us-image" />
            </div>
          </Col>
        </Row>

      </div>
    </div>
  );
}
