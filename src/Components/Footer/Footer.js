import React from 'react';
import { Row, Col, Button } from 'antd';
import './Footer.css';

import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <div className="footer-logo">
            <img src="/Media/Tlogo.jpg" alt="Logo" />
          </div>
          <p className="footer-description">
            {t("Footer.para")}
          </p>
          <Button type="primary" className="footer-button">{t("Footer.more")}</Button>
        </Col>
        <Col xs={24} md={8}>
          <h3 className="footer-title">{t("Footer.ql.title")}</h3>
          <ul className="footer-links">
            <li>- {t("Footer.ql.point1")}</li>
            <li>- {t("Footer.ql.point2")}</li>
            <li>- {t("Footer.ql.point3")}</li>
            <li>- {t("Footer.ql.point4")}</li>
            <li>- {t("Footer.ql.point5")}</li>
            <li>- {t("Footer.ql.point6")}</li>
            <li>- {t("Footer.ql.point7")}</li>
            <li>- {t("Footer.ql.point8")}</li>
          </ul>
        </Col>

        {/* Contact Section */}
        <Col xs={24} md={8}>
          <h3 className="footer-title">{t("Footer.contact.title")}</h3>
          <p className="footer-contact">
            <strong>{t("Footer.contact.phone_title")}</strong><br />
            {t("Footer.contact.number1")}<br />
            {t("Footer.contact.number2")}
          </p>
          <p className="footer-contact">
            <strong>{t("Footer.contact.email_title")}</strong><br />
            {t("Footer.contact.id")}
          </p>
          <p className="footer-contact">
            <strong>{t("Footer.contact.locationTitle")}</strong><br />
            {t("Footer.contact.location")}
          </p>
        </Col>
      </Row>
    </div>
  )
}
