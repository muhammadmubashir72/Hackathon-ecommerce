"use client";
import Image from "next/image"; // Image ko import kiya gaya hai
import { urlFor } from "@/sanity/lib/image"; // Sanity se image URL ko handle karne ke liye
import { useCart } from "./context/CartContext"; // CartContext ko use kiya gaya hai

const CartPage = () => {
  // Cart items ko access karte hain
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Total price calculate karte hain cart mein items ke price aur quantity ko use karke
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-xl font-semibold ">Your Cart is Empty</p> // Agar cart mein koi item nahi hai to yeh message dikhaye
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Item ki image ko display karte hain */}
              <Image
                src={urlFor(item.image).url()}
                alt={item.heading}
                width={80}
                height={80}
                className="object-cover rounded-md"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-semibold text-lg">{item.heading}</h2>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <p className="font-bold text-gray-800">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Quantity update buttons */}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-200"
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          {/* Total price display */}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
