// components/ShopByRoom.tsx
import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    title: "Dining Room",
    image: "/dining.png",
    link: "/room/dining",
  },
  {
    title: "Kitchen Lighting",
    image: "/kitchen.png",
    link: "/room/kitchen",
  },
  {
    title: "Bedroom Lighting",
    image: "/bedroom.png",
    link: "/room/bedroom",
  },
  {
    title: "Living Room",
    image: "/living.png",
    link: "/room/living",
  },
  {
    title: "Entry Way/Foyer",
    image: "/entry.png",
    link: "/room/entryway",
  },
  {
    title: "Work/Office Space",
    image: "/work.png",
    link: "/room/office",
  },
];

export default function ShopByRoom() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-2xl mb-8 font-bold">
        TIME FOR A NEW LOOK: SHOP BY ROOM
      </h2>
      <div className="grid grid-cols-3 gap-8 md:gap-12">
        {rooms.map((room) => (
          <Link href={room.link} key={room.title} className="text-center group">
            <div className="rounded-full overflow-hidden w-60 h-60 mx-auto mb-4">
              <Image
                src={room.image}
                alt={room.title}
                width={160}
                height={160}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg underline font-semibold">{room.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
