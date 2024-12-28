// components/LandscapeLighting.tsx
import Image from "next/image";
import Link from "next/link";

interface LightingType {
  title: string;
  image: string;
  link: string;
}

const lightingTypes: LightingType[] = [
  {
    title: "Path Lighting",
    image: "/path.png",
    link: "/lighting/path",
  },
  {
    title: "Accent Lights",
    image: "/accent.png",
    link: "/lighting/accent",
  },
  {
    title: "Deck Lights",
    image: "/deck.png",
    link: "/lighting/deck",
  },
  {
    title: "Well Lights",
    image: "/well.png",
    link: "/lighting/well",
  },
  {
    title: "Bollards Path Lights",
    image: "/bollards.png",
    link: "/lighting/bollards",
  },
  {
    title: "Flood Lights",
    image: "/flood.png",
    link: "/lighting/flood",
  },
];

export default function LandscapeLighting() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h2 className="text-center text-2xl mb-8 text-gray-800 font-bold">
        LANDSCAPE LIGHTING FOR EVERY PURPOSE
      </h2>
      <div className="grid grid-cols-6 gap-6">
        {lightingTypes.map((light) => (
          <Link
            href={light.link}
            key={light.title}
            className="text-center group"
          >
            <div className="mb-4 h-40">
              <Image
                src={light.image}
                alt={light.title}
                width={200}
                height={200}
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-medium underline hover:text-gray-600">
              {light.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
