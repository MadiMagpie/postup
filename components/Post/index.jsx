import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Post({ post, onDelete }) {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    setBgColor(generateRandomColor());
  }, []);

  const generateRandomColor = () => {
    const colors = ['bg-yellow-100', 'bg-blue-100', 'bg-pink-100', 'bg-green-100', 'bg-orange-100'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post.id}`);
      onDelete(post.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`postit aspect-square m-6 p-2 flex flex-col items-start justify-start ${bgColor}`}>
      <div className="flex justify-end w-full self-start pb-4">
        <IoClose
          onClick={handleDelete}
          className="text-xl text-gray-500 cursor-pointer hover:text-gray-800"
        />
      </div>
      <div className="px-3 pb-5 pr-2">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-sm break-words w-5/6">{post.content}</p>
      </div>
    </div>
  );
}



