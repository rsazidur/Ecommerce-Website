import React from 'react';

const Collections = () => {
  return (
    <div className='bg-[url("/images/banner.jpg")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className="h-[580px] flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2 m-0.5 text-center md:text-left">
          <img src="/images/gamelogo4.png" alt="Game Logo" className="mx-auto md:mx-0" />
          <p className="text-lg text-white capitalize my-8 leading-[32px]">
            PC games are known for their versatility and high-quality graphics, offering a wide range of genres like action,
            RPG, and strategy. They are also known for their mods, which allow players to customize their gaming experience.
          </p>
          <button className="px-6 py-2 bg-white text-black rounded-sm font-semibold">See Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;