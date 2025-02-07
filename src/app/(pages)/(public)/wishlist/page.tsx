"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useWishlist } from "./ContextWishlist/WishlistContext";

// Mapping for colors
const colorNames: Record<string, string> = {
  "bg-myBlue": "Blue",
  "bg-myDarkGreen": "Green",
  "bg-myOrange": "Orange",
  "bg-myDark": "Dark",
};

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold my-2  pb-6 text-center hover:underline text-myBlue">
        Let’s Check Your Wishlist! ❤️
      </h1>

      {wishlist.length === 0 ? (
        <div>
          <Image
            src="/wishlist/wishlist.gif"
            alt="Empty Cart"
            width={150}
            height={150}
            className="w-[250px] h-[200px] mx-auto mb-4 rounded-lg"
          />
          <p className="text-xl text-center font-semibold">Your wishlist is waiting for some love. Browse through our products and add your favorites!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
            >
              <Image
                src={urlFor(item.image).url()}
                alt={item.heading}
                width={80}
                height={80}
                className="object-cover rounded-md"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-semibold text-lg">{item.heading}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                {/* Display the selected color and size */}
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Color:</strong>{" "}
                  {colorNames[item.selectedColor] || "Not selected"}
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  <strong>Size:</strong> {item.selectedSize || "Not selected"}
                </p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
