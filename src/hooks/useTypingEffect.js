import {useEffect, useState} from "react";

export  const useTypingEffect = ( names= []) =>{

    const words = names;
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayedWord, setDisplayedWord] = useState('');

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            const newWord = isDeleting
                ? currentWord.slice(0, displayedWord.length - 1)
                : currentWord.slice(0, displayedWord.length + 1);
            setDisplayedWord(newWord);
            if (!isDeleting && newWord === currentWord) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && newWord === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        };
        const typingEffect = setTimeout(handleTyping, isDeleting ? 100 : 60);

        return () => clearTimeout(typingEffect);
    }, [displayedWord, isDeleting, currentWordIndex]);

    return{
        displayedWord
    }
}