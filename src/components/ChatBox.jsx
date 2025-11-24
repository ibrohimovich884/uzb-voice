import MessageBubble from "./MessengeBubble";


export default function ChatBox({ messages }) {

    return (

        <div className="h-80 overflow-y-auto bg-slate-700 p-3 rounded-xl mb-3">
            {messages.map((m, i) => (
                <MessageBubble key={i} text={m.text} me={m.me} />
            ))}
        </div>
    );
}