import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import './Expertise.css';

const { Title, Text } = Typography;

const Expertise = () => {
  return (
    <>
      <div className="expertise-container_expertise">
        <div className="header-section_expertise">
          <Title level={2} className="main-title_expertise">
            Expertise in HVAC Industry
          </Title>

          <Text className="expertise-description_expertise">
            At <strong>HRVI Group Of Company</strong>, we bring unparalleled expertise in the HVAC industry,
            specializing in the manufacturing and export of high-performance air conditioning systems. Our team combines
            technical knowledge, innovative engineering, and years of experience to deliver solutions that exceed client
            expectations.
          </Text>
          <div className="products-section_expertise">
            <Title level={4} className="products-title_expertise">
              Our Products Are Used In
            </Title>
            <Row gutter={[16, 16]} justify="center">
              {[
                'Technology Centers',
                'Commercial Buildings',
                'Auditorium Halls',
                'Multiplexes / Malls / Shopping Centers',
                'Educational Institutes',
                'Hospitals / Pharmaceutical Plants',
              ].map((item, index) => (
                <Col xs={24} sm={12} md={8} key={index}>
                  <Card className="expertise-card_expertise" hoverable>
                    <Text>{item}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Expertise;
