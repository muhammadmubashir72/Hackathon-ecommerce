"use client";

import { createContext, useContext, useState } from "react";

// Define the WishlistItem interface
interface WishlistItem {
  id: string;
  heading: string;
  price: number;
  image: string;
  selectedColor: string;
  selectedSize: string;
}

// Define the WishlistContextType interface
interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Create the WishlistProvider component
export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    console.log("Adding item to wishlist:", item);
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find(
        (wishlistItem) =>
          wishlistItem.id === item.id &&
          wishlistItem.selectedColor === item.selectedColor &&
          wishlistItem.selectedSize === item.selectedSize
      );
      if (existingItem) {
        console.log("Item already in wishlist");
        return prevWishlist; // Item already in wishlist, no need to add again
      }
      console.log("New item added to wishlist");
      return [...prevWishlist, item]; // Add new item to wishlist
    });
    alert("Added to wishlist Successfully!");
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    alert("Removed from wishlist Successfully!");
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
