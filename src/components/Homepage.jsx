import React, { useRef } from "react";
import Chat from "./Chat";
import Footer from "./Footer";

export default function HomePage() {
  const chatContainerRef = useRef(null);

  return (
    <main className="flex flex-col text-center gap-3 dark:bg-gray-700 sm:gap-4 md:gap-5 transition dark:bg-zinc-800 dark:text-zinc-200">
      <h1 className="text-3xl sm:text-5xl w-48 self-center sm:text-6xl">
        カード
      </h1>
      {/* Chat box */}
      <div className="fancyDecor flex bg-[#f7f7f7] flex-col justify-between h-[600px] sm:w-[500px] self-center mx-2 sm:mx-10 mt-5 transition dark:bg-zinc-200 dark:text-zinc-200">
        {/* Chat area */}
        <div
          className="flex flex-col p-2 gap-4 w-full overflow-y-auto"
          id="chat-container"
          ref={chatContainerRef}
        ></div>
        {/* Chat form with logic */}
        <div className="flex flex-col m-2 text-center">
          <Chat chatContainerRef={chatContainerRef} />
          <div />
        </div>
      </div>
      <Footer />
    </main>
  );
}
