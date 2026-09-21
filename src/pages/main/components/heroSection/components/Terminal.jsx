import React, { useEffect, useState } from "react";

export const Terminal = ({ children, className }) => {
  return (
    <div className={`p-4 rounded-lg font-mono text-sm ${className || ""}`}>
      {children}
    </div>
  );
};

export const TypingAnimation = ({ children, delay = 0, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const text = children;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [started, children]);

  return <div className={className}>{displayedText}</div>;
};

export const AnimatedSpan = ({ children, delay = 0, className }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return <div className={className}>{children}</div>;
};