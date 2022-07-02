import React from 'react'
import { Arrivals } from '../Arrivals'
import { FavoriteFees } from '../FavoriteFees'
import { HomeHero } from '../HomeHero'
import { SignUpAndStay } from '../SignUpAndStay'
import { Teams } from '../Teams'

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Teams />
      <Arrivals />
      <FavoriteFees />
      <SignUpAndStay />
    </>
  )
}
