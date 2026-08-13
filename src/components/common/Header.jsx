import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";

import "./Header.css";

const Header = () => {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [lang, setLang] = useState(
    i18n.language?.startsWith("de") ? "de" : "en"
  );

  /* =====================================================
     ACTIVE PAGE
     ===================================================== */

  const getActivePage = (pathname) => {
    if (pathname === "/") return "home";

    if (pathname.startsWith("/betrieb/")) {
      return "detail";
    }

    if (pathname === "/gastgeber") {
      return "host";
    }

    if (pathname === "/ueber") {
      return "about";
    }

    if (pathname === "/rechtliches") {
      return "recht";
    }

    return "home";
  };

  const activePage = getActivePage(location.pathname);

  /* =====================================================
     LANGUAGE HANDLING
     ===================================================== */

  const changeLang = async (next) => {
    await i18n.changeLanguage(next);

    setLang(next);

    document.documentElement.lang = next;
  };

  /* =====================================================
     LISTEN FOR LANGUAGE CHANGES
     ===================================================== */

  useEffect(() => {
    const handleLanguageChanged = (nextLanguage) => {
      const normalizedLanguage = nextLanguage?.startsWith("de")
        ? "de"
        : "en";

      setLang(normalizedLanguage);

      document.documentElement.lang = normalizedLanguage;
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  /* =====================================================
     RESPONSIVE CHECK
     ===================================================== */

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /* =====================================================
     CLOSE MENU AFTER NAVIGATION
     ===================================================== */

  const handleNavClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  /* =====================================================
     ESCAPE KEY
     ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =====================================================
     BODY SCROLL LOCK
     ===================================================== */

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <header className="mt-wrap header">
      <div className="header-content">
        {/* ===============================================
            LEFT SIDE - LOGO
            =============================================== */}

        <div className="header-left">
          <NavLink
            to="/"
            className="logo-link"
            aria-label={t("accessibility.goHome")}
            onClick={handleNavClick}
          >
            <img
              src={logo}
              alt="DEHOGA Sachsen"
              className="logo-img"
            />
          </NavLink>
        </div>

        {/* ===============================================
            NAVIGATION
            =============================================== */}

        <nav
          id="main-navigation"
          className={`header-nav ${
            isMobileMenuOpen ? "mobile-open" : ""
          }`}
          aria-label={t("accessibility.mainNavigation")}
        >
          {/* ============================================
              MOBILE CLOSE BUTTON
              ============================================ */}

          {isMobile && (
            <button
              type="button"
              className="mobile-drawer-close"
              aria-label={t("accessibility.closeNavigation")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          )}

          {/* ============================================
              TABLES
              ============================================ */}

          <NavLink
            to="/"
            className={`nav-btn ${
              activePage === "home" || activePage === "detail"
                ? "active"
                : ""
            }`}
            onClick={handleNavClick}
          >
            {t("navigation.tables")}
          </NavLink>

          {/* ============================================
              HOSTS
              ============================================ */}

          <NavLink
            to="/gastgeber"
            className={`nav-btn ${
              activePage === "host" ? "active" : ""
            }`}
            onClick={handleNavClick}
          >
            {t("navigation.hosts")}
          </NavLink>

          {/* ============================================
              ABOUT
              ============================================ */}

          <NavLink
            to="/ueber"
            className={`nav-btn ${
              activePage === "about" ? "active" : ""
            }`}
            onClick={handleNavClick}
          >
            {t("navigation.about")}
          </NavLink>

          {/* ============================================
              LANGUAGE SELECTOR
              ============================================ */}

          <div
            className="sprache"
            role="group"
            aria-label={t("accessibility.chooseLanguage")}
          >
            <button
              type="button"
              className={
                lang === "de"
                  ? "lang-btn active"
                  : "lang-btn"
              }
              onClick={() => changeLang("de")}
              aria-pressed={lang === "de"}
              lang="de"
            >
              DE
            </button>

            <button
              type="button"
              className={
                lang === "en"
                  ? "lang-btn active"
                  : "lang-btn"
              }
              onClick={() => changeLang("en")}
              aria-pressed={lang === "en"}
              lang="en"
            >
              EN
            </button>
          </div>
        </nav>

        {/* ===============================================
            MOBILE MENU BUTTON - RIGHT SIDE
            =============================================== */}

        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
          aria-label={
            isMobileMenuOpen
              ? t("accessibility.closeNavigation")
              : t("accessibility.openNavigation")
          }
          onClick={() =>
            setIsMobileMenuOpen(
              (previous) => !previous
            )
          }
        >
          <span
            className={`hamburger ${
              isMobileMenuOpen ? "open" : ""
            }`}
            aria-hidden="true"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </span>
        </button>
      </div>

      {/* ===============================================
          MOBILE OVERLAY
          =============================================== */}

      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;