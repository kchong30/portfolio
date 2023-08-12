import { useEffect, useState, useCallback } from 'react';
import "./styles/banner.css"
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Banner() {
  const [typedWord, setTypedWord] = useState('');
  const [secondTypedWord, setSecondTypedWord] = useState('');
  const [firstLineFinished, setFirstLineFinished] = useState(false);
  const [secondLineFinished, setSecondLineFinished] = useState(false);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


  const targetWord = 'Kevin Chong';
  const secondLineSentence = "Web Developer";

  

  useEffect(() => {
    if (!firstLineFinished && typedWord !== targetWord) {
      const typingInterval = setInterval(() => {
        const currentTypedWord = typedWord + targetWord[typedWord.length];
        setTypedWord(currentTypedWord);

        if (currentTypedWord === targetWord) {
          clearInterval(typingInterval);
          setFirstLineFinished(true);
        }
      }, 130);

      return () => clearInterval(typingInterval);
    }
  }, [typedWord, targetWord, firstLineFinished]);

  useEffect(() => {
    if (firstLineFinished && !secondLineFinished && secondTypedWord !== secondLineSentence) {
      const typingInterval = setInterval(() => {
        const currentTypedWord = secondTypedWord + secondLineSentence[secondTypedWord.length];
        setSecondTypedWord(currentTypedWord);

        if (currentTypedWord === secondLineSentence) {
          clearInterval(typingInterval);
          setSecondLineFinished(true);
        }
      }, 130);

      return () => clearInterval(typingInterval);
    }
  }, [secondTypedWord, secondLineSentence, firstLineFinished, secondLineFinished]);

  return (
    <div className="banner">
<div className={`particles-container`}>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#001E35",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#666666",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
      </div>
      <div className = "content-layer">
        <div className="typing-animation">
          <span className = "name-type">{typedWord}</span>
          {firstLineFinished && (
            <span className = "title-type"><br />{secondTypedWord}</span>
          )}
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  )
}