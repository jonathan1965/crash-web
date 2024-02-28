import React from 'react';
import Image from 'next/image';

const PracticeItem = ({
  icon,
  title,
  onClick,
  background = '/assets/images/screen.png',
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
      className="relative group flex flex-col"
    >
      <Image
        src={background}
        alt=""
        height={200}
        width={200}
        className="flex-grow"
      />
      <div className="top-0 left-0 absolute bg-primary w-full h-full gap-y-2 justify-center min-h-[170px] bg-opacity-80 flex flex-col items-center">
        <div className="hidden text-white group-hover:block">
          <Image src={icon} alt="" width={100} height={100} />
        </div>
        <p className="px-2 h2 text-white font-black text-lg md:text-xl text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PracticeItem;
