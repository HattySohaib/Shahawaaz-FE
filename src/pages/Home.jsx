import React, { useEffect, useState } from "react";
import li from "../assets/li.png";
import tw from "../assets/tw.png";
import ins from "../assets/in.png";
import "./Home.css";
import Carousel from "../components/Carousel/Carousel";
import Testimonials from "./Testimonials";

function Home() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroTop = document.getElementById("hero-top");
      const heroBottom = document.querySelector(".hero-bottom");
      const shrinkFactor = 1 - scrollPosition / window.innerHeight;
      const minShrinkFactor = 0.7;
      const scaleValue = Math.max(minShrinkFactor, shrinkFactor);

      heroTop.style.transform = `scale(${scaleValue})`;
      heroTop.style.opacity = `${scaleValue}`;

      if (scrollPosition > 0) {
        heroBottom.classList.add("shadow");
      } else {
        heroBottom.classList.remove("shadow");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-featured");
        const data = await response.json();
        console.log(data);
        setSlides(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hero">
      <div id="hero-top">
        <div className="header">
          <h1>Selling Products by Telling Stories.</h1>
        </div>
        <div className="socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sahabaj-alam-khan-content-seo/"
          >
            <img className="social-icon" src={li} alt="LinkedIn" />
          </a>
          <a target="_blank" href="https://x.com/Da_Sahabaj">
            <img className="social-icon" src={tw} alt="Twitter" />
          </a>
          <a target="_blank" href="https://www.instagram.com/writer_marketeer/">
            <img className="social-icon" src={ins} alt="Instagram" />
          </a>
        </div>
        <div className="buttons-container"></div>
      </div>
      <div className="hero-bottom">
        <div className="featured-section">
          <Carousel slides={Array.from(slides)} />
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default Home;
