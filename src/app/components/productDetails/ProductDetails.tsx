"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import { CiHeart } from "react-icons/ci";
import { FaEye, FaStar, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import ProductCardSlide from "../ProductComponent/productCardSlider";
import { IProducts } from "../types/ProductType";
import ProductCards from "../HomeComponent/ProductCardComponent";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/(pages)/(public)/cart/context/CartContext";
import { useWishlist } from "@/app/(pages)/(public)/wishlist/ContextWishlist/WishlistContext";
import Loader from "@/app/(pages)/(public)/Loader3D/Loader";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const ProductDetails = ({ productId }: { productId: string }) => {
  const router = useRouter();
  const navigate = () => {
    router.push("/checkout");
  };

  const colors = [
    { name: "blue", class: "bg-myBlue" },
    { name: "green", class: "bg-myDarkGreen" },
    { name: "orange", class: "bg-myOrange" },
    { name: "dark", class: "bg-myDark" },
  ];
  const sizes = ["XSM", "SM", "MD", "LG", "XLG"];
  const [result, setResult] = useState<IProducts | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProducts[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].class);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[2]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleColorChange = (colorClass: string) => {
    setSelectedColor(colorClass);
  };
  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const query = `*[_type == "product" || _type == "shop" || _type == "seller"]{
        id,
        heading,
        subheading,
        image,
        price{
            originalPrice,
            discountedPrice
        },
    }`;

      const data = await client.fetch(query);

      const product = data.find((item: IProducts) => item.id === productId);
      setResult(product || null);
      const related = data.filter(
        (item: IProducts) => item.subheading === product?.subheading
      );
      setRelatedProducts(related);
      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          aria-label="Loading..."
        >
          <Loader />
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <p
        className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
      >
        Product not found
      </p>
    );
  }

  return (
    <div className="p-8 hover:shadow-lg transition-shadow">
      <ProductCardSlide />

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center space-y-0">
          <Image
            src={
              result.image?.asset
                ? urlFor(result.image.asset).url()
                : "/images/placeholder.jpg"
            }
            alt={`Main Image ${result.heading || "Product"}`}
            className="w-full h-auto lg:w-[500px] lg:h-[600] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            width={506}
            height={450}
            priority
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <h1
            className={`${montserrat.className} text-3xl font-semibold text-gray-800`}
          >
            {result.heading}
          </h1>

          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            <FaStar className="text-gray-300" />
            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <div className="flex space-x-4">
            <span className="text-xl font-bold text-green-600">
              ${result.price.discountedPrice}
            </span>

            <span className="line-through text-myGrey opacity-60 text-lg">
              ${result.price.originalPrice}
            </span>
            <h5
              className={`${montserrat.className} mt-[2px] line-through text-start font-bold text-md text-myGrey `}
            >
              -10%
            </h5>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-600">Availability:</span>
            <span className="text-green-600">In Stock</span>
          </div>

          <p className="text-gray-500 pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus cum quidem tempora sint et eaque, temporibus alias
            provident hic nobis sed velit voluptate voluptatibus, quia ullam
            esse eligendi vitae.
          </p>
          <h3 className="text-lg font-medium text-gray-700">
            Category: {result.subheading}{" "}
          </h3>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Color Family:</h3>
            <div className="flex space-x-3 mt-2">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => handleColorChange(color.class)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${color.class} ${
                    selectedColor === color.class ? "ring-4 ring-blue-500" : ""
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Size Family:</h3>
            <div className="flex space-x-4 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`px-4 py-2 rounded border text-sm font-medium transition ${
                    selectedSize === size
                      ? "bg-[#b0b35d] text-white border-[#b0b35d]"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={navigate}
              className="items-center bg-black text-white text-sm md:text-lg font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Buy to Cart
            </button>

            <button
              onClick={() =>
                addToWishlist({
                  id: result.id,
                  heading: result.heading,
                  price: parseFloat(result.price.discountedPrice), // Ensure price is a number
                  image: urlFor(result.image).url(),
                  selectedColor: selectedColor,
                  selectedSize: selectedSize,
                })
              }
              className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <CiHeart className="text-gray-600 w-7 h-7" />
            </button>

            <button
              onClick={() =>
                addToCart({
                  id: result.id,
                  heading: result.heading,
                  price: parseFloat(result.price.discountedPrice), // Ensure price is a number
                  image: urlFor(result.image).url(),
                  quantity: 1,
                  selectedColor: selectedColor,
                  selectedSize: selectedSize,
                })
              }
              className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <IoCartOutline className="text-gray-600 w-7 h-7" />
            </button>

            <button
              onClick={openModal}
              title="View Image"
              className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <FaEye className="text-gray-600 w-7 h-7" />
            </button>
            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-4 rounded-lg relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                  <Image
                    src={urlFor(result.image).url()}
                    alt={result.heading}
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <p
        className={`${montserrat.className} mt-10 text-center text-3xl font-semibold text-gray-800`}
      >
        Related Products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCards
            key={product.id}
            detailsLink={`/products/${product.id}`}
            image={urlFor(product.image).url()}
            alt={product.heading}
            heading={product.heading}
            department={product.subheading}
            originalPrice={`$${product.price.originalPrice}`}
            discountedPrice={`$${product.price.discountedPrice}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
