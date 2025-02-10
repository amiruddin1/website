import React from 'react';
import { Card, Row, Col, Rate, Typography } from 'antd';
import { useTranslation } from "react-i18next";
import './Feedbacks.css';
const { Title } = Typography;
const testimonials = [
  {
    name: 'Vikash Gupta',
    feedback: 'We are so grateful DESIGN HOUSE was selected for our new retail project. Working so closely with ...',
    rating: 5,
  },
  {
    name: 'Aadesh Singh',
    feedback: 'It has been a pleasure and a positive experience working with Design House. Their team did more t...',
    rating: 5,
  },
  {
    name: 'Tara Kumar',
    feedback: 'Design House has done for us in an efficient and professional manner. The exceptionally talented ...',
    rating: 5,
  },
  {
    name: 'Vikash Gupta',
    feedback: 'We are so grateful DESIGN HOUSE was selected for our new retail project. Working so closely with ...',
    rating: 5,
  },
  {
    name: 'Aadesh Singh',
    feedback: 'It has been a pleasure and a positive experience working with Design House. Their team did more t...',
    rating: 5,
  },
  {
    name: 'Tara Kumar',
    feedback: 'Design House has done for us in an efficient and professional manner. The exceptionally talented ...',
    rating: 5,
  },
];

export default function Feedback() {
  const { t } = useTranslation();
  return (
    <>
      <div className="expertise-container_feedback">
        <div className="header-section_feedback">
          <Title level={2} className="main-title_feedback">
            {t("HomePage.FeedbackTitle")}
          </Title>

          <div className="tabs-section_feedback">
            <Row gutter={[16, 16]} justify="center">
              {testimonials.map((testimonial, index) => (
                <Col key={index} xs={24} sm={12} md={6}>
                  <Card className="testimonial-card">
                    <Rate disabled defaultValue={testimonial.rating} className="testimonial-rating" />
                    <p className="testimonial-feedback">{testimonial.feedback}</p>
                    <div className="testimonial-name">{testimonial.name}</div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
