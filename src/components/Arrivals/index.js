import React from 'react'
import {
  Container,
  InnerContainer,
  Content,
  ArrowButtonWrapper
} from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { ArrowLeft, ArrowRight } from '../Shared/SvgIcons'
import { SingleProduct } from '../SingleProduct'

export const Arrivals = () => {
  const productList = [
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' },
    { title: 'Product Title', description: 'WOMEN’S T-SHIRT', price: 19.99, image: 'imgs/product.png' }
  ]

  return (
    <Container>
      <InnerContainer>
        <h1>New arrivals</h1>
        <Content>
          <ArrowButtonWrapper className='swiper-button-prev'>
            <ArrowLeft />
          </ArrowButtonWrapper>
          <Swiper
            slidesPerView={7}
            spaceBetween={0}
            pagination={false}
            loop
            autoplay
            modules={[Pagination, Navigation]}
            className='mySwiper'
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              300: {
                slidesPerView: 1
              },
              400: {
                slidesPerView: 2
              },
              550: {
                slidesPerView: 2
              },
              769: {
                slidesPerView: 3
              },
              1000: {
                slidesPerView: 3
              },
              1400: {
                slidesPerView: 4
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {productList.map((product, i) => (
              <SwiperSlide key={i}>
                <SingleProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ArrowButtonWrapper className='swiper-button-next'>
            <ArrowRight />
          </ArrowButtonWrapper>
        </Content>
      </InnerContainer>
    </Container>
  )
}
