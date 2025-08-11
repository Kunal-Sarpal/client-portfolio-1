import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import visuraImg from "./Visura-04.png"; // Make sure this path is correct

const IndexPage = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <div
      ref={containerRef}
      className="w-full h-screen scale-80 md:scale-100  overflow-hidden   flex items-center justify-center"
    >
      <img
        ref={imgRef}
        className="h-full object-cover"
        src={visuraImg}
        alt="Visura"
      />
    </div>
  );
};

export default IndexPage;
