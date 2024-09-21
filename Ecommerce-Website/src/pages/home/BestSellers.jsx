import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Seller");
  console.log(bestSellers);

  return (
    <div className='w-full container mx-auto xl:px-28 px-4 py-28'>
      <div className='text-center'>
        <h2 className='title'>Best Sellers</h2>
        <p className='text-black/75 capitalize md:w-2/3 mx-auto mb-8'>
          Best-selling games across PC, Xbox, and PS4 are known for 
          their immersive gameplay and stunning visuals. Each platform offers unique experiences, with PC focusing on customizability, 
          Xbox excelling in action-packed titles, and PS4 featuring strong narratives and exclusives.
        </p>
      </div>

      {/* Best Sellers Products Cards */}
      <div className='mb-16'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='text-center'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='mx-auto w-full hover:scale-105 transition-transform duration-300' 
                />
                <h4 className='text-lg font-bold mt-4'>{item.name}</h4>
                <p className='text-black/75'>{item.title}</p>
                <p className='font-semibold'>${item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSellers;