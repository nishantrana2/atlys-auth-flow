import React from 'react';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-customBlack">
      <header className="w-[700px] text-left mb-6">
        <h1 className="text-[#C5C7CA] font-medium text-[28px] leading-[33.89px]">
          Hello Jane
        </h1>
        <p className="text-[#7F8084] font-normal text-[16px] leading-[24px]">
          How are you doing today? Would you like to share something with the
          community? 🤗
        </p>
      </header>
      <div className="w-[700px] space-y-4">
        {' '}
        {/* This adds 16px (4 units) of vertical space between items */}
        <CreatePost />
        <Post
          author="Theresa Webb"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          time="5 mins ago"
          comments={24}
          authorImage="https://media.gettyimages.com/id/1469706451/photo/business-woman-face-computer-and-ux-coding-of-young-employee-with-blue-light-and-glasses.jpg?s=612x612&w=gi&k=20&c=A-lwR_mT7UmOIX-MZY05PCvI37XcXqu45COIjk5sNgM="
        />
        <Post
          author="Marvin McKinney"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          time="8 mins ago"
          comments={30}
          authorImage="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg"
        />
      </div>
    </div>
  );
};

export default Dashboard;
