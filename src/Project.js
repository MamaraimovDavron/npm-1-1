import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPlane,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import "./app.css";
const date = new Date();

class Project extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <a href="!#">Олег Марков</a>
          <ul>
            <li>
              <a href="!#">Главная</a>
              <a href="!#">Обо мне</a>
              <a href="!#">Связаться</a>
            </li>
          </ul>
        </header>

        <div className="projectBody">
          <div className="box one">
            <img src={img1} alt="" />
          </div>
          <div className="box two">
            <img src={img2} alt="" />
          </div>
          <div className="box three">
            <img src={img3} alt="" />
          </div>
          <div className="box four">
            <img src={img4} alt="" />
          </div>
          <div className="box five">
            <img src={img5} alt="" />
          </div>
          <div className="box six">
            <img src={img6} alt="" />
          </div>
          <div className="box seven">
            <img src={img7} alt="" />
          </div>
          <div className="box eight">
            <img src={img8} alt="" />
          </div>
          <div className="box eight">
            <img src={img9} alt="" />
          </div>
        </div>

        <footer>
          <div className="up">
            <p>
              © {date.getFullYear()} Олег Марков. Сайт создан на{" "}
              <a href="#">Wix.com.</a>{" "}
            </p>
          </div>

          <div className="down">
            <a href="!#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="!#">
              <FontAwesomeIcon icon={faPlane} />
            </a>

            <a href="!#">
              <FontAwesomeIcon icon={faTelevision} />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Project;
