import React, { useState } from "react";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-menu">
      {/* Navbar для компьютеров */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>

      {/* Hamburger меню для телефонов */}
      <div className="hamburger-menu">
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <a href="#home" onClick={toggleMenu}>Главная</a>
            <a href="#about" onClick={toggleMenu}>О нас</a>
            <a href="#services" onClick={toggleMenu}>Услуги</a>
            <a href="#contact" onClick={toggleMenu}>Контакты</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;
