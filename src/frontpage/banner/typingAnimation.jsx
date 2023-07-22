import { useEffect, useState, useMemo } from 'react';
import "./styles/banner.css"

const TypingAnimation = () => {
  const [typedWord, setTypedWord] = useState('');
  const [deleting, setDeleting] = useState(false);
  const staticText = 'I love ';
  const targetWords = useMemo(
    () => ['CODING', 'PROBLEM SOLVING', 'LEARNING', 'TECHNOLOGY', 'EFFICIENCY', 'DESIGN'],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const targetWord = targetWords[currentWordIndex];

  useEffect(() => {
    if (!deleting) {
      if (typedWord === targetWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else {
        const typingInterval = setInterval(() => {
          const currentTypedWord = typedWord + targetWord[typedWord.length];
          setTypedWord(currentTypedWord);

          if (currentTypedWord === targetWord) {
            clearInterval(typingInterval);
            setTimeout(() => setDeleting(true), 1000);
          }
        }, 100);

        return () => clearInterval(typingInterval);
      }
    } else {
      const deletionInterval = setInterval(() => {
        const currentTypedWord = typedWord.slice(0, -1);
        setTypedWord(currentTypedWord);

        if (currentTypedWord === '') {
          clearInterval(deletionInterval);
          setDeleting(false);

          // Transition to the next word in the sequence
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % targetWords.length);
        }
      }, 100);

      return () => clearInterval(deletionInterval);
    }
  }, [typedWord, deleting, targetWord, targetWords]);

  return (
    <>
    <div className="flex-col text-left ">
      <div className = "font-custom">Hey there!<br></br>My name is Kevin.</div>
      <span className="font-bold text-4xl">{staticText}</span>
      <span className="ml-2 italic font-cursive text-4xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        {typedWord}
        <span className = "cursor">|</span>
      </span>
    </div>
    </>
  

  );
};

export default TypingAnimation;