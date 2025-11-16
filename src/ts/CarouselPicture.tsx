// const address = "https://picsum.photos/600/350?v=1";
const BASE_ADDRESS = "../../public/CarouselAssets/";

interface objectData {
  fileName: string;
  altText: string;
  description: string;
}

const DATA: objectData[] = [
  {
    fileName: "Doot.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "misc brawl repaint.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "Doot.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "Doot.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "Doot.PNG",
    altText: "",
    description: "hello world",
  },
];

function getAddress(index: number) {
  return BASE_ADDRESS + DATA[index].fileName;
}

function getAlt(index: number) {
  return DATA[index].altText;
}

function CarouselPicture({ index }: { index: number }) {
  return (
    <img
      className="embla__slide__img"
      src={`${getAddress(index)}`}
      alt={`${getAlt(index)}`}
    />
  );
}

export default CarouselPicture;
