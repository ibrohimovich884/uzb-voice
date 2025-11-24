export default function MessageBubble({ text, me }) {

    return (
        
        <div
            className={`p-2 mb-2 rounded-lg max-w-[70%] ${me ? "bg-cyan-400 text-slate-900 ml-auto" : "bg-slate-600"
                }`}
        >
            {text}
        </div>
    );
}