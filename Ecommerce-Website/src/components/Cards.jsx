import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ filteredItems }) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm'>
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt=""
              className='mx-auto w-full hover:scale-105 transition-all duration-300'
            />
          </Link>
          <div className='mt-4 px-4'>
            <h4 className='text-center text-lg font-bold mb-2'>{item.name}</h4>
            <p className='text-center text-black/50 mb-2'>{item.title}</p>
            {/* Add this div for (flex justify-center)*/}
            <div className='text-center'> 
              <p className='text-center font-semibold'>${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;