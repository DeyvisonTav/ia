"use client";
import { useChat } from "ai/react";
import { AvatarComponent } from "./avatar";

export function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="min-w-[650px] h-[800px] shadow-lg border border-zinc-200 
        rounded-xl p-4"
      >
        <h1 className="flex justify-center"> Chatbot para dieta</h1>
        <div className="h-full flex flex-col">
          <div className="pt-5 flex-1 flex gap-3">
            <AvatarComponent src="https://github.com/DeyvisonTav.png" />
            <div className="w-[650px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              assumenda eligendi ab maiores quis asperiores aliquam dolorem
              consequatur praesentium ad quaerat suscipit cum architecto dolore.
              Unde excepturi nulla omnis earum.
            </div>
          </div>

          <form
            className="flex gap-2 pb-24 justify-end"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full rounded-xl border border-zinc-200 p-3"
              placeholder="digite sua mensagem"
              value={input}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="p-3 rounded-xl px-5 bg-black text-white
             font-semibold"
            >
              enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
