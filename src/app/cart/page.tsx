// "use client";
// import { useCart } from "@/context/CartContext";

// const CartPage = () => {
//   const { cart, updateQuantity } = useCart();

//   const handleQuantityChange = (id: string, quantity: number) => {
//     if (quantity > 0) {
//       updateQuantity(id, quantity);
//     }
//   };

//   const total = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h1>Cart</h1>
//       {cart.length === 0 && <p>Your cart is empty.</p>}
//       {cart.map((item) => (
//         <div key={item.id} className="cart-item">
//           <img src={item.image} alt={item.name} width={100} />
//           <div>
//             <h2>{item.name}</h2>
//             <p>Price: ${item.price}</p>
//             <input
//               type="number"
//               value={item.quantity}
//               min={1}
//               onChange={(e) =>
//                 handleQuantityChange(item.id, parseInt(e.target.value))
//               }
//             />
//           </div>
//         </div>
//       ))}
//       <h2>Total: ${total.toFixed(2)}</h2>
//     </div>
//   );
// };

// export default CartPage;
