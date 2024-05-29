import { useState, useEffect } from "react";
import styled from "styled-components";

// Use $styling to avoid passing it to the DOM
const RenderedText = styled.p`
  ${(props) => props.$styling}
`;

const GlitchingTypingText = (props) => {
    const {
        children,
        element,
        $styling, // Prefix with $
        nextCharProbability = 0.75, // ??????????
        typingDuration = 3000,
        glitchProbability = 5,
        potentialGlitchInterval = 150,
        glitchDuration = 7000, // Set glitch duration 
    } = props;

    const text = children;
    const [renderedText, setRenderedText] = useState("");
    const [slideIndex, setSlideIndex] = useState(0);
    const [glitching, setGlitching] = useState(true);

    const possibleChars = "!@#$%^&*()<>?/][{}+=_";

    const randomizeTextCharacter = (textToAugment) => {
        const charToReplaceIndex = Math.floor(Math.random() * textToAugment.length);
        const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        const splitText = textToAugment.split("");
        splitText[charToReplaceIndex] = randomChar;
        const newText = splitText.join("");
        return newText;
    };

    const typingInterval = Math.floor(typingDuration / (text?.length || 1));

    useEffect(() => {
        const glitchIntervalID = setInterval(() => {
            if (glitching && Math.random() > 1 - glitchProbability) {
                setRenderedText(randomizeTextCharacter(text));
            } else if (!glitching && renderedText !== text) {
                setRenderedText(text);
            }
        }, potentialGlitchInterval);

        // Clear glitch interval after the specified duration
        const glitchTimeoutID = setTimeout(() => {
            setGlitching(false);
            clearInterval(glitchIntervalID);
            setRenderedText(text); // Revert to original text
        }, glitchDuration);

        return () => {
            clearInterval(glitchIntervalID);
            clearTimeout(glitchTimeoutID);
        };
    }, [text, glitching, glitchProbability, potentialGlitchInterval, glitchDuration]);

    useEffect(() => {
        const typingIntervalID = setInterval(() => {
            setSlideIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex > text.length) {
                    clearInterval(typingIntervalID);
                    return prevIndex;
                }
                return nextIndex;
            });
        }, typingInterval);

        return () => {
            clearInterval(typingIntervalID);
        };
    }, [text, typingInterval]);

    return (
        <RenderedText as={element} $styling={$styling}>
            {renderedText.slice(0, slideIndex)}
        </RenderedText>
    );
};

export default GlitchingTypingText;
