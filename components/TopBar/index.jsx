import { MdOutlinePostAdd } from 'react-icons/md';
import { useRouter } from 'next/router';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import NewPost from '../NewPost';

export default function TopBar({ onFormSubmit }) {
  const [showNewPost, setShowNewPost] = useState(false);

  const router = useRouter();

  function closeNewPost() {
    setShowNewPost(false);
  }

  function openNewPost() {
    setShowNewPost(true);
  }

  return (
    <>
      {showNewPost && <NewPost onFormSubmit={onFormSubmit} onClose={closeNewPost} />}
      <div className='bg-amber-900/80 w-full px-9 flex justify-between'>
        <div
          className='text-white w-52 space-x-3 flex p-1 justify-start items-center'
          onClick={() => router.push('/')}
        >
          <MdOutlinePostAdd size={27} />
          <h1 className='font-bold text-2xl'> Postup </h1>
        </div>
        <button
          onClick={openNewPost}
          className='flex items-center space-x-5 m-2 bg-blue-500 py-2 px-6 rounded-md hover:scale-110 transition-all ease-in-out duration-300 shadow-md'
        >
          <h1 className='text-white text-xl font-bold'>New post</h1>
          <FaPlus size={20} className='text-white ml-2' />
        </button>
      </div>
    </>
  );
}
