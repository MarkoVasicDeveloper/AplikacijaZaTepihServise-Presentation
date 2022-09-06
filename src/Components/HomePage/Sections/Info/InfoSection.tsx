import { useEffect, useState } from "react";
import Fire from "./Animation/Fire/Fire";
import Ghost from "./Animation/Ghost/Ghost";
import JumpingLetter from "./Animation/JumpingLetter/JumpingLetter";
import Neon from "./Animation/Neon/Neon";
import Smoke from "./Animation/Smoke/Smoke";
import "./Info.css";


export default function InfoSection() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if(counter === 4) return setCounter(0);
      setCounter(prev => prev + 1);
    }, 10000)

    return () => clearInterval(interval)
  }, [counter])
  
  const array = [<Fire /> ,<Neon />, <Smoke />, <Ghost />,<JumpingLetter />]

  return (
    <section id="info">
        {
          array[counter]
        }
    </section>
  );
}
