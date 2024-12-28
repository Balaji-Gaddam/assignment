// components/CuratedCollections.tsx
import Image from "next/image";
import Link from "next/link";

interface CollectionItem {
  title: string;
  image: string;
  link: string;
}

const collections: CollectionItem[] = [
  {
    title: "Bohemian",
    image: "/bohemian.png",
    link: "/collections/bohemian",
  },
  {
    title: "Modern Farmhouse",
    image: "/farm_house.jpeg",
    link: "/collections/farmhouse",
  },
  {
    title: "Fall",
    image: "/fall.jpeg",
    link: "/collections/fall",
  },
  {
    title: "Coastal",
    image: "/coastal.jpeg",
    link: "/collections/coastal",
  },
];

interface BlogPost {
  title: string;
  image: string;
  link: string;
  color: string; // Dynamically set text color
}

const blogPosts: BlogPost[] = [
  {
    title: "HOW TO CHOOSE An Area Rug",
    image: "/post1.png",
    link: "/blog/how-to-choose-area-rug",
    color: "black", // Black text for dark background
  },
  {
    title: "How to Choose OUTDOOR LIGHTING",
    image: "/post2.png",
    link: "/blog/how-to-choose-outdoor-lighting",
    color: "white", // White text for light background
  },
];

export default function CuratedCollections() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center mb-2 uppercase tracking-wide font-bold">
        Curated Style Collections
      </h2>
      <p className="text-center italic text-xl mb-8 font-medium">
        Products individually selected by our style experts.
      </p>

      <div className="grid grid-cols-4 gap-8 mb-12">
        {collections.map((collection) => (
          <Link
            href={collection.link}
            key={collection.title}
            className="text-center group"
          >
            <div className="rounded-full overflow-hidden mb-4 aspect-square">
              <Image
                src={collection.image}
                alt={collection.title}
                width={300}
                height={300}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl underline hover:text-gray-600 font-semibold">
              {collection.title}
            </h3>
            <h3 className="text-xl underline hover:text-gray-600 font-semibold">
              Decor
            </h3>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link
            href={post.link}
            key={post.title}
            className="relative group h-60 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div
              className={`absolute inset-0   flex items-center justify-center px-20 py-10`}
            >
              <div
                className={`text-center ${
                  post.color == "white" ? "bg-black" : "bg-white"
                } bg-opacity-40 py-2 px-9`}
              >
                <p
                  className={`text-3xl mb-2 font-bold ${
                    post.color == "white" ? "text-white" : "text-black"
                  }`}
                >
                  {post.title}
                </p>
                <p className={`underline text-${post.color} font-bold`}>
                  Read the Post
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
