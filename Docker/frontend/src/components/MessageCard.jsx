import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessageCard = ({message}) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    // try {
      const response = await fetch(`/api/messages/${message._id}`,
       {
        method: 'DELETE',
       }
      );
      if (response.status===201) {
        alert('Message deleted successfully!');
        window.location.reload()
        // navigate('/ViewMessage', { replace: true })
        // Notify parent component to remove message from UI
      } else {
        alert('Failed to delete the message.');
      }
    // } catch (error) {
    //   console.error('Error deleting message:', error);
    //   alert('An error occurred while trying to delete the message.');
    // }
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 flex flex-col justify-between h-full">
      <div className="bg-blue-50 text-[#003066] text-sm rounded-md font-medium px-2 py-2">
        <p className="text-lg font-semibold text-[#003066]">UserName: {message.username}</p>
        <p className="text-lg font-semibold text-[#003066]">_id: {message._id}</p>
      </div>
      <p className="text-[#003066] p-2">Email ID: {message.emailid}</p>
      <p className="text-[#003066] p-2">Mobile No: {message.mobileno}</p>
      <p className="text-[#003066] p-2">Message: {message.message}</p>
      <div className="mt-auto pt-4">
        <button
          className="w-full px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
          // onClick={() => console.log(`Remove message: ${message.username}`)}
          onClick={handleDelete}

        >
          Remove Message
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
