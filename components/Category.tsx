// components/CategoryGrid.tsx
import Image from "next/image";
import Link from "next/link";

interface Category {
  title: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    title: "FURNITURE",
    image: "/furniture.png",
    link: "/category/furniture",
  },
  {
    title: "DECOR",
    image: "/decor.png",
    link: "/category/decor",
  },
  {
    title: "RUGS",
    image: "/rugs.png",
    link: "/category/rugs",
  },
  {
    title: "LIGHTING",
    image: "/lighting.png",
    link: "/category/lighting",
  },
  {
    title: "OUTDOOR PRODUCTS",
    image: "/products.png",
    link: "/category/outdoor",
  },
  {
    title: "CEILING FANS",
    image: "/fan.png",
    link: "/category/ceiling-fans",
  },
];

export default function CategoryGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl mb-8 font-bold">
        START HERE FOR STYLE: SHOP BY CATEGORY
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            href={category.link}
            key={category.title}
            className="bg-gray-100 p-4 hover:shadow-lg transition-shadow h-65"
          >
            <Image
              src={category.image}
              alt={category.title}
              width={400}
              height={600}
              className="w-full h-[92%] object-cover mb-4"
            />
            <h3 className="text-lg font-medium underline">{category.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
