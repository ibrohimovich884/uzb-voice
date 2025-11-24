import { useState } from "react";
import ChatBox from "../components/ChatBox";
import Controls from "../components/Controls";
import TextInput from "../components/TextInput";
import useTextToSpeech from "../hooks/useTextToSpeech";


export default function Home() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");


    const { voices, speak, selectedVoice, setSelectedVoice, rate, setRate, pitch, setPitch, volume, setVolume, autoSpeak, setAutoSpeak } = useTextToSpeech();


    const sendMessage = () => {
        if (!text.trim()) return;
        setMessages((prev) => [...prev, { text, me: true }]);
        setText("");
    };


    const receiveMessage = (msg) => {
        setMessages((prev) => [...prev, { text: msg, me: false }]);
        if (autoSpeak) speak(msg);
    };


    return (
        <div className="min-h-screen bg-slate-900 text-white p-4 flex justify-center items-center">
            <div className="w-full max-w-2xl bg-slate-800 rounded-2xl p-4 shadow-lg">


                <Controls
                    voices={voices}
                    selectedVoice={selectedVoice}
                    setSelectedVoice={setSelectedVoice}
                    rate={rate}
                    setRate={setRate}
                    pitch={pitch}
                    setPitch={setPitch}
                    volume={volume}
                    setVolume={setVolume}
                    autoSpeak={autoSpeak}
                    setAutoSpeak={setAutoSpeak}
                    speak={speak}
                />


                <ChatBox messages={messages} />


                <TextInput
                    text={text}
                    setText={setText}
                    sendMessage={sendMessage}
                    receiveMessage={receiveMessage}
                />
            </div>
        </div>
    );
}