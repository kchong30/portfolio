import { useEffect, useState } from 'react';
import "./styles/banner.css"

export default function Banner() {
  const [typedWord, setTypedWord] = useState('');
  const [secondTypedWord, setSecondTypedWord] = useState('');
  const [thirdTypedWord, setThirdTypedWord] = useState('');
  const [firstLineFinished, setFirstLineFinished] = useState(false);
  const [secondLineFinished, setSecondLineFinished] = useState(false);
  const [opacity, setOpacity] = useState(1);


  const targetWord = 'Hey there!';
  const secondLineSentence = "My name is Kevin.";
  const thirdLineSentence = "I'm a Web Developer based in Vancouver.";

  
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      let maxHeight = window.innerHeight;
      let scrollPercent = scrollTop / maxHeight;
      let newOpacity = 1 - scrollPercent;

      setOpacity(newOpacity > 0 ? newOpacity : 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!firstLineFinished && typedWord !== targetWord) {
      const typingInterval = setInterval(() => {
        const currentTypedWord = typedWord + targetWord[typedWord.length];
        setTypedWord(currentTypedWord);

        if (currentTypedWord === targetWord) {
          clearInterval(typingInterval);
          setFirstLineFinished(true);
        }
      }, 100);

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
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [secondTypedWord, secondLineSentence, firstLineFinished, secondLineFinished]);

  useEffect(() => {
    if (secondLineFinished && thirdTypedWord !== thirdLineSentence) {
      const typingInterval = setInterval(() => {
        const currentTypedWord = thirdTypedWord + thirdLineSentence[thirdTypedWord.length];
        setThirdTypedWord(currentTypedWord);

        if (currentTypedWord === thirdLineSentence) {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [thirdTypedWord, thirdLineSentence, secondLineFinished]);

  const bannerStyle = {
    opacity: opacity,
    transition: 'opacity 0.2s'
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="typing-animation">
        <span>{typedWord}</span>
        {firstLineFinished && (
          <span><br />{secondTypedWord}</span>
        )}
        {secondLineFinished && (
          <span><br />{thirdTypedWord}</span>
        )}
        <span className="cursor">|</span>
      </div>
    </div>
  )
}