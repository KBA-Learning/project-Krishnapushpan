import React, { useState, useEffect } from 'react';
import MessageCard from './MessageCard';

const MessGrid = () => {
  const [messages, setMessages] = useState(null); // Initialize as null to check loading state

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages'); // API call
        const data = await response.json();

        // If the API returns an array or an object with a messages key, set it
        setMessages(data); // Handle both cases
      } catch (err) {
        console.error('Error fetching messages:', err);
        setMessages([]); // Fallback to empty array if error occurs
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-2 mx-5 my-10">
    {messages && messages.length > 0 ? (
      messages.map((message) => (
        <MessageCard key={message.username} message={message} />
      ))
    ) : (
      <div className="col-span-full text-center text-gray-500 h-[250px] ">
        <p className='p-24'>No messages available</p>
      </div>
    )}
  </div>
  );
};

export default MessGrid;
