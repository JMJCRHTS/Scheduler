import { useState } from "react";

// custom hook to manage the visual mode of the application (i.e. which component to display)

const useVisualMode = function (initial) {
  const [history, setHistory] = useState([initial]);

// transition function to change the mode

  const transition = function (newMode, replace = false) {
    setHistory((prev) => {
      return replace ? [...prev.slice(0, -1), newMode] : [...prev, newMode];
    });
  };

// back function to go back to previous mode

  const back = function () {
    if (history.length < 2) {
      return;
    }

    setHistory((prev) => {
      return prev.slice(0, -1);
    });
  };

  const mode = history[history.length - 1];

  return { mode, transition, back };
};

export default useVisualMode;
