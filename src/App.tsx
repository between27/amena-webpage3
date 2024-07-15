import { Card } from "./component/card"
import { FaPhoneFlip, FaRegEnvelope } from "react-icons/fa6";
function App() {


  return <>
  <section className="">
    <div className=" pl-8 bg-[#2F1F14] w-full relative flex">
      <img className="absolute top-0 left-3 w-96" src="logo.svg" alt="" />
      <div className=" ml-32 xl:ml-72 top-1/2 flex flex-col justify-center items-center z-10 absolute">
        <h1 className=" text-white opacity-80 text-7xl xl:text-8xl font-pompiere">Coffee Makes Mood</h1>
        <h2 className=" text-white opacity-90 text-xl xl:text-2xl font-galada">"Indulge in Every Sip: Experience the Richness of Coffee!"
        </h2>
      </div>
      <img className=" z-0" src="first.png" alt="" />
    </div>

    <div className="flex justify-start lg:justify-center bg-[#DBBCA1] p-10 space-x-40 ">
      <img src="second.png" className="w-96" alt="" />
      <div className="pt-4 lg:w-1/3">
        <h1 className="font-poppins font-extrabold text-3xl">Discover Coffee Borcelle</h1>
        <h2 className="font-poppins text-xl mb-3">Elevating Your Coffee Experience</h2>
        <div className="font-inter space-y-4 mb-4">
          <p>At Coffee Borcelle, we're on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world's most renowned coffee regions.</p>
          <p>With expert craftsmanship and a commitment to quality, 
          Join us in savoring the art of coffee, one cup at a time.</p>
        </div>
        <a href="#" className=" inline-block text-white bg-[#2F1F14] p-4 ">Go to github</a>
      </div>
    </div>


    <div className=" flex-col flex items-center bg-[#655546] py-14 ">
      <div className="flex items-center">
        <h1 className=" text-white text-5xl font-montserrat font-extrabold">Reviews</h1>
        <img className="w-20" src="cup.svg" alt="" />
      </div>
      <h2 className="font-poppins text-white text-2xl">What other people are saying!</h2>
      <div className="flex font-poppins justify-center space-x-10 my-7">
        <Card
            username="naruto"
            description="Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation." />
        <Card
            username="goku"
            description="Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest." />
        <Card
            username="ichigo"
            description="Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup" />
      </div>
    </div>


    <div className=" bg-[#291600] flex space-x-9 py-6 px-20">
      <div>
        <h1 className=" text-white text-4xl font-inter font-bold">Contact Us</h1>
        <p className="text-white text-lg opacity-65">Send us a message</p>
        <div className="space-y-3 py-3">
          <input className="block py-2" type="text" placeholder="Full name" />
          <input className="block py-2" type="text" placeholder="Your Email" />
        </div>
        <textarea className="block w-52" placeholder="Your Message"></textarea>
        <button className="bg-[#DBBCA1] mt-5 rounded-2xl text-white px-12 py-3">Send</button>
        
      </div>


      <div>
      <h1 className=" text-white text-4xl font-inter font-bold">Sitemap</h1>
      <p className="text-white text-lg opacity-65">All our pages</p>
        <ul className=" list-disc mt-6 text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Feature</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
      </div>


      <div className="flex flex-col -space-y-7 ">
        <img className="w-64 block" src="logo.svg" alt="" />
        <div>
          <div className="flex items-center space-x-2">
          <FaPhoneFlip color="white"/>
          <p className="text-white">(08) 400 2000</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegEnvelope color="white"/>
          <p className="text-white">coffeeborcelle@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>;
}

export default App
