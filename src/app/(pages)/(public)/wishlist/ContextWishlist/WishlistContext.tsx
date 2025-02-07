"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        }
      }
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Error saving wishlist to localStorage:", error);
    }
  }, [wishlist]);

  const addToWishlist = useCallback(
    (item: WishlistItem) => {
      setWishlist((prevWishlist) => {
        const exists = prevWishlist.some(
          (wishlistItem) =>
            wishlistItem.id === item.id &&
            wishlistItem.selectedColor === item.selectedColor &&
            wishlistItem.selectedSize === item.selectedSize
        );

        if (exists) {
          return prevWishlist;
        }

        return [...prevWishlist, item];
      });

      toast.success("Added to wishlist successfully!");
    },
    []
  );

  const removeFromWishlist = useCallback(
    (id: string) => {
      setWishlist((prevWishlist) => {
        const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
        return updatedWishlist;
      });

      toast.error("Removed from wishlist!");
    },
    []
  );

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

// "use client";
// import { createContext, useContext, useState, useEffect, useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Define the WishlistItem interface
// interface WishlistItem {
//   id: string;
//   heading: string;
//   price: number;
//   image: string;
//   selectedColor: string;
//   selectedSize: string;
// }

// // Define the WishlistContextType interface
// interface WishlistContextType {
//   wishlist: WishlistItem[];
//   addToWishlist: (item: WishlistItem) => void;
//   removeFromWishlist: (id: string) => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

//   useEffect(() => {
//     try {
//       const storedWishlist = localStorage.getItem("wishlist");
//       if (storedWishlist) {
//         const parsedWishlist = JSON.parse(storedWishlist);
//         if (Array.isArray(parsedWishlist)) {
//           setWishlist(parsedWishlist);
//         }
//       }
//     } catch (error) {
//       console.error("Error loading wishlist from localStorage:", error);
//     }
//   }, []);
  
//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     } catch (error) {
//       console.error("Error saving wishlist to localStorage:", error);
//     }
//   }, [wishlist]);

//   const addToWishlist = useCallback(
//     (item: WishlistItem) => {
//       setWishlist((prevWishlist) => {
//         const existingItem = prevWishlist.find(
//           (wishlistItem) =>
//             wishlistItem.id === item.id &&
//             wishlistItem.selectedColor === item.selectedColor &&
//             wishlistItem.selectedSize === item.selectedSize
//         );
  
//         if (existingItem) {
//           toast.info("Item is already in wishlist!");
//           return prevWishlist;
//         }
  
//         toast.success("Added to wishlist successfully!");
//         return [...prevWishlist, item];
//       });
//     },
//     [setWishlist]
//   );
  
//   const removeFromWishlist = useCallback(
//     (id: string) => {
//       setWishlist((prevWishlist) => {
//         const updatedWishlist = prevWishlist.filter((item) => item.id !== id);
//         if (updatedWishlist.length < prevWishlist.length) {
//           toast.error("Removed from wishlist!"); // Show toast immediately
//         }
//         return updatedWishlist;
//       });
//     },
//     []
//   );

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// // Custom hook to use the wishlist context
// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };
