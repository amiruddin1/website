import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import "./OurClients.css";
import { useTranslation } from "react-i18next";
const { Title } = Typography;

export default function OurClients() {
const { t } = useTranslation();
    const images = [
        './Media/c1.jpg',
        './Media/c2.jpg',
        './Media/c3.jpg',
        './Media/c4.jpg',
        './Media/c5.jpg',
        './Media/c6.jpg',
        './Media/c7.jpg'
    ];
    return (
        <>
            <div className="expertise-container_clients">
                <div className="header-section_clients">
                    <Title level={2} className="main-title_clients">
                        {t("HomePage.OurClients")}
                    </Title>

                    <div className="tabs-section_clients">
                        <Layout style={{ minHeight: "50vh", padding: "20px", background: "#f7f7f7" }}>
                            <Row gutter={[32, 32]} justify="center">
                                {images.map((src, index) => (
                                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                                        <div className="image-card">
                                            <img src={src} alt={`Client ${index + 1}`} className="client-image" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Layout>
                    </div>
                </div>
            </div>
        </>
    )
}
