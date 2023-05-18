import { Link } from "react-scroll";
import "../sass/navBar.scss";

export default function NavBar() {
  return (
    <header>
      <p>logo</p>
      <nav>
        <Link className="navLink" to="projects" spy smooth duration={500}>
          Projets
        </Link>
        <Link className="navLink" to="footer" spy smooth duration={1000}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
