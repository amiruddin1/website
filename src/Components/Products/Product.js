import React, { useEffect } from "react";
import { Row, Col, Card, Typography } from "antd";
import "./Products.css";
import { useTranslation } from "react-i18next";
const { Title, Paragraph } = Typography;

export default function Product() {
  const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="container_products">
            <Title className="title_products">{t("ProductPage.title")}</Title>

            <Paragraph className="description_products">
            {t("ProductPage.desc")}
            </Paragraph>

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12} lg={8}>
                    <Card className="product-card">
                        <div className="image-container">
                            <img alt="Fan Coil Unit" src="./Media/Product1.jpg" />
                        </div>
                        <Card.Meta
                            title={t("ProductPage.product1")}
                            description={t("ProductPage.prod1_desc")}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={12} lg={8}>
                    <Card className="product-card">
                        <div className="image-container">
                            <img alt="Air Handling Unit" src="./Media/Product2.jpg" />
                        </div>
                        <Card.Meta
                           title={t("ProductPage.product2")}
                           description={t("ProductPage.prod2_desc")}
                        />
                    </Card>
                </Col>

                <Col xs={24} md={12} lg={8}>
                    <Card className="product-card">
                        <div className="image-container">
                            <img alt="Fresh Air Handling Unit" src="./Media/Product3.jpg" />
                        </div>
                        <Card.Meta
                           title={t("ProductPage.product3")}
                           description={t("ProductPage.prod3_desc")}
                        />
                    </Card>
                </Col>
            </Row>


            <div className="why-choose">
                <Title level={2} className="why-choose-title">{t("ProductPage.whyChooseTitle")}</Title>
                <ul className="reasons-list">
                    <li className="paraText"><strong><u>{t("ProductPage.point1")}</u></strong>{t("ProductPage.detail1")}</li>
                    <li className="paraText"><strong><u>{t("ProductPage.point2")}</u></strong> {t("ProductPage.detail2")}</li>
                    <li className="paraText"><strong><u>{t("ProductPage.point3")}</u></strong> {t("ProductPage.detail3")}</li>
                    <li className="paraText"><strong><u>{t("ProductPage.point4")}</u></strong> {t("ProductPage.detail4")}</li>
                    <li className="paraText"><strong><u>{t("ProductPage.point5")}</u></strong> {t("ProductPage.detail5")}</li>
                </ul>
            </div>
        </div>
    );
}
