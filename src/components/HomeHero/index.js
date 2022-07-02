import React, { useState } from 'react'
import { Button } from '../Shared'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HeroSingleView } from '../HeroSingleView'
// import required modules
import { Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {
  Container,
  Content
} from './styles'

export const HomeHero = () => {
  const { width } = useWindowSize()
  const [activeIndex, setActiveIndex] = useState(0)

  const sliderDataList = [
    { title: 'Shop New Arrivals', description: 'Our coolest new items are waiting for you!', image: 'imgs/slider-1.jpg', color: 'primary' },
    { title: 'Our Fave Tees', description: 'Shop all of our favorites.', image: 'imgs/slider-2.jpg', color: 'black' },
    { title: 'Men’s Tees', description: 'Find the perfect shirt.', image: 'imgs/slider-3.jpg', color: 'black' }
  ]

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay
        modules={[Pagination, Navigation]}
        className='mySwiper'
        navigation={false}
        onSlideChange={(value) => setActiveIndex(value.realIndex)}
      >
        {sliderDataList.map((item, i) => (
          <SwiperSlide key={i}>
            <HeroSingleView
              data={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {width < 769 && (
        <Content>
          <h1>{sliderDataList[activeIndex].title}</h1>
          <p>{sliderDataList[activeIndex].description}</p>
          <Button color='black'>Shop now</Button>
        </Content>
      )}
    </Container>
  )
}
