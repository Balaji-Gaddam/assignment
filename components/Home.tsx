// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/home1.png", alt: "Lamp with orchid" },
    { src: "/home2.png", alt: "Featured lamp" },
    { src: "/home3.png", alt: "Smart lighting" },
  ];

  return (
    <div className="bg-white mt-4">
      <div className="container mx-auto px-4 py-6">
        

        <div className="grid grid-cols-3 gap-6 mb-8">
          {images.map((image, index) => (
            <div className="relative" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-2">
          <h3 className="text-xl italic mb-4 font-bold">
            Online Variety Meets Showroom Confidence
          </h3>
          <div className="flex justify-center gap-4 font-semibold">
            <Link href="/warranty" className="underline">
              Lifetime Warranty
            </Link>
            <span>|</span>
            <Link href="/returns" className="underline">
              Easy Returns
            </Link>
            <span>|</span>
            <Link href="/stock" className="underline">
              In-Stock Guarantee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
