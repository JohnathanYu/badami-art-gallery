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
    fileName: "misc Creation, Desertion, and Reflection.png",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "normal comic Comic Mockup.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "normal comic Proof of Concept.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "padoodles Character Designs.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "Padoodles Game_Mock-up 1.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "Padoodles Game_Mock-up 2.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "Pip.PNG",
    altText: "",
    description: "hello world",
  },
  {
    fileName: "XalNir.PNG",
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
