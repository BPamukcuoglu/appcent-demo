import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from "react-dom";
import './index.css';
import App from "./Homepage/App";
import About from "./About/About";
import Header from "./GenericComponents/Header";
import Footer from "./GenericComponents/Footer";
import Details from "./Details/Details";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="details" element={<Details />} />
      </Routes>
      <Footer />
    </div >
  </BrowserRouter>,
  rootElement
);
