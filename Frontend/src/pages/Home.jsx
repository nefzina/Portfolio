import NavBar from "../components/NavBar";
import Description from "../components/Description";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import "../sass/home.scss";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <Description />
      <Projects />
      <Footer />
    </div>
  );
}
