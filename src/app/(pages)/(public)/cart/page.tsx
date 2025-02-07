"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "./context/CartContext";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash } from "lucide-react";
import { useSession } from "next-auth/react";

const colorNames: Record<string, string> = {
  "bg-myBlue": "Blue",
  "bg-myDarkGreen": "Green",
  "bg-myOrange": "Orange",
  "bg-myDark": "Dark",
};

const CartPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    if (!session) {
      router.push("/signin?redirect=/cart");
    } else {
      router.push("/checkout");
    }
  };
  console.log(session);

  console.log(cart);

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateDiscount = (subtotal: number) => subtotal * 0.1;

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    return subtotal - discount;
  };

  const handleContinueShopping = () => {
    router.push("/shop");
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold my-2  pb-6 text-center hover:underline text-myBlue">
        Let’s Check Your Cart!
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <Image
            src="/cart/cart.gif"
            alt="Empty Cart"
            width={150}
            height={150}
            className="w-[250px] h-[200px] mx-auto mb-4 rounded-lg"
          />
          <p className="text-xl font-semibold">Your Cart is Empty</p>
          <p className="text-lg text-gray-600 mt-2">Your Shopping Basket.</p>
          <button
            onClick={handleContinueShopping}
            className="mt-4 px-6 py-2 bg-myBlue text-white rounded hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Details Section */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center border-b pb-4">
              <span className="font-semibold">Product</span>
              <span className="font-semibold hidden md:inline">Price</span>
              <span className="font-semibold hidden md:inline">Color</span>
              <span className="font-semibold hidden md:inline">Size</span>
              <span className="font-semibold hidden md:inline">Total</span>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center py-4 border-b"
              >
                {/* Product (Image + Name) */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.heading}
                    width={60}
                    height={60}
                    className="object-cover rounded-md"
                  />
                  <span className="text-lg font-medium">{item.heading}</span>
                </div>
                {/* Price */}
                <span className="text-lg hidden md:inline">
                  ${item.price.toFixed(2)}
                </span>
                {/* Color */}
                <span className="text-lg hidden md:inline">
                  {colorNames[item.selectedColor] || "Not selected"}
                </span>
                {/* Size */}
                <span className="text-lg hidden md:inline">
                  {item.selectedSize || "N/A"}
                </span>

                {/* Total */}
                <span className="text-lg font-medium hidden md:inline">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                {/* Quantity Controls */}
                <div className="flex items-center space-x-4 col-span-2 md:col-span-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 rounded hover:bg-gray-200"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 rounded hover:bg-gray-200"
                  >
                    <Plus size={18} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-semibold">
                  ${calculateSubtotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Discount (10%):</span>
                <span className="font-semibold text-green-500">
                  - ${calculateDiscount(calculateSubtotal()).toFixed(2)}
                </span>
              </div>
              {/* Shipping Charges will be added dynamically at checkout */}
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold text-xl">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
              <button
                onClick={handleContinueShopping}
                className="px-6 py-2 bg-myBlue text-white rounded hover:bg-blue-600"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {session ? "Proceed to Checkout" : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
