import { useEffect, useState, useMemo } from 'react';

const TypingAnimation = () => {
  const [typedWord, setTypedWord] = useState('');
  const [deleting, setDeleting] = useState(false);
  const staticText = 'I love ';
  const targetWords = useMemo(
    () => ['GAMING', 'CODING', 'PROBLEM SOLVING', 'LEARNING', 'TECHNOLOGY', 'EFFICIENCY'],
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
    <div className="flex items-center justify-center h-screen">
      <span className="font-bold text-4xl">{staticText}</span>
      <span className="ml-2 italic font-cursive text-4xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        {typedWord}
      </span>
    </div>

  );
};

export default TypingAnimation;