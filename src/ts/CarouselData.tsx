const BASE_ADDRESS = "CarouselAssets/";

interface objectData {
  fileName: string;
  altText: string;
  description: string;
}

const DATA: objectData[] = [
  {
    fileName: "Doot.PNG",
    altText: "",
    description:
      "These are all characters from multiple different Dungeons and Dragons games. Even though they were primarily made " +
      "for fun, they were also an excuse to experiment with various poses in a program I was fairly new with.",
  },
  {
    fileName: "misc brawl repaint.PNG",
    altText: "",
    description:
      "This is a recreation from a screencap from the Super Smash Bros. Brawl game. This was to experiment with different " +
      "painting styles with brushes I hadn't used before. The characters pictured are also from various different projects " +
      "I have had over the years.",
  },
  {
    fileName: "misc Creation, Desertion, and Reflection.png",
    altText: "",
    description:
      "A small piece of three individual trading cards for a much larger interactive project. These three cards were " +
      "obtained separately, but tell a story when placed together. The character pictured was one I had made for my " +
      "friend and the story told here was also made for them as a surprise.",
  },
  {
    fileName: "normal comic Comic Mockup.PNG",
    altText: "",
    description:
      "These were two attempts at creating an artstyle for a comic with my friend. He handled the 3D-rendered backgrounds " +
      "and I illustrated the characters. ",
  },
  {
    fileName: "normal comic Proof of Concept.PNG",
    altText: "",
    description:
      "These were two attempts at creating an artstyle for a comic with my friend. He handled the 3D-rendered backgrounds " +
      "and I illustrated the characters. ",
  },
  {
    fileName: "padoodles Character Designs.PNG",
    altText: "",
    description:
      "These were mock-ups for a video game that was never actually intended to be made. They are more rough concepts if " +
      "anything using preexisting characters I am still fond of.",
  },
  {
    fileName: "Padoodles Game_Mock-up 1.PNG",
    altText: "",
    description:
      "These were mock-ups for a video game that was never actually intended to be made. They are more rough concepts if " +
      "anything using preexisting characters I am still fond of.",
  },
  {
    fileName: "Padoodles Game_Mock-up 2.PNG",
    altText: "",
    description:
      "These were mock-ups for a video game that was never actually intended to be made. They are more rough concepts if " +
      "anything using preexisting characters I am still fond of.",
  },
  {
    fileName: "Pip.PNG",
    altText: "",
    description:
      "These are all characters from multiple different Dungeons and Dragons games. Even though they were primarily made " +
      "for fun, they were also an excuse to experiment with various poses in a program I was fairly new with.",
  },
  {
    fileName: "XalNir.PNG",
    altText: "",
    description:
      "These are all characters from multiple different Dungeons and Dragons games. Even though they were primarily made " +
      "for fun, they were also an excuse to experiment with various poses in a program I was fairly new with.",
  },
];

export function carouselGetLength() {
  return DATA.length;
}

export function carouselGetAddress(index: number) {
  return BASE_ADDRESS + DATA[index].fileName;
}

export function carouselGetAlt(index: number) {
  return DATA[index].altText;
}

export function carouselGetDescription(index: number) {
  return DATA[index].description;
}
