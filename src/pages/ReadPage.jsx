import { useState, useEffect } from "react";

export default function ReadPage() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();

      // O'zbekcha ovoz qidiramiz
      const uzVoice = voices.find(v =>
        v.lang.toLowerCase().includes("uz")
      );

      if (uzVoice) {
        setVoice(uzVoice);
        console.log("O'zbekcha voice topildi:", uzVoice.name);
      } else {
        console.log("O'zbekcha voice topilmadi, default ishlaydi.");
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakText = () => {
    if (!text) return;

    const msg = new SpeechSynthesisUtterance(text);

    if (voice) {
      msg.voice = voice;
      msg.lang = voice.lang;
    } else {
      msg.lang = "uz-UZ"; // fallback
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="page">
      <h2>Matnni o‘qib berish</h2>

      <textarea
        placeholder="Matn kiriting..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button onClick={speakText}>O‘qib ber</button>
    </div>
  );
}
