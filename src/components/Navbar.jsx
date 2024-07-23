import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { useNav } from './NavContext';

function Navbar() {
  const { selectedItem, setSelectedItem } = useNav('home');
  
  const [isActive, setIsActive] = useState(false);

  const [menu1, setMenu1] = useState(true);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);

  const toggleActiveClass = () => {
    console.log('isActive: ', isActive);
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const navItemSelected = (e) => {
    setSelectedItem(e.currentTarget.id);
    switch (e.currentTarget.id) {
      case 'home':
        console.log('Home button clicked');
        setMenu1(true);  setMenu2(false);
        setMenu3(false); setMenu4(false);
        break;
      case 'about':
        console.log('About button clicked');
        setMenu1(false); setMenu2(true);
        setMenu3(false); setMenu4(false);
        break;
      case 'exp':
        console.log('Experience button clicked');
        setMenu1(false); setMenu2(false);
        setMenu3(true);  setMenu4(false);
        break;
      case 'ref':
        console.log('References button clicked');
        setMenu1(false); setMenu2(false);
        setMenu3(false); setMenu4(true);
        break;
      default:
        break;
    }
    setIsActive(false); // Close the menu after clicking
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a className={`${styles.logo}`}>Igor Eremin </a>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={navItemSelected} id='home'>
              <a href='#home' className={`${styles.navLink} ${menu1 ? styles.activeItem : ''}`}>Home</a>
            </li>
            <li onClick={navItemSelected} id='about'>
              <a href='#about' className={`${styles.navLink} ${menu2 ? styles.activeItem : ''}`}>About</a>
            </li>
            <li onClick={navItemSelected} id='exp'>
              <a href='#experience' className={`${styles.navLink} ${menu3 ? styles.activeItem : ''}`}>Experience</a>
            </li>
            <li onClick={navItemSelected} id='ref'>
              <a href='#references' className={`${styles.navLink} ${menu4 ? styles.activeItem : ''}`}>References</a>
            </li>
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
