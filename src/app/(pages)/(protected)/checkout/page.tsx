
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../(public)/cart/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage = () => {
  const router = useRouter();
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("cash");
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
  });

  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill all the required fields.");
      return;
    }

    if (selectPaymentMethod === "card") {
    
      setLoading(true);
      router.push("/payment"); // Re
    } else if (selectPaymentMethod === "cash") {
      setLoading(true);
      router.push("/success"); 
    }
  };
  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateDiscount = (subtotal: number) => subtotal * 0.1;

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    return subtotal - discount;
  };
  useEffect(() => {
    if (cart && cart.length === 0) {
      router.push("/cart");
    }
  }, [cart, router]);

  return (
    <div>
      <form
        onSubmit={(e) => handlePlaceOrder(e)}
        className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 md:px-10"
      >
        <div className="max-w-6xl w-full bg-white rounded-lg flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-2/3 p-6 md:p-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#333333]">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 text-[#333333] md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  type="text"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  value={formValues.email}
                  onChange={handleInputChange}
                  id="email"
                  type="email"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="tel">Phone</label>
                <input
                  id="tel"
                  type="tel"
                  className="p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="text"
                placeholder="Address 1"
                className="col-span-1 md:col-span-2 p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Address 2"
                className="col-span-1 md:col-span-2 p-3 border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mt-6 flex justify-center text-[#333333]">
              <button className="px-4 py-3 text-md font-bold w-full border-2 hover:text-white hover:bg-textp">
                <Link href={"/cart"}>Back to cart</Link>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Order Summary
            </h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{item.heading}</h3>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="space-y-4">
              <div className="flex justify-between font-semibold">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-green-500">
                <span>Discount (10%):</span>
                <span>
                  - ${calculateDiscount(calculateSubtotal()).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Tax:</span>
                <span>$0</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between text-xl font-bold mt-5">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <input
                defaultChecked
                value="cash"
                id="cash"
                type="radio"
                name="payment"
                onChange={(e) => setSelectPaymentMethod(e.target.value)}
              />
              <label className="text-md" htmlFor="cash">
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                value="card"
                id="card"
                type="radio"
                name="payment"
                onChange={(e) => setSelectPaymentMethod(e.target.value)}
              />
              <label className="text-md" htmlFor="card">
                Pay with Card
              </label>
            </div>
            <div className="w-full mt-4">
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`mt-6 w-full font-bold py-3 rounded-sm ${
                  !isFormValid || loading
                    ? "bg-yellow-400 cursor-not-allowed"
                    : "bg-myBlue text-white hover:bg-orange-600"
                }`}
              >
                {loading ? "Processing..." : "Place an order"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

