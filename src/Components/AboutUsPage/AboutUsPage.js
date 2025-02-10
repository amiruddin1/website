import React, { useEffect } from "react";
import { Typography, Row, Col, Card, Carousel } from "antd";
import "./AboutUsPage.css";

import { useTranslation } from "react-i18next";
const { Title, Text, Paragraph } = Typography;

export default function AboutUsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      title: t("AboutUsPage.qualities.reliable"),
      icon: "✔️",
      image: "/Media/AboutPics/1reliable.jpg",
      points: [
        t("AboutUsPage.qualities_translated.reliable.point1"),
        t("AboutUsPage.qualities_translated.reliable.point2"),
      ],
    },
    {
      title: t("AboutUsPage.qualities.highIndustryStandards"),
      icon: "🏅",
      image: "/Media/AboutPics/2TC.jpg",
      points: [
        t("AboutUsPage.qualities_translated.highIndustryStandards.point1"),
        t("AboutUsPage.qualities_translated.highIndustryStandards.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.innovativeMindset"),
      icon: "💡",
      image: "/Media/AboutPics/3Innovation.jpg",
      points: [
        t("AboutUsPage.qualities_translated.innovativeMindset.point1"),
        t("AboutUsPage.qualities_translated.innovativeMindset.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.continuousImprovement"),
      icon: "🔄",
      image: "./Media/AboutPics/4Improvement.jpg",
      points: [
        t("AboutUsPage.qualities_translated.continuousImprovement.point1"),
        t("AboutUsPage.qualities_translated.continuousImprovement.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.expertise"),
      icon: "👩‍🔧",
      image: "/Media/AboutPics/5Expertise.jpg",
      points: [
        t("AboutUsPage.qualities_translated.expertise.point1"),
        t("AboutUsPage.qualities_translated.expertise.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.flexible"),
      icon: "🔧",
      image: "/Media/AboutPics/6Flexible.jpg",
      points: [
        t("AboutUsPage.qualities_translated.flexible.point1"),
        t("AboutUsPage.qualities_translated.flexible.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.customerCentric"),
      icon: "🤝",
      image: "/Media/AboutPics/7CustomerApproach.jpg",
      points: [
        t("AboutUsPage.qualities_translated.customerCentric.point1"),
        t("AboutUsPage.qualities_translated.customerCentric.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.energyEfficiency"),
      icon: "⚡",
      image: "/Media/AboutPics/8EnergyEfficient.jpg",
      points: [
        t("AboutUsPage.qualities_translated.energyEfficiency.point1"),
        t("AboutUsPage.qualities_translated.energyEfficiency.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.globalReach"),
      icon: "🌐",
      image: "/Media/AboutPics/9GlobalReach.jpg",
      points: [
        t("AboutUsPage.qualities_translated.globalReach.point1"),
        t("AboutUsPage.qualities_translated.globalReach.point2")
      ],
    },
    {
      title: t("AboutUsPage.qualities.sustainabilityFocus"),
      icon: "♻️",
      image: "/Media/AboutPics/10sustainability.jpg",
      points: [
        t("AboutUsPage.qualities_translated.sustainabilityFocus.point1"),
        t("AboutUsPage.qualities_translated.sustainabilityFocus.point2")
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/Media/AboutUsVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <Title className="hero-title">{t("AboutUsPage.mainTitle")}</Title>
          <Paragraph className="hero-subtitle">
            {t("AboutUsPage.heroSubtitle")}
          </Paragraph>
        </div>
      </div>


      {/* Key Features Section */}
      <div className="features-section">
        <Title className="section-title">
          {t("AboutUsPage.featuresTitle")}
        </Title>
        <Carousel autoplay className="features-carousel">
          {data.map((item, index) => (
            <div key={index} className="carousel-card">
              <Card
                hoverable
                className="custom-card"
                title={
                  <div className="card-title-section">
                    <span className="card-icon">{item.icon}</span> <span className="card-title">{item.title}</span>
                  </div>
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-image"
                />
                {item.points.map((point, i) => (
                  <Text key={i} className="card-point">
                    {point} <br />
                  </Text>
                ))}
              </Card>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Description Section */}
      <div className="about-container">
        <Row gutter={32} className="about-row">
          {/* Our Story */}
          <Col xs={24} sm={24} md={8} className="about-card">
            <Card className="custom-card" hoverable>
              <img
                src="/Media/OurStory.jpg"
                alt="Our Story"
                className="about-image"
              />
              <div className="card-content">
                <Title className="about-title">{t("AboutUsPage.cards.ourStory.title")}</Title>
                <Text className="about-text">{t("AboutUsPage.cards.ourStory.desc")}</Text>
              </div>
            </Card>
          </Col>
          {/* Our Vision */}
          <Col xs={24} sm={24} md={8} className="about-card">
            <Card className="custom-card" hoverable>
              <img
                src="/Media/OurGoals.jpg"
                alt="Our Vision"
                className="about-image"
              />
              <div className="card-content">
                <Title className="about-title">{t("AboutUsPage.cards.ourVision.title")}</Title>
                <Text className="about-text">{t("AboutUsPage.cards.ourVision.desc")}</Text>
              </div>
            </Card>
          </Col>
          {/* Our Mission */}
          <Col xs={24} sm={24} md={8} className="about-card">
            <Card className="custom-card" hoverable>
              <img
                src="/Media/OurMission.jpg"
                alt="Our Mission"
                className="about-image"
              />
              <div className="card-content">
                <Title className="about-title">{t("AboutUsPage.cards.ourMission.title")}</Title>
                <Text className="about-text">{t("AboutUsPage.cards.ourMission.desc")}</Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="owner-profile-section">
        <Title level={2} className="section-title">{t("AboutUsPage.Brand.title")}</Title>
        <Row gutter={32} className="owner-row">
          <Col xs={24} sm={12} md={12}>
            <Card className="owner-card">
              <Title level={3} className="owner-name">{t("AboutUsPage.Brand.owner1.name")}</Title>
              <Text className="owner-title">{t("AboutUsPage.Brand.owner1.subName")}</Text>
              <Paragraph className="owner-description">
                {t("AboutUsPage.Brand.owner1.desc")}
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Card className="owner-card">
              <Title level={3} className="owner-name">{t("AboutUsPage.Brand.owner2.name")}</Title>
              <Text className="owner-title">{t("AboutUsPage.Brand.owner2.subName")}</Text>
              <Paragraph className="owner-description">
                {t("AboutUsPage.Brand.owner2.desc")}
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="why-choose-us">
        <Title level={2} className="section-title">{t("AboutUsPage.whySection.title")}</Title>
        <Row gutter={[32, 32]} className="why-row">
          {[
            {
              icon: "✅",
              title: t("AboutUsPage.whySection.point1.title"),
              points: [
                t("AboutUsPage.whySection.point1.subpoint1"),
                t("AboutUsPage.whySection.point1.subpoint2"),
              ],
            },
            {
              icon: "🔄",
              title: t("AboutUsPage.whySection.point2.title"),
              points: [
                t("AboutUsPage.whySection.point2.subpoint1"),
                t("AboutUsPage.whySection.point2.subpoint2"),
              ],
            },
            {
              icon: "🌍",
              title: t("AboutUsPage.whySection.point3.title"),
              points: [
                t("AboutUsPage.whySection.point3.subpoint1"),
                t("AboutUsPage.whySection.point3.subpoint2"),
              ],
            },
            {
              icon: "🤝",
              title: t("AboutUsPage.whySection.point4.title"),
              points: [
                t("AboutUsPage.whySection.point4.subpoint1"),
                t("AboutUsPage.whySection.point4.subpoint2"),
              ],
            },
            {
              icon: "💡",
              title: t("AboutUsPage.whySection.point5.title"),
              points: [
                t("AboutUsPage.whySection.point5.subpoint1"),
                t("AboutUsPage.whySection.point5.subpoint2"),
              ],
            },
          ].map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index} className="why-card-col">
              <Card className="custom-card-why-choose-section" hoverable>
                <div className="card-title-section">
                  <span className="card-icon">{item.icon}</span>
                  <Title level={4} className="card-title">{item.title}</Title>
                </div>
                <ul className="why-list">
                  {item.points.map((point, i) => (
                    <li key={i} className="card-point">{point}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
