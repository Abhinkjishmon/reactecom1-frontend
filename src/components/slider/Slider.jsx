import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

function Slider() {
  return (
    <div className='s-container'>
        <Swiper>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider