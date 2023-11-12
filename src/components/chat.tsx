export function ChatComponent() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="min-w-[650px] h-[800px] shadow-lg border border-zinc-200 
        rounded-xl p-4"
      >
        <h1 className="flex justify-center"> Chatbot para dieta</h1>
        <div className="h-full flex flex-col">
          <div className="pt-5 flex-1">message</div>

          <div className="flex gap-2 pb-24 justify-end">
            <input
              className="w-full rounded-xl border border-zinc-200 p-3"
              placeholder="digite sua mensagem"
            />
            <button
              className="p-3 rounded-xl px-5 bg-black text-white
             font-semibold"
            >
              enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
