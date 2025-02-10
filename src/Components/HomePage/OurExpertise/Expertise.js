import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './Expertise.css';

const { Title, Text } = Typography;

const Expertise = () => {
const { t } = useTranslation();

  const expertiseItems = [
    { title: t("HomePage.Expertise.prod1"), image: '/Media/2TC.jpg' },
    { title: t("HomePage.Expertise.prod2"), image: '/Media/CB.jpg' },
    { title: t("HomePage.Expertise.prod3"), image: '/Media/auditorium.jpg' },
    { title: t("HomePage.Expertise.prod4"), image: '/Media/malls.jpg' },
    { title: t("HomePage.Expertise.prod5"), image: '/Media/ee.jpg' },
    { title: t("HomePage.Expertise.prod6"), image: '/Media/hospitals.jpg' },
  ];

  return (
    <>
      <div className="expertise-container_expertise">
        <div className="header-section_expertise">
          <Title level={2} className="main-title_expertise">
         { t("HomePage.Expertise.title")}
          </Title>

          <Text className="expertise-description_expertise">
          { t("HomePage.Expertise.desc")}
          </Text>
          <div className="products-section_expertise">
            <Title level={3} className="products-title_expertise">
            { t("HomePage.Expertise.prodTitle")}
            </Title>
            <Row gutter={[16, 16]} justify="center">
              {expertiseItems.map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Link to="/products">
                    <Card className="expertise-card_expertise" hoverable>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="expertise-card-image_expertise"
                      />
                      <Text className="expertise-card-title_expertise">{item.title}</Text>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
