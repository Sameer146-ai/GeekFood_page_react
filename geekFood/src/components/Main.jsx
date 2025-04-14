import React from "react";
import { GiHamburger } from "react-icons/gi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import "./Main.css";
import logo from "../assets/logo.svg";
import Homeimage from "../assets/home-img.avif";
import author from "../assets/author-img.avif";
function Main() {
  return (
    <>
      <nav>
        <div className="left-div">
          <img src={logo} alt="GeekFoodLogo" />
          <h3>GeekFoods</h3>
        </div>
        <div className="nav-element">
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurant</li>
          <li>Foods</li>
          <li>Contact</li>
        </div>
        <div className="right-div">
          <button>Get Started</button>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-content">
          <div className="para-heading-div">
            <h1>
              Let Us Find Your <span>Forever Food</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              fugit!
            </p>
          </div>
          <div className="hero-section-btn-div">
            <button>Search Now</button>
            <button>Know More</button>
          </div>
        </div>
      </section>
      <section className="section-hero">
        <div className="hero-img-box">
          <img src={Homeimage} alt="Home Image" className="hero-img" />
        </div>
        <div className="hero-content-box">
          <h1 className="hero-title">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            fugit! Let us guide you to something delicious and unforgettable.
          </p>
          <div className="hero-action-buttons">
            <button className="btn-primary">Get in Touch</button>
          </div>
        </div>
      </section>
      <div class="flex-wrapper">
        <div class="card small">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card medium">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quam error sapiente.
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card large">
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisi, ratione deleniti vel
            ab fugiat?
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card small">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            fugit!
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card medium">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            reprehenderit porro amet libero?
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card large">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            totam.
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card small">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card medium">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            reprehenderit porro amet libero?
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card large">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            totam.
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        <div class="card medium">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            reprehenderit porro amet libero?
          </p>
          <div class="author">
            <img src={author} alt="author" />
            <div>
              <h4>Gladis Lennon</h4>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-logo">
          <GiHamburger /> <h3>logoipsum</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          odit quos mollitia quisquam!
        </p>
        <div className="footer-list">
          <li>About</li>
          <li>Careers</li>
          <li>History</li>
          <li>Services</li>
          <li>Project</li>
          <li>Blog</li>
        </div>
        <div className="icons">
          <IoLogoFacebook />
          <FaInstagram />
          <FaTwitterSquare />
          <FaGithub />
          <IoFootballOutline />
        </div>
      </footer>
    </>
  );
}

export default Main;
