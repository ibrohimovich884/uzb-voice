import { useState } from "react";
import { tokenizeText } from "../utils/tokenizer";

export default function SplitPage() {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  const handleSplit = () => {
    const result = tokenizeText(text);
    setWords(result);
  };

  return (
    <div className="page">
      <h2>Gapni so‘zlarga ajratish</h2>

      <textarea
        placeholder="Gap kiriting..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSplit}>Ajratish</button>

      <div className="word-list">
        {words.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
