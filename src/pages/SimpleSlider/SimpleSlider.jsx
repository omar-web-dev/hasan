import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderImage from "./SliderImages";

function SimpleSlider() {

  const images = [
    "https://i.ibb.co/6JyfccB/download-1.jpg",
    "https://i.ibb.co/Tkw243M/download-2.jpg",
    "https://i.ibb.co/xDTSnsW/download.jpg",
    "https://i.ibb.co/kBmX3dh/images.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-96">
      {images.map((imageUrl, i) => (
        <SliderImage imageUrl={imageUrl} key={i} i={i} currentImageIndex={currentImageIndex}/>
      ))}
      <button
        className="h-10 w-10 bg-white border border-[#4d4dff] slider-button-prev absolute bottom-0  left-10 z-10 transform hover:text-white hover:bg-[#4d4dff] bg-opacity-50 text-[#4d4dff] px-3 py-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75"
        onClick={handlePrevClick}
      >
        <FaAngleLeft/>
      </button>
      <button
        className="h-10 w-10 bg-white border-[#4d4dff] slider-button-next absolute bottom-0 text-[#4d4dff] left-32 z-10 transform hover:text-white hover:bg-[#4d4dff] bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:bg-opacity-75"
        onClick={handleNextClick}
      >
       <FaAngleRight/>
      </button>
    </div>
  );
}

export default SimpleSlider;
