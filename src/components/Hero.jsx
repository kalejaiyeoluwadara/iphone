"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo } from "../utils";
import { smallHeroVideo } from "../utils";
import React, { useEffect, useState } from "react";
import Link from "next/link";
function Hero() {
  const [videoSrc, setVideoSrc] = useState(heroVideo);
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, [videoSrc]);
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  return (
    <section className="w-full min-h-screen bg-black  relative ">
      <div className="h-5/6 w-full flex-center flex-col  ">
        <p id="hero" className="hero-title sm:mt-12 ">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20 "
        >
          <Link href={"#highlights"} className="btn">
            Buy
          </Link>
          <p className="font-normal text-xl ">From $199/month or $999 </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
