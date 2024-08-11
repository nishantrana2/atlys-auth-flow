import React from 'react';

interface PostProps {
  author: string;
  content: string;
  time: string;
  comments: number;
  authorImage: string; // Assuming the author's image URL is passed as a prop
}

const Post: React.FC<PostProps> = ({
  author,
  content,
  time,
  comments,
  authorImage,
}) => {
  return (
    <div
      className="w-[700px] bg-[#27292D] rounded-[8px] border-2 p-4"
      style={{
        borderColor: '#35373B',
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src={authorImage}
            alt={`${author}`}
            className="w-[48px] h-[48px] rounded-full"
            style={{
              backgroundColor: '#27292D',
            }}
          />
          <div className="ml-4">
            <h4
              className="text-[16px] font-medium"
              style={{
                fontFamily: 'Inter',
                color: '#C5C7CA',
              }}
            >
              {author}
            </h4>
            <span
              className="text-[14px] font-medium"
              style={{
                fontFamily: 'Inter',
                color: '#7F8084',
                lineHeight: '16.94px',
              }}
            >
              {time}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-[20px] h-[20px]">
          <span className="text-gray-500">...</span>
        </div>
      </div>
      <div
        className="w-full bg-[#191920] rounded-[8px] p-4 flex items-start"
        style={{
          opacity: 1, // To ensure it's visible
        }}
      >
        <div className="w-[48px] h-[48px] bg-[#27292D] rounded-full flex items-center justify-center">
          <span role="img" aria-label="emoji" className="text-white">
            😞
          </span>
        </div>
        <p
          className="ml-4 text-[16px] leading-[24px] flex-1"
          style={{
            fontFamily: 'Inter',
            fontWeight: '400',
            color: '#C5C7CA',
          }}
        >
          {content}
        </p>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-[14px] font-medium text-gray-500">
          💬 {comments} comments
        </span>
      </div>
    </div>
  );
};

export default Post;
