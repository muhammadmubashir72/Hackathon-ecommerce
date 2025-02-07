"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  heading: string;
  price: number;
  image: string;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  calculateTotal: () => number;
  getItemQuantity: (id: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"info" | "success" | "warning" | "error" | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Sync cart with localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Show toast message when toastMessage is updated
  useEffect(() => {
    if (toastMessage && toastType) {
      toast[toastType](toastMessage, {
        position: "bottom-right",
        autoClose: 3000,
        style: {
          backgroundColor: "black",
          color: "white",
          fontSize: "16px",
          borderRadius: "8px",
        },
      });
    }
  }, [toastMessage, toastType]);

  const showToast = (message: string, type: "info" | "success" | "warning" | "error") => {
    setToastMessage(message);
    setToastType(type);
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedSize === item.selectedSize
      );

      if (existingItem) {
        showToast("Item already in the cart!", "info");
        return prevCart;
      }

      const updatedCart = [...prevCart, { ...item, quantity: 1 }];
      showToast("Item added to cart successfully!", "success");
      return updatedCart;
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          const prevQuantity = cartItem.quantity;
          const updatedItem = { ...cartItem, quantity: newQuantity };

          if (newQuantity > prevQuantity) {
            showToast("Item quantity increased", "info");
          } else if (newQuantity < prevQuantity) {
            showToast("Item quantity decreased", "warning");
          }

          return updatedItem;
        }
        return cartItem;
      });

      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== id);
      showToast("Item removed from cart", "error");
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    showToast("Cart cleared successfully!", "info");
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemQuantity = (id: string) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        calculateTotal,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// "use client";
// import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";

// interface CartItem {
//   id: string;
//   heading: string;
//   price: number;
//   image: string;
//   quantity: number;
//   selectedColor: string;
//   selectedSize: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
//   calculateTotal: () => number;
//   getItemQuantity: (id: string) => number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       try {
//         const parsedCart = JSON.parse(storedCart);
//         if (Array.isArray(parsedCart)) {
//           setCart(parsedCart);
//         }
//       } catch (error) {
//         console.error("Failed to parse cart from localStorage:", error);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const handleStorageChange = (event: StorageEvent) => {
//       if (event.key === "cart") {
//         setCart(JSON.parse(event.newValue || "[]"));
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   const showToast = (
//     message: string,
//     type: "info" | "success" | "warning" | "error"
//   ) => {
//     toast[type](message, {
//       position: "bottom-right",
//       autoClose: 3000,
//       style: {
//         backgroundColor: "black",
//         color: "white",
//         fontSize: "16px",
//         borderRadius: "8px",
//       },
//     });
//   };

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(
//         (cartItem) =>
//           cartItem.id === item.id &&
//           cartItem.selectedColor === item.selectedColor &&
//           cartItem.selectedSize === item.selectedSize
//       );

//       if (existingItem) {
//         showToast("Item already in the cart!", "info");
//         return prevCart;
//       }

//       const updatedCart = [...prevCart, { ...item, quantity: 1 }];
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       showToast("Item added to cart successfully!", "success");
//       return updatedCart;
//     });
//   };

//   const updateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return;

//     setCart((prevCart) => {
//       const updatedCart = prevCart.map((cartItem) => {
//         if (cartItem.id === id) {
//           const prevQuantity = cartItem.quantity;
//           const updatedItem = { ...cartItem, quantity: newQuantity };

//           if (newQuantity > prevQuantity) {
//             showToast("Item quantity increased", "info");
//           } else if (newQuantity < prevQuantity) {
//             showToast("Item quantity decreased", "warning");
//           }

//           return updatedItem;
//         }
//         return cartItem;
//       });

//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((cartItem) => cartItem.id !== id);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       showToast("Item removed from cart", "error");
//       return updatedCart;
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem("cart");
//     showToast("Cart cleared successfully!", "info");
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const getItemQuantity = (id: string) => {
//     const item = cart.find((cartItem) => cartItem.id === id);
//     return item ? item.quantity : 0;
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         clearCart,
//         calculateTotal,
//         getItemQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
