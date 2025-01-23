import React from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import "./ContactUs.css";

const { Title, Text } = Typography;
export default function ContactUs() {
    const onFinish = (values) => {
        console.log("Form values: ", values);
    };

    return (<>
        <div className="hero-section_Contact">
            <div className="hero-overlay_Contact">
            </div>
        </div>
        <div className="contact-container">
            <div className="contact-hero">
                <Title className="contact-subtitle" level={2}>
                    For questions or concerns, please contact us via telephone or simply complete the contact form. One of our knowledgeable representatives will respond in a timely manner.
                </Title>
            </div>

            <Row gutter={[32, 32]} className="contact-content">
                <Col xs={24} md={10}>
                    <Card className="contact-info-card">
                        <Title level={4} className="info-title">
                            Our Offices
                        </Title>
                        <div className="info-section">
                            <Text strong>Headquarter Address</Text>
                            <Text>New India Colony, Nikol Road, Ahmedabad, India, 382350</Text>
                        </div>
                        <div className="info-section">
                            <Text strong>Manufacturing Unit</Text>
                            <Text>Plot NO 9 Patwari Colony, Near DAV School, Kushlipur Palwal, Haryana, India, 121102</Text>
                        </div>
                        <div className="info-section">
                            <Text strong>Phone</Text>
                            <Text>+91 9876543210</Text>
                        </div>
                        <div className="info-section">
                            <Text strong>Email</Text>
                            <Text>contact@hrvigroups.com</Text>
                        </div>
                    </Card>
                    <Card className="map-card">
                        <Title level={4} className="map-title">
                            Headquarter Location
                        </Title>
                        <iframe
                            className="map-iframe"
                            title="Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4607.928887060687!2d72.66256137616983!3d23.058735479148442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8729e8635bdf%3A0xf3404f63cf9f8c92!2sNikol%20Rd%2C%20Ahmedabad%2C%20Gujarat%20382410!5e1!3m2!1sen!2sin!4v1735715588796!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Card>
                </Col>

                <Col xs={24} md={14}>
                    <Card className="contact-form-card">
                        <Title level={4} className="form-title">
                            Send Us a Message
                        </Title>
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                        >
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    { required: true, message: "Please enter your name" },
                                ]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item
                                label="Mobile Number with Country Code"
                                name="mobile"
                                rules={[
                                    { required: true, message: "Please enter your mobile number" },
                                ]}
                            >
                                <Input placeholder="+91 1234567890" />
                            </Form.Item>
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[
                                    {
                                        type: "email",
                                        message: "Please enter a valid email address",
                                    },
                                    { required: true, message: "Please enter your email" },
                                ]}
                            >
                                <Input placeholder="example@example.com" />
                            </Form.Item>
                            <Form.Item
                                label="Subject"
                                name="subject"
                                rules={[
                                    { required: true, message: "Please enter the subject" },
                                ]}
                            >
                                <Input placeholder="Enter the subject" />
                            </Form.Item>
                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[
                                    { required: true, message: "Please enter your message" },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Type your message" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="send-button">
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>


            </Row>
        </div>
    </>
    );
}
