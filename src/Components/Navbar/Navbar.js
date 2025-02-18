import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import TranslateIcon from "@mui/icons-material/Translate";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage("en")}>
        🇬🇧 English
      </Menu.Item>
      <Menu.Item key="zh" onClick={() => changeLanguage("zh")}>
        🇨🇳 中文
      </Menu.Item>
      <Menu.Item key="vi" onClick={() => changeLanguage("vi")}>
        🇻🇳 Tiếng Việt
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className={`light-header ${scrolled ? "scrolled" : ""}`}>
        <Link to="/">
          <div className="logo">
            <img src="/Media/Tlogo.jpg" alt="Logo" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="menu">
          <Link to="/" className="menu-link">
            {t("home")}
          </Link>
          <Link to="/products" className="menu-link">
            {t("products")}
          </Link>
          <Link to="/about" className="menu-link">
            {t("about")}
          </Link>
          <Link to="/contact" className="menu-link">
            {t("contact")}
          </Link>
          <Link to="/media-gallery" className="menu-link">
            {t("gallery")}
          </Link>
        </div>

        {/* Language Icon - Always Visible */}
        <Dropdown overlay={languageMenu} trigger={["click"]}>
          <span className="icon_language mobile-visible">
            <TranslateIcon className="translate-icon" /> Lang
          </span>
        </Dropdown>

        {/* Mobile Menu Button */}
        <Button className="menu-button" icon={<MenuOutlined />} onClick={showDrawer} />

        {/* Drawer Menu (Mobile) */}
        <Drawer title="Menu" placement="right" onClose={closeDrawer} open={drawerVisible}>
          <Menu mode="vertical">
            <Menu.Item key="1" onClick={closeDrawer}>
              <Link to="/">{t("home")}</Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={closeDrawer}>
              <Link to="/products">{t("products")}</Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={closeDrawer}>
              <Link to="/about">{t("about")}</Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={closeDrawer}>
              <Link to="/contact">{t("contact")}</Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={closeDrawer}>
              <Link to="/media-gallery">{t("gallery")}</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
}
