import React, { useState, useEffect } from 'react';
import './Hambmenu.css';

function Hambmenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Обработчик открытия/закрытия меню
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle('noscroll', !isMenuOpen); // Блокируем прокрутку
  };

  // Обработчик закрытия меню при клике на ссылку
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('noscroll');
  };

  // Эффект для отслеживания изменения размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 790) {
        setIsMenuOpen(false); // Закрыть меню, если размер экрана больше 790px
        document.body.classList.remove('noscroll');
      }
    };

    // Добавляем обработчик при монтировании
    window.addEventListener('resize', handleResize);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Hambmenu">

      {/* Гамбургер-иконка */}
      <div className={`hamb ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamb__field">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Основное меню для ПК */}
      <nav className="navbar">
        <div className="navbar_wrap">
          <ul className="menu">

            <li>
              <a className="activeMenu" href="Projects.html">
                ПРОЕКТЫ
              </a>
            </li>
            <li>
              <a href="about.html">О НАС</a>
            </li>
            
          </ul>
        </div>
      </nav>

      {/* Выпадающее меню (мобильное) */}
      <div className={`popup ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu">

          <li>
            <a href="Projects.html" onClick={closeMenu}>
              ПРОЕКТЫ
            </a>
          </li>
          <li>
            <a href="about.html" onClick={closeMenu}>
              О НАС
            </a>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Hambmenu;
