import React, { useState, useEffect } from "react";
import "./ResponsiveNavbar.css"; // Стили остаются в этом файле

const ResponsiveNavbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  // Функция для переключения состояния меню
  const toggleNav = () => {
    setMenuActive(!isMenuActive);
  };

  // Эффект для отслеживания изменения размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 790) {
        setMenuActive(false); // Закрыть меню, если размер экрана больше 790px
      }
    };

    // Добавляем обработчик при монтировании
    window.addEventListener("resize", handleResize);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      
      <div
        className={`hamburger ${isMenuActive ? "hamburger-active" : ""}`}
        onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      
      <nav className={isMenuActive ? "nav-active" : ""}>
        <ul>

          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Проекты</a>
          </li>
          <li>
            <a href="#">О Нас</a>
          </li>

        </ul>
      </nav>

      <div className={`menubar ${isMenuActive ? "active" : ""}`}>
        <ul>

          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Проекты</a>
          </li>
          <li>
            <a href="#">О Нас</a>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default ResponsiveNavbar;
