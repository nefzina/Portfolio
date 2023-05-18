import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import arrow from "./assets/right-arrow.png";

function App() {
  const [displayed, setDisplay] = useState(true);

  return (
    <>
      <BrowserRouter>
        <div className={displayed ? "onDisplay" : "notDisplayed"}>
          <div className="wrapper">
            <h1>
              Bonjour,
              <br /> c&apos;est Amani
            </h1>
            <div className="flex">
              <img src={arrow} alt="arrow" />
              <h2 onClick={() => setDisplay(false)}>
                <Link id="portfolio" to="/Home">
                  Portfolio
                </Link>
              </h2>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element="" />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
