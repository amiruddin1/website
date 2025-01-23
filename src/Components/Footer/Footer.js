import React from 'react';
import { Row, Col, Button } from 'antd';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]}>
        {/* Company Info Section */}
        <Col xs={24} md={8}>
          <div className="footer-logo">
            <img src="/Images/Logo.jfif" alt="Design House Logo" />
          </div>
          <p className="footer-description">
            At HRVI Group Of Company, we bring unparalleled expertise in the HVAC industry, specializing in the
            manufacturing and export of high-performance air conditioning systems. Our team combines technical
            knowledge, innovative engineering, and years of experience to deliver solutions that exceed client
            expectations.
          </p>
          <Button type="primary" className="footer-button">More Info</Button>
        </Col>

        {/* Quick Links Section */}
        <Col xs={24} md={8}>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>+ Retail Interiors</li>
            <li>+ Corporate Interiors</li>
            <li>+ Restaurant Interior</li>
            <li>+ Shop In Shops</li>
            <li>+ Retail Display Merchandising</li>
            <li>+ Retail Kiosk</li>
            <li>+ Exhibition & Events</li>
            <li>+ Interior Design Company</li>
          </ul>
        </Col>

        {/* Contact Section */}
        <Col xs={24} md={8}>
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">
            <strong>Phone Number</strong><br />
            +91-9654900525<br />
            +91-9310608427
          </p>
          <p className="footer-contact">
            <strong>Email Address</strong><br />
            info@designhouse.co.in
          </p>
          <p className="footer-contact">
            <strong>Location</strong><br />
            12/29, Site-II, Loni Road, Industrial Area, Mohan Nagar, Ghaziabad, Uttar Pradesh, Pin No. 201007, Bharat
          </p>
        </Col>
      </Row>
    </div>
  )
}
