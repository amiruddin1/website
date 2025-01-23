import React from "react";
import { Typography, Row, Col, Card, Carousel } from "antd";
import "./AboutUsPage.css";

const { Title, Text, Paragraph } = Typography;

export default function AboutUsPage() {
  const data = [
    {
      title: "Reliable",
      icon: "✔️",
      points: [
        "Unmatched performance ensures seamless operation, even in demanding conditions.",
        "Consistency first: High-performing solutions tailored for every industry we serve.",
      ],
    },
    {
      title: "High Industry Standards",
      icon: "🏅",
      points: [
        "Certified excellence: All AHU, FCU, and FAHU products adhere to strict international certifications.",
        "Exceeding expectations: Our products surpass quality benchmarks to ensure trust and satisfaction.",
      ],
    },
    {
      title: "Innovative Mindset",
      icon: "💡",
      points: [
        "Tech-driven innovation: We design energy-efficient, environmentally friendly HVAC systems.",
        "Sustainable solutions: Leveraging advanced technology for smarter, greener air conditioning.",
      ],
    },
    {
      title: "Continuous Improvement",
      icon: "🔄",
      points: [
        "Constant upgrades: Regular evaluations of processes and designs to meet market demands.",
        "Feedback-driven growth: Customer feedback ensures top-tier, aligned solutions.",
      ],
    },
    {
      title: "Expertise",
      icon: "👩‍🔧",
      points: [
        "Specialized team: Years of experience creating tailored solutions for healthcare, hospitality, and commercial sectors.",
        "Worry-free operation: Expertise ensures smooth installation, operation, and maintenance.",
      ],
    },
    {
      title: "Flexible",
      icon: "🔧",
      points: [
        "Customized solutions: Tailored systems for diverse projects, from hospitals to shopping malls.",
        "Adaptive integration: Seamless compatibility with specific project requirements.",
      ],
    },
    {
      title: "Customer-Centric Approach",
      icon: "🤝",
      points: [
        "Personalized support: From consultation to after-sales service, we are with you every step of the way.",
        "Efficient service: Dedicated to delivering quick, personalized attention.",
      ],
    },
    {
      title: "Energy Efficiency",
      icon: "⚡",
      points: [
        "Optimized performance: Energy-efficient systems reduce costs and environmental impact.",
        "Minimal footprint: Advanced technology ensures maximum performance with minimal energy usage.",
      ],
    },
    {
      title: "Global Reach",
      icon: "🌐",
      points: [
        "Worldwide network: A strong export network for timely HVAC solutions delivery worldwide.",
        "Trusted partner: Scalable solutions tailored for international projects.",
      ],
    },
    {
      title: "Sustainability Focus",
      icon: "♻️",
      points: [
        "Eco-friendly design: Emphasis on minimizing carbon footprint through sustainable materials.",
        "Greener future: HVAC systems aligned with global sustainability goals.",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <Title className="hero-title">About Us</Title>
          <Paragraph className="hero-subtitle">
            India's Leading Manufacturer of Energy-Efficient HVAC Solutions
          </Paragraph>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="features-section">
        <Title level={2} className="section-title">
          What Makes HRVI Groups the Best HVAC Manufacturer?
        </Title>
        <Carousel autoplay className="features-carousel">
          {data.map((item, index) => (
            <div key={index} className="carousel-card">
              <Card
                hoverable
                className="custom-card"
                title={
                  <div className="card-title">
                    <span className="card-icon">{item.icon}</span> {item.title}
                  </div>
                }
              >
                {item.points.map((point, i) => (
                  <Text key={i} className="card-point">
                    {point}
                  </Text>
                ))}
              </Card>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Description Section */}
      {/* About Section */}
      <div className="about-container">
        <Row gutter={32} className="about-row">
          {/* Our Story */}
          <Col xs={24} sm={24} md={8} className="about-card">
            <Card className="custom-card" hoverable>
              <img
                src="/Media/OurMission.jpg"
                alt="Our Story"
                className="about-image"
              />
              <div className="card-content">
                <Title level={3} className="about-title">Our Story</Title>
                <Text className="about-text">
                  Transform your spaces with cutting-edge HVAC systems designed for
                  optimal comfort, superior efficiency, and timeless performance. HRVI
                  Groups is a trusted name in the HVAC industry, committed to delivering
                  sustainable solutions tailored to your needs.
                </Text>
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
                <Title level={3} className="about-title">Our Vision</Title>
                <Text className="about-text">
                  Our innovative HVAC products are designed to cater to a wide range of
                  applications, including residential, commercial, and industrial spaces.
                  We envision a future where energy efficiency and environmental
                  sustainability go hand-in-hand.
                </Text>
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
                <Title level={3} className="about-title">Our Mission</Title>
                <Text className="about-text">
                  We aim to provide high-quality, energy-efficient HVAC solutions,
                  ensuring comfort, reliability, and environmental sustainability.
                  Our mission is to deliver innovation-driven HVAC products with a focus
                  on customer satisfaction and operational excellence.
                </Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
