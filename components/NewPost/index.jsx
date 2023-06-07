import axios from "axios";
import { useState } from "react";
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';

export default function NewPost({ onFormSubmit, onClose }) {
  const [form, setForm] = useState({ title: '', content: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/posts', form);
      console.log(data);
      onFormSubmit();
      setForm({ title: '', content: '' });
      onClose(); // Close the NewPost component
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full bg-black/70 flex justify-center items-center'>
      <div className='bg-amber-900 pt-5 pb-10 px-7 rounded-md'>
        <div className='flex justify-end w-full pb-4'>
          <IoClose
            size={25}
            onClick={onClose}
            className='text-xl text-gray-500 cursor-pointer'
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <button type="submit" className="bg-blue-500 font-semibold text-white rounded p-1">
            Create new post
          </button>
        </form>
      </div>
    </div>
  );
}
