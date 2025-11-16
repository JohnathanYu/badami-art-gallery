import {
  carouselGetAddress,
  carouselGetAlt,
  carouselGetLength,
} from "./CarouselData";

function CarouselPictures() {
  return (
    <div className="embla__container">
      {Array.from(Array(carouselGetLength()).keys()).map((index) => (
        <div className="embla__slide" key={index}>
          <img
            className="embla__slide__img"
            src={`${carouselGetAddress(index)}`}
            alt={`${carouselGetAlt(index)}`}
          />
        </div>
      ))}
    </div>
  );
}

export default CarouselPictures;
