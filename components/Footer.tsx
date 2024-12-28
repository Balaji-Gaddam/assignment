// components/TradeBanner.tsx
export default function TradeBanner() {
  return (
    <div className="w-full">
      {/* Top banner with floral background */}
      <div className="relative border-t-4  border-pink-700 mx-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-2xl text-pink-700 font-bold">
              Professional Designer?
            </h2>
            <a
              href="/trade-program"
              className="text-xl text-black border-b-2 border-black hover:border-rose-500 transition-colors"
            >
              EXPLORE OUR TRADE PROGRAM.
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center py-4 border-t-2 border-black-700">
        <p className="text-sm">
          Looking to save{" "}
          <a href="/signup" className="underline font-medium">
            now
          </a>{" "}
          or stay in the loop later? Create a{" "}
          <span className="font-medium">FREE</span> account today!{" "}
          <a href="/signup" className="underline font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
