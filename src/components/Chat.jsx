import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chat = (props) => {
  const [history, setHistory] = useState([]);
  const [model, setModel] = useState(null);

  // Initializes the model and API key when the component mounts
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const newModel = genAI.getGenerativeModel({ model: "gemini-pro" });
    setModel(newModel);
  }, []);

  // Scrolls to the bottom of the chat box when a message is recieved from the AI
  useEffect(() => {
    props.chatContainerRef.current.scrollTop =
      props.chatContainerRef.current.scrollHeight;
  }, [history]);

  const run = async (prompt) => {
    if (!model) return null;

    const message = await model.startChat({ history });
    const result = await message.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  };

// User chat message
  const userMessage = (data) =>
    `    <div class="flex items-center justify-end gap-2">
      <p class="bg-[#3f4c5c] text-white p-2 fancyDecor w-fit shadow-lg">
        ${data}
      </p>
      <div class="border border-4 border-gray-50 rounded-full">
        <div
        id="user-icon"
        />
      </div>
    </div>`;

// Gemini/Kah-do chat message
  const aiMessage = (data) =>
    `    <div class="flex items-center text-left justify-start gap-2">
      <div class="border border-4 border-[#ebeff2] rounded-full">
        <img
          id="ai-icon"
        />
      </div>
      <p class="bg-sky-50 text-gray-700 p-2 fancyDecor shadow-lg w-fit max-w-[75%] break-normal">
        ${data}
      </p>
    </div>`;

  // When the form is sbumitted, the prompt will be used to send requests and place messages
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userText = document.getElementById("prompt");
    const chatArea = document.getElementById("chat-container");
    const prompt = userText.value.trim();

    if (prompt === "") {
      return;
    }

    chatArea.innerHTML += userMessage(prompt);
    userText.value = "";

    const aiResponse = await run(prompt);
    console.log(aiResponse);

    chatArea.innerHTML += aiMessage(aiResponse);

    const newUserRole = {
      role: "user",
      parts: prompt,
    };

    const newAiRole = {
      role: "model",
      parts: aiResponse,
    };
    setHistory([...history, newUserRole, newAiRole]);
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };
  
//Enables users to submit propmt upon clicking enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="message-form">
        <textarea
          name="prompt"
          id="prompt"
          placeholder="Enter message here"
          className="fancyBtn focus:outline-none w-full p-2 dark:text-zinc-900 dark:bg-zinc-100"
          cols={30}
          rows={4}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button
          type="submit"
          className="fancyBtn bg-white w-20 p-1 m-1 dark:bg-zinc-800 dark:text-zinc-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
