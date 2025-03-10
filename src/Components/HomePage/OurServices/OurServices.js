import React, { useState } from "react";
import { Tabs, Row, Col, List, Typography, Button } from "antd";
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";
import "./OurServices.css";
import { useTranslation } from "react-i18next";
const { Title } = Typography;

const { TabPane } = Tabs;

export default function Services() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("1");

  const tabContent = [
    {
      key: "1",
      title: t("HomePage.Services.slide1.title"),
      description:
        t("HomePage.Services.slide1.desc"),
      image: "/Media/cs1.jfif",
      features: [
        <>
          {t("HomePage.Services.slide1.point1")}
        </>,
        <>
          {t("HomePage.Services.slide1.point2")}
        </>,
        <>
          {t("HomePage.Services.slide1.point3")}
        </>,
      ],
    },
    {
      key: "2",
      title: t("HomePage.Services.slide2.title"),
      description:
        t("HomePage.Services.slide2.desc"),
      image: "/Media/CS3.jpg",
      features: [

      ],
    },
    {
      key: "3",
      title: t("HomePage.Services.slide3.title"),
      description: "",
      image: "/Media/CS2.jpg",
      features: [
        <>
          {t("HomePage.Services.slide3.point1")}
        </>,
        <>
          {t("HomePage.Services.slide3.point2")}
        </>,
        <>
          {t("HomePage.Services.slide3.point3")}
        </>,
      ],
    },
    {
      key: "4",
      title: t("HomePage.Services.slide4.title"),
      description: "",
      image: "/Media/Product3.jpg",
      features: [
        <>
          {t("HomePage.Services.slide4.point1")}
        </>,
        <>
          {t("HomePage.Services.slide4.point2")}
        </>,
        <>
          {t("HomePage.Services.slide4.point3")}
        </>,
        <>
          {t("HomePage.Services.slide4.point4")}
        </>,
      ],
    },
  ];
  const changeTab = (direction) => {
    const currentIndex = tabContent.findIndex(tab => tab.key === activeTab);
    let newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0) newIndex = tabContent.length - 1; 
    if (newIndex >= tabContent.length) newIndex = 0; 

    setActiveTab(tabContent[newIndex].key);
  };
  return (
    <>
      <div className="main_container_services">
        <div className="header-section_services">
          <Title className="main-title_services headingText">
            {t("HomePage.Services.title")}
          </Title>

          <div className="tabs-section_services">
            <div className="tabbed-layout-container">
                <Button className="tab-nav-btn" onClick={() => changeTab("prev")}><CaretLeftOutlined /> Previous</Button>
                <Button className="tab-nav-btn" onClick={() => changeTab("next")}><CaretRightOutlined />Next </Button>
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
                        <p className="tab-description paraText">{tab.description}</p>
                        {tab.features.length > 0 && (
                          <List
                            dataSource={tab.features}
                            renderItem={(item) => (
                              <List.Item className="tab-feature-item paraText">
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
    </>
  );
}
