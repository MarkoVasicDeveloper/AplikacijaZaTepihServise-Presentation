import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { subtitle } from "../../../../Misc/Subtitle/subtitle";
import "./Hero.css";

export default function HeroSection() {

  const h3Tag = useRef(null) as any;

  useEffect(() => {
    let counter = 0;

    const heroInterval = setInterval(() => {
      if(h3Tag.current !== null) 
      h3Tag.current.innerText = subtitle[counter];
      counter++;
      if(counter === subtitle.length) counter = 0;
    }, 10000);
    return () => clearInterval(heroInterval)
  }, [])
  
  
  return (
    <section id="hero">
      <Canvas id="canvas">
        <Suspense fallback={null}> 
          <OrbitControls autoRotate={true} enableZoom={false} />
          <Stars />
        </Suspense>
      </Canvas>
      <div className="container">
        <h1>Poslovni Softver</h1>
        <h1>Poslovni Softver</h1>
        <div className="subtitle">
          <h3 ref={h3Tag}>
            Unapredite poslovanje Vaseg tepih servisa uz pomoc Washer poslovnog sofvera!
          </h3>
          <div className="mask"></div>
        </div>
        <div className="heroDescription">
          <p>Prvi poslovni softver na balkanu namenjen tepih servisima!</p>
        </div>
      </div>
    </section>
  );
}
