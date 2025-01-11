"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "./context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-lg sm:text-xl font-semibold text-center">
          Your Cart is Empty
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
            >
              <Image
                src={urlFor(item.image).url()}
                alt={item.heading}
                width={80}
                height={80}
                className="object-cover rounded-md w-20 h-20 sm:w-24 sm:h-24"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-semibold text-base sm:text-lg">
                  {item.heading}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <p className="font-bold text-gray-800 text-sm sm:text-base">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-200 text-sm sm:text-base"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg sm:text-xl mt-4">
            Total: ${calculateTotal().toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

// "use client";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { useCart } from "./context/CartContext";

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold my-6 text-center hover:underline text-myDarkOrange">
//         Your Cart
//       </h1>
//       {cart.length === 0 ? (
//         <p className="text-xl font-semibold ">Your Cart is Empty</p>
//       ) : (
//         <div className="space-y-6">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col md:flex-row items-center border p-4 rounded-lg space-y-4 md:space-y-0 md:space-x-6"
//             >
//               <Image
//                 src={urlFor(item.image).url()}
//                 alt={item.heading}
//                 width={80}
//                 height={80}
//                 className="object-cover rounded-md"
//               />
//               <div className="flex-1 text-center md:text-left">
//                 <h2 className="font-semibold text-lg">{item.heading}</h2>
//                 <p className="text-gray-600">
//                   ${item.price.toFixed(2)} x {item.quantity}
//                 </p>
//                 <p className="font-bold text-gray-800">
//                   Total: ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   className="px-3 py-1 border rounded hover:bg-gray-200"
//                 >
//                   -
//                 </button>
//                 <span className="text-lg font-medium">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="px-3 py-1 border rounded hover:bg-gray-200"
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="text-right font-bold text-xl mt-4">
//             Total: ${calculateTotal().toFixed(2)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
