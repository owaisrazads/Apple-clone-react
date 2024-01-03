
import hero from './images/hero.jpg'
import React from 'react'


import './App.css'

function App() {
  


  return (
    <>
     <nav class="bg-[#404040] p-3 max-[760px]:">
      <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-sm font-bold"><i class="fa-brands fa-apple"></i></div>
      <div class="flex space-x-4 text-sm">
      <a href="#" class="text-white hover:text-gray-300">Store</a>
      <a href="#" class="text-white hover:text-gray-300">Mac</a>
      <a href="#" class="text-white hover:text-gray-300">ipad</a>
      <a href="#" class="text-white hover:text-gray-300">Watch</a>
      <a href="#" class="text-white hover:text-gray-300">Vision</a>
      <a href="#" class="text-white hover:text-gray-300">ConAirpodstact</a>
      <a href="#" class="text-white hover:text-gray-300">TV & Home</a>
      <a href="#" class="text-white hover:text-gray-300">Entertaintment</a>
      <a href="#" class="text-white hover:text-gray-300">Accersories</a>
      <a href="#" class="text-white hover:text-gray-300">Support</a>
      <a href="#" class="text-white hover:text-gray-300"><i class="fa-solid fa-magnifying-glass"></i></a>
      <a href="#" class="text-white hover:text-gray-300"><i class="fa-solid fa-bag-shopping"></i></a>
    </div>
   </div>
  </nav>
<div ><img src={hero} alt="" /></div>
  
      

  

    
    </>
  )
}

export default App
