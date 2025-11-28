import {
  carouselGetAddress,
  carouselGetAlt,
  carouselGetLength,
} from "./CarouselData";

type PropType = {
  handleClick: (index: number) => void;
};

const CarouselPictures: React.FC<PropType> = (props) => {
  const { handleClick } = props;
  return (
    <div className="embla__container">
      {Array.from(Array(carouselGetLength()).keys()).map((index) => (
        <div className="embla__slide" key={index}>
          <img
            className="embla__slide__img"
            src={`${carouselGetAddress(index)}`}
            alt={`${carouselGetAlt(index)}`}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselPictures;
