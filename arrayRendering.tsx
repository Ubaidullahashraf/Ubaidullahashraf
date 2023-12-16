"use client"

import Image from 'next/image'

import Button from "@/app/component/button"
import { useState } from 'react';


 export default function ArrayRendering(){
   const [step ,setStep] = useState(0)

   const name = ["Muhammad Ashraf", "Muhammad UBaidullah",
   "Muhammad Tayyab", "Muhammad Saadullah", "Abdulwahab", "Muhammad Mahee",]

   const currentName = [step]

   const handleNext = () => {
    setStep((prevStep) => (prevStep < name.length - 1 ? prevStep + 1 : prevStep));
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };




  return(<>

<div className=' text-center' >
      <h1>Array Rerendring</h1>
      <hr />
      <h2>{currentName}</h2>
      <hr />
      
      {/* <button onClick={handleBack}>Back</button> */}
      <button className="button" onClick={handleBack}><span>Back </span></button>

            <button className="button" onClick={handleNext}><span>Next</span></button>
      {/* <button onClick={handleNext}>Next</button> */}
      
      
    </div>

     
  
  
  
  
  
  
  
  </>)

 }