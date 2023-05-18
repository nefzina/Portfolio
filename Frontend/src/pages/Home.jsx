import NavBar from "../components/NavBar";
import Description from "../components/Description";
import "../sass/home.scss";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <Description />
    </div>
  );
}
