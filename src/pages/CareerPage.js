import React from 'react'
import "../careerComponents/CareerHero"
import CareerHero from '../careerComponents/CareerHero'
import CareerLetsExplore from '../careerComponents/CareerLetsExplore'
import CareerOpenings from '../careerComponents/CareerOpenings'
import CareerBenefits from '../careerComponents/CareerBenefits'
const CareerPage = () => {
  return (
    <>
    <CareerHero/>
    <CareerLetsExplore/>
    <CareerOpenings/>
    <CareerBenefits/>
    </>
  )
}

export default CareerPage