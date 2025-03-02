import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import "./aiAssistant.scss";


const API_KEY = "sk-aa0444e5670f46ca8530ca214f52d903"; // Replace with your DeepSeek API key
const API_URL = "https://api.deepseek.com/v1/chat/completions"; // DeepSeek API endpoint

const PandaIcon = ({ isOpen, isTyping, isHovered, isClicked }) => (
  <svg
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    fill="currentColor"
    className={`panda-icon ${isOpen ? "open" : ""} ${isTyping ? "typing" : ""} ${isHovered ? "hovered" : ""
      } ${isClicked ? "clicked" : ""}`}
  >
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
);

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const faqs = [
    {
      question: "What kind of projects do you work on?",
      answer:
        "I work on Full Stack web applications, focusing on performance, scalability, and user experience.",
    },
    {
      question: "Do you offer freelancing services?",
      answer:
        "Yes! I take on freelance web development projects in my free time. If you have a project idea, feel free to reach out!",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "I primarily work with the MERN stack (MongoDB, Express.js, React, Node.js). Additionally, I incorporate Data Science and AI solutions where applicable.",
    },
    {
      question: "Can you develop a portfolio website for me?",
      answer:
        "Absolutely! I design and develop custom personal and business portfolio websites tailored to your brand and goals.",
    },
    {
      question: "How can I contact you for a project?",
      answer:
        "You can reach out via my portfolio’s contact form or email me directly. I’ll get back to you as soon as possible!",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple portfolio can take a few days, while a full business website may take a few weeks. Contact me for a more accurate estimate!",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, I offer maintenance and support services for completed projects, including updates and minor changes.",
    },
  ];
  
  // Initialize the chat with a welcome message
  useEffect(() => {
    setMessages([{
      sender: "bot", text: "Hello! ✨ How can I assist you today?"
    }]);
  }, []);

  // Random actions for the panda icon
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen && !isHovered && !isClicked) {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000); // Reset after 1 second
      }
    }, 5000); // Trigger every 5 seconds

    return () => clearInterval(interval);
  }, [isOpen, isHovered, isClicked]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user's message to chat
    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);

    // Check if the question is in FAQs
    const faq = faqs.find((faq) => faq.question.toLowerCase() === userInput.toLowerCase());
    if (faq) {
      setMessages((prev) => [...prev, { sender: "bot", text: faq.answer }]);
      setIsTyping(false);
      return;
    }

    try {
      // Call the DeepSeek API
      const response = await axios.post(
        API_URL,
        {
          model: "deepseek-chat:free",
          messages: [{ role: "user", content: userInput }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Extract API response
      const botMessage = {
        sender: "bot",
        text: response.data.choices?.[0]?.message?.content || "Sorry, I didn't understand that.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API call failed:", error);

      // If API fails, send a fallback message
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! I can't fetch a response right now 😔. Check the FAQs or ask about my services!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle quick replies from FAQs
  const handleQuickReply = (question) => {
    setUserInput(question);
    handleSendMessage();
  };

  return (
    <Draggable>
      <div className="ai-assistant">
        {/* Toggle button for the assistant */}
        <button
          className="assistant-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 1000); // Reset after 1 second
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <PandaIcon isOpen={isOpen} isTyping={isTyping} isHovered={isHovered} isClicked={isClicked} />
        </button>

        {/* Assistant popup */}
        {isOpen && (
          <div className="assistant-popup">
            <div className="assistant-header">
              <h3>AI Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="close-btn">
                <FaTimes />
              </button>
            </div>

            {/* Chat container */}
            <div className="chat-container" ref={chatRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && <div className="message bot typing">Typing...</div>}
            </div>

            {/* Input container */}
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask something..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
            </div>

            {/* Quick replies */}
            <div className="quick-replies">
              {faqs.map((faq, index) => (
                <button key={index} onClick={() => handleQuickReply(faq.question)}>
                  {faq.question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default AiAssistant;