import React, { useState } from "react";
import { Tabs, Row, Col, List, Typography } from "antd";
import "./OurServices.css";
const { Title } = Typography;

const { TabPane } = Tabs;

export default function Services() {
  const [activeTab, setActiveTab] = useState("1");

  const tabContent = [
    {
      key: "1",
      title: "Professional Fitting & Installation Services",
      description:
        "We offer expert installation and fitting services to ensure your systems are set up correctly and efficiently:",
      image: "/Images/slide2.jfif",
      features: [
        <>
          <strong>Seamless Installation:</strong> Our team provides step-by-step
          assistance to ensure smooth and precise system setup.
        </>,
        <>
          <strong>Technical Support:</strong> Experienced professionals are
          available to address on-site challenges and provide guidance during
          installation.
        </>,
        <>
          <strong>Optimization:</strong> We ensure the installed units operate
          at peak efficiency for long-term performance.
        </>,
      ],
    },
    {
      key: "2",
      title: "After-Sales Services & Fitting Solutions",
      description:
        "At HRVI Group Of Company we believe that our commitment to you goes far beyond product delivery. Our comprehensive after-sales support and fitting services ensure that your systems perform optimally, delivering comfort and efficiency for years to come.",
      image: "/Images/slide1.jfif",
      features: [

      ],
    },
    {
      key: "3",
      title: "Comprehensive After-Sales Support",
      description: "",
      image: "/Images/slide3.jfif",
      features: [
        <>
          <strong>System Upgrades & Repairs:</strong> Professional solutions for
          upgrading or repairing systems to enhance their longevity and
          performance.
        </>,
        <>
          <strong>Spare Parts Availability:</strong> Quick access to genuine
          spare parts for replacements and repairs, minimizing system downtime.
        </>,
        <>
          <strong>"Regular Maintenance Plans:</strong> Scheduled maintenance
          services to ensure your systems remain energy-efficient and
          operational.
        </>,
      ],
    },
    {
      key: "4",
      title: "Why Our After-Sales Services Matter",
      description: "",
      image: "/Images/slide4.jfif",
      features: [
        <>
          <strong>Reliability:</strong> Dependable support ensures that your systems
          operate smoothly for years.
        </>,
        <>
          <strong>Efficiency:</strong> Regular servicing minimizes breakdowns and
          maintains energy-efficient performance.
        </>,
        <>
          <strong>Expert Care:</strong> Our experienced team provides fast, effective,
          and professional solutions.
        </>,
        <>
          <strong>Peace of Mind:</strong> Knowing that expert support is always a call
          away gives you complete confidence in your investment.
        </>,
      ],
    },
  ];

  return (
    <>
      <div className="expertise-container_services">
        <div className="header-section_services">
          <Title className="main-title_services">
            Our Major Services
          </Title>

          <div className="tabs-section_services">
            <div className="tabbed-layout-container">
              <Tabs
                activeKey={activeTab}
                onChange={(key) => setActiveTab(key)}
                centered
              >
                {tabContent.map((tab) => (
                  <TabPane tab={tab.title} key={tab.key} className="extra-design">
                    <Row gutter={32} align="middle">
                      <Col xs={24} md={10}>
                        <div className="tab-image-container">
                          <img src={tab.image} alt={tab.title} className="tab-image" />
                        </div>
                      </Col>
                      <Col xs={24} md={14}>
                        <p className="tab-description">{tab.description}</p>
                        {tab.features.length > 0 && ( 
                          <List
                            dataSource={tab.features}
                            renderItem={(item) => (
                              <List.Item className="tab-feature-item">
                                <span className="feature-icon">✔</span> {item}
                              </List.Item>
                            )}
                          />
                        )}
                      </Col>
                    </Row>
                  </TabPane>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
