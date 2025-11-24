export default function Controls({ voices, selectedVoice, setSelectedVoice, rate, setRate, pitch, setPitch, volume, setVolume, autoSpeak, setAutoSpeak, speak }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-3">
            <select value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)} className="p-2 bg-slate-700 rounded-lg">
                {voices.map((v, i) => (
                    <option key={i} value={v.name}>
                        {v.name} — {v.lang}
                    </option>
                ))}
            </select>


            <label>
                Tezlik
                <input type="range" min="0.5" max="2" step="0.1" value={rate} className="w-full" onChange={(e) => setRate(parseFloat(e.target.value))} />
            </label>


            <label>
                Pitch
                <input type="range" min="0" max="2" step="0.1" value={pitch} className="w-full" onChange={(e) => setPitch(parseFloat(e.target.value))} />
            </label>


            <label>
                Hajm
                <input type="range" min="0" max="1" step="0.1" value={volume} className="w-full" onChange={(e) => setVolume(parseFloat(e.target.value))} />
            </label>


            <label className="flex items-center gap-2">
                <input type="checkbox" checked={autoSpeak} onChange={(e) => setAutoSpeak(e.target.checked)} />
                Avto-Ovoz
            </label>


            <button onClick={() => speak("Salom! Bu test ovozi.")} className="p-2 bg-cyan-500 rounded-lg text-black">
                Test Ovoz
            </button>
        </div>
    );
}