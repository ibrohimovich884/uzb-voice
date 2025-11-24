import { useEffect, useState } from "react";


export default function useTextToSpeech() {
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);
    const [volume, setVolume] = useState(1);
    const [autoSpeak, setAutoSpeak] = useState(true);


    useEffect(() => {
        const loadVoices = () => {
            const v = window.speechSynthesis.getVoices();
            setVoices(v);
            if (v.length && !selectedVoice) setSelectedVoice(v[0].name);
        };
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, [selectedVoice]);


    const speak = (text) => {
        if (!window.speechSynthesis) return alert("SpeechSynthesis qo'llab-quvvatlanmaydi.");
        if (!text.trim()) return;


        const utter = new SpeechSynthesisUtterance(text);
        const voice = voices.find((v) => v.name === selectedVoice);
        if (voice) utter.voice = voice;


        utter.rate = rate;
        utter.pitch = pitch;
        utter.volume = volume;


        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
    };


    return { voices, selectedVoice, setSelectedVoice, rate, setRate, pitch, setPitch, volume, setVolume, autoSpeak, setAutoSpeak, speak };
}