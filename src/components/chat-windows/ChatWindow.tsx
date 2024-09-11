import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleClearMessage = ()=>{
    setMessages([]);
  }

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: `You said: ${newMessage.text}`,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div style={styles.chatWindow}>
      <div style={styles.messageList}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              ...styles.message,
              alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor:
                message.sender === "user" ? "#4CAF50" : "#E0E0E0",
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
      <button onClick={handleClearMessage} style={styles.sendButton}>
          Clear
        </button>
    </div>
  );
};

// Updated styles for the chat window components
const styles = {
  chatWindow: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '400px',
    height: '500px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#ffffff', // Plain white background
  },
  messageList: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto' as 'auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '10px',
    backgroundColor: '#ffffff', // Plain white background for message area
  },
  message: {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '8px',
    wordWrap: 'break-word' as 'break-word',
  },
  inputArea: {
    display: 'flex',
    borderTop: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#ffffff', // Plain white background for input area
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ChatWindow;
