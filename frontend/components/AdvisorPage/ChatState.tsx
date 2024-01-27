import React, { useState } from 'react';
import Header from './Header';
import AdvisorFooter from './AdvisorFooter';
import CapabilitiesPopup from './CapabilitiesPopup';
import ChatContainer from './ChatContainer';
import { getResponse } from '../../services/apiService';

interface ChatMessage {
  type: string;
  text: string;
}

interface ChatStateProps {
  chatHistory: ChatMessage[];
  currentQuestion: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const ChatState: React.FC<ChatStateProps> = ({ chatHistory, currentQuestion, setCurrentQuestion }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state to track loading
  const [localChatHistory, setLocalChatHistory] = useState<ChatMessage[]>(chatHistory);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSendClick = async () => {
    if (!currentQuestion.trim()) return; // Prevent sending empty messages
    setIsLoading(true);
    const updatedChatHistory = [...localChatHistory, { type: 'question', text: currentQuestion }];
    setLocalChatHistory(updatedChatHistory);

    try {
      const response = await getResponse(currentQuestion);
      if (response) {
        updatedChatHistory.push({ type: 'response', text: response });
      } else {
        updatedChatHistory.push({ type: 'response', text: 'No response received.' });
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      updatedChatHistory.push({ type: 'response', text: 'Error fetching response.' });
    }

    setLocalChatHistory(updatedChatHistory);
    setCurrentQuestion(''); // Clear the input box after sending
    setIsLoading(false);
  };

  const handleSamplePrompt = async (prompt: string) => {
    setIsLoading(true);
    const updatedChatHistory = [...localChatHistory, { type: 'question', text: prompt }];
    setLocalChatHistory(updatedChatHistory);
  
    try {
      const response = await getResponse(prompt);
      if (response) {
        updatedChatHistory.push({ type: 'response', text: response });
      } else {
        updatedChatHistory.push({ type: 'response', text: 'No response received.' });
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      updatedChatHistory.push({ type: 'response', text: 'Error fetching response.' });
    }
  
    setLocalChatHistory(updatedChatHistory);
    setIsLoading(false);
  };


  return (
    <>
      <Header />
      <ChatContainer chatHistory={localChatHistory} onSamplePrompt={handleSamplePrompt} />
      <AdvisorFooter
        question={currentQuestion}
        setQuestion={setCurrentQuestion}
        handleSendClick={handleSendClick}
        onOpenCapabilities={openPopup}
        isLoading={isLoading}
      />
      <CapabilitiesPopup open={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ChatState;
