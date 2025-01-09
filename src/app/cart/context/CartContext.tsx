"use client";

import { createContext, useContext, useState } from "react";

// CartItem ka interface banaya hai, jo ek item ki properties define karta hai
interface CartItem {
  id: string;
  heading: string;
  price: number; // Price ko number type diya gaya hai taake hum calculations kar sakein
  image: string;
  quantity: number; // Quantity bhi rakhi hai, jo item ke kitni quantity cart mein hai, yeh track karne ke liye
}

// CartContextType ka interface banaya hai jo cart ki state aur methods ko define karta hai
interface CartContextType {
  cart: CartItem[]; // Yeh cart mein items ko store karega
  addToCart: (item: CartItem) => void; // Method jo item ko cart mein add karega
  updateQuantity: (id: string, quantity: number) => void; // Method jo item ki quantity ko update karega
  removeFromCart: (id: string) => void; // Method jo item ko cart se remove karega
}

// CartContext create kiya gaya hai
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component, jo children ko CartContext ke saath wrap karega
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Cart ko state mein store kiya gaya hai
  const [cart, setCart] = useState<CartItem[]>([]);

  // addToCart function: Agar item pehle se cart mein hai, to uski quantity ko increment kar dega, agar nahi hai to naya item add karega
  const addToCart = (item: CartItem) => {
    console.log('Adding to cart:', item); // Debugging
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    alert('Added to cart Successfully!');
  };
  
  // updateQuantity function: Yeh function item ki quantity ko update karta hai
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return; // Quantity ko 1 se kam hone se rokta hai
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  // removeFromCart function: Yeh function item ko cart se remove karne ka kaam karta hai
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    // CartContext.Provider ko value ke saath wrap kar rahe hain, jisme cart, addToCart, updateQuantity aur removeFromCart methods hain
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart hook: Yeh hook CartContext se values ko access karta hai
export const useCart = () => {
  const context = useContext(CartContext);

console.log(context)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
