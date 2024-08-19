"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
function Model() {
  const [size, setSize] = useState("small");
  useGSAP(() => {
    const [model, setModel] = useState({
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
      img: yellowImg,
    });
    gsap.to("#heading", {
      opacity: 1,
      delay: 1,
      y: 0,
    });
  }, []);
  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a close look
        </h1>
        <div className="flex flex-col items-center mt-5 ">
          <div className="w-full h-[75vh] md:h-[90vh] relative overflow-hidden   ">
            <ModelView index={1} groupRef />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
