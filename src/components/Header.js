import logo from '../images/logofriends.png';
import '../styles/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        title="Logo Friends"
        alt="Logo Friends"
        src={logo}
      />
      <h1 className="header__title">Frases de Friends</h1>
    </header>
  );
};
export default Header;
