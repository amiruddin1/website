import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import "./ContactUs.css";

import { useTranslation } from "react-i18next";
const { Title } = Typography;

export default function ContactUs() {

    const { t } = useTranslation();
    const onFinish = (values) => {
        console.log("Form values: ", values);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <div className="hero-section_Contact">
            <video
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/Media/ContactUsVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>{t("ContactUsPage.mainTitle")}</h1>
            </div>
        </div>
        <div className="contact-container">
            <div className="contact-hero">
                <Title className="contact-subtitle subHeadingText">
                    {t("ContactUsPage.desc")}
                </Title>
            </div>

            <Row gutter={[32, 32]} className="contact-content">
                <Col xs={24} md={10}>
                    <Card className="contact-info-card">
                        <img src="/Media/Addresses.jpg" alt="Address"/>
                    </Card>
                    <Card className="map-card">
                        <Title className="map-title">
                            {t("ContactUsPage.mapTitle")}
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
                            {t("ContactUsPage.form.title")}
                        </Title>
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                        >
                            <Form.Item
                                label={t("ContactUsPage.form.field1")}
                                name="name"
                                rules={[
                                    { required: true, message: "Please enter your name" },
                                ]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item
                                label={t("ContactUsPage.form.field2")}
                                name="mobile"
                                rules={[
                                    { required: true, message: "Please enter your mobile number" },
                                ]}
                            >
                                <Input placeholder="+91 1234567890" />
                            </Form.Item>
                            <Form.Item
                                label={t("ContactUsPage.form.field3")}
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
                                label={t("ContactUsPage.form.field4")}
                                name="subject"
                                rules={[
                                    { required: true, message: "Please enter the subject" },
                                ]}
                            >
                                <Input placeholder="Enter the subject" />
                            </Form.Item>
                            <Form.Item
                                label={t("ContactUsPage.form.field5")}
                                name="message"
                                rules={[
                                    { required: true, message: "Please enter your message" },
                                ]}
                            >
                                <Input.TextArea rows={25} placeholder="Type your message" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="send-button">
                                {t("ContactUsPage.form.buttonTitle")}
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
