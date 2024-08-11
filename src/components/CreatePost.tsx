import React, { useState } from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';
import SignUp from './Signup';

const CreatePost: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const switchToLogin = () => setIsLoginForm(true);
  const switchToSignUp = () => setIsLoginForm(false);

  return (
    <>
      <div className="relative w-[700px] h-[223px] bg-[#27292D] rounded-[8px] border-2 border-[#35373B] p-4">
        <h3
          className="text-[18px] leading-[21.78px] font-medium"
          style={{ color: '#C5C7CA', fontFamily: 'Inter' }}
        >
          Create post
        </h3>
        <div
          className="mt-4 flex items-center bg-[#1F1F23] p-4 rounded-[8px]"
          style={{ width: '660px', height: '78px' }}
        >
          <div className="w-[32px] h-[32px] flex items-center justify-center bg-gray-600 rounded-full">
            <span role="img" aria-label="emoji" className="text-white">
              💬
            </span>
          </div>
          <p
            className="ml-4 text-[16px] leading-[19px]"
            style={{ color: '#7F8084', fontFamily: 'Inter' }}
          >
            How are you feeling today?
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="w-[111px] h-[43px] bg-[#4A96FF] text-white rounded-[8px] flex items-center justify-center"
            onClick={openModal}
          >
            Post
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isLoginForm ? (
          <LoginForm isLoginPage={false} />
        ) : (
          <SignUp switchToLogin={switchToLogin} />
        )}
      </Modal>
    </>
  );
};

export default CreatePost;
