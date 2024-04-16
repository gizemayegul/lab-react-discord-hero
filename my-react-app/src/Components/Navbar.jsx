import logo from "../assets/discord-logo-white.png";
import menu from "../assets/menu-icon.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" />
      </nav>
    </div>
  );
}
