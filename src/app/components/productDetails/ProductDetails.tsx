"use client";
import { useCart } from '@/app/cart/context/CartContext';
import { client } from '@/sanity/lib/client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Montserrat } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import { CiHeart } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface IProducts {
    id: string;
    heading: string;
    subheading: string;
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    price: {
        originalPrice: string;
        discountedPrice: string;
    };
}

const ProductDetails = ({productId}:{productId:string}) => {
    const [result, setResult] = useState({} as IProducts);
    const [selectedColor, setSelectedColor] = useState<string>("");
    const { addToCart } = useCart(); // Use the Cart Context

    // Array of colors to use
    const colors = [
        { name: "blue", class: "bg-myBlue" },
        { name: "green", class: "bg-myDarkGreen" },
        { name: "orange", class: "bg-myOrange" },
        { name: "dark", class: "bg-myDark" },
    ];

    const handleColorChange = (colorClass: string) => {
        setSelectedColor(colorClass);
    };

    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await client.fetch(`*[_type == "product" || _type == "shop" || _type == "seller"]{
                id,
                heading,
                subheading,
                image,
                price{
                    originalPrice,
                    discountedPrice
                },
            }`);

            console.log("Fetched Data:", data);
            const product = data.find((item: IProducts) => item.id === productId);
            setResult(product || null);
        };

        fetchProductDetails();
    }, [productId]);

    if (!result) {
        return <p>Loading...</p>;
    }

    if (!result.id) {
        return <p>Product not found</p>;
    }

    return (
        <div className="p-8 hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src={result.image?.asset ? urlFor(result.image.asset).url() : "/placeholder.png"}
                        alt={`Main Image ${result.heading || "Product"}`}
                        className="w-full h-auto lg:w-[450px] lg:h-[500px] object-contain rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
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
                    <h2
                        className={`${montserrat.className} text-lg font-medium text-gray-600`}
                    >
                        {result.subheading}
                    </h2>

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

                        <span className="line-through text-gray-500 text-lg">
                            ${result.price.originalPrice}
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-600">Availability:</span>
                        <span className="text-green-600">In Stock</span>
                    </div>

                    <p className="text-gray-500 pr-20">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequent door ENIM RELIT Mollie.
                    </p>

                    {/* Color Selector */}
                    <div className="flex space-x-3">
                        {colors.map((color) => (
                            <div
                                key={color.name}
                                onClick={() => handleColorChange(color.class)}
                                className={`w-8 h-8 rounded-full cursor-pointer ${color.class} ${selectedColor === color.class ? "ring-4 ring-myBlue" : ""
                                    }`}
                                title={color.name}
                            />
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row space-x-4 pt-4">
                        <button className="px-6 py-3 bg-myBlue text-white rounded hover:bg-blue-600 transition">
                            Select Options
                        </button>
                        <button className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
                            <CiHeart className="text-gray-600" />
                        </button>
                        <button
                            onClick={() =>
                                addToCart({
                                    id: result.id,
                                    heading: result.heading,
                                    price: parseFloat(result.price.discountedPrice), // Ensure price is a number
                                    image: urlFor(result.image).url(),
                                    quantity: 1, // Default quantity
                                })
                            }
                            // onClick={handleAddToCart}
                            className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                            <IoCartOutline className="text-gray-600" />
                        </button>
                        <button className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
                            <FaEye className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails