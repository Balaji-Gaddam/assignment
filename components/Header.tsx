import Link from "next/link";

export default function Home() {
  return (
    <header>
      <div className="container mx-auto px-4 py-2">
        <nav className="flex justify-between items-center">
          <div>
            <button className="text-gray-700 mx-4 font-semibold">
              Call Center Hours ▼
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <label className="flex items-center font-semibold">
              <input type="checkbox" className="mr-2" />
              Save Up To 10%
            </label>
            <Link href="/login" className="hover:text-blue-600">
              Login/Sign Up
            </Link>
            <Link href="/order-status" className="hover:text-blue-600">
              Order Status
            </Link>
            <Link href="/favorites" className="hover:text-blue-600">
              My Favorites
            </Link>
            <Link href="/cart" className="hover:text-blue-600">
              Cart (0)
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex justify-between items-center mb-2 mt-8">
        <Link href="/" className="text-4xl font-serif text-gray-800 mx-10">
          HomeClick
        </Link>
        <div className="relative w-96 mx-4">
          <input
            type="search"
            placeholder="Search for Anything"
            className="w-full p-2 pr-12 border rounded-md"
          />
          <input
            type="checkbox"
            className="absolute top-1/2 right-3 w-4 h-4 transform -translate-y-1/2"
          />
        </div>
      </div>
    </header>
  );
}
