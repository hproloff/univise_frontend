'use client';
// advisor/page.tsx
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChatState from '@/components/AdvisorPage/ChatState';
import { getResponse } from "../../services/apiService";

interface ChatMessage {
  type: 'question' | 'response';
  text: string;
}

export default function AdvisorPage() {
  useEffect(() => {
    const initModel = async () => {
      try {
        const modelName = 'model_150'; // Replace with your actual model name
        const response = await fetch(`https://aaryush.pythonanywhere.com/init/${modelName}/gpt-3.5-turbo`, {
          method: 'POST',
        });
        
        if (!response.ok) {
          throw new Error('Failed to initialize model');
        }

        const data = await response.json();
        console.log(data); // Log the response from initialization
      } catch (error) {
        console.error('Error during model initialization:', error);
      }
    };

    initModel();
  }, []);
  
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleSendClick = async () => {
    // Add the user's question to the chat history
    const questionMessage: ChatMessage = {
      type: 'question',
      text: currentQuestion
    };
  
    setChatHistory(prevHistory => [...prevHistory, questionMessage]);
  
    // Fetch the response from the API
    const apiResponse = await getResponse(currentQuestion);
    console.log(apiResponse)
    // Add the API response to the chat history
    const responseMessage: ChatMessage = {
      type: 'response',
      text: apiResponse || "We're currently working on this feature."
    };
  
    setChatHistory(prevHistory => [...prevHistory, responseMessage]);
  
    setCurrentQuestion(''); // Reset current question
  };

  return (
    <Box sx={{ padding: 0, margin: 0, width: '100%', boxSizing: 'border-box' }}>
      <ChatState
        chatHistory={chatHistory}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </Box>
  );
}
