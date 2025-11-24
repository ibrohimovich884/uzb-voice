export default function TextInput({ text, setText, sendMessage, receiveMessage }) {
    return (
        <div className="flex gap-2">
            <textarea
                className="flex-1 p-2 bg-slate-700 rounded-xl"
                placeholder="Matn yozing..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />


            <div className="flex flex-col gap-2">
                <button onClick={sendMessage} className="p-2 bg-cyan-400 rounded-lg text-slate-900">
                    Yuborish
                </button>


                <button onClick={() => receiveMessage(text || "Salom, bu misol xabar.")} className="p-2 bg-green-400 rounded-lg text-slate-900">
                    Qabul qilish
                </button>
            </div>
        </div>
    );
}