const SliderImage = ({ currentImageIndex, i, imageUrl }) => {
  console.log(currentImageIndex, i, imageUrl);
  return (
    <img
      key={imageUrl}
      src={imageUrl}
      alt={`Slider image ${i + 1}`}
      className={`absolute w-full h-full transition-opacity duration-500 ${
        currentImageIndex === i ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default SliderImage;
