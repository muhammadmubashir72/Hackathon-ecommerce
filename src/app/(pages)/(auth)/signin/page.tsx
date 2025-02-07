"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Loader from "../../(public)/Loader3D/Loader";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false); 

  const validateForm = () => {
    if (!email || !password) {
      toast.error("Both fields are required!");
      setEmail("");    
      setPassword(""); 
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setEmail("");    
      setPassword(""); 
      return false;
    }
  
    return true;
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    setLoading(true); // Show loader when sign-in starts

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      setLoading(false); // Hide loader after sign-in completes
  
      if (res?.error) {
        if (res.error === "Invalid credentials") {
          toast.error("Invalid email or password. Please try again.");
        } else {
          toast.error("Invalid email or password. Please try again.");     
          // toast.error("An unexpected error occurred. Please try again later.");
        }
        setEmail("");   
        setPassword("") ;
      } else {
        toast.success("Sign-In successful!");
        router.push("/");
      }
    } catch (error) {
      console.error("SignIn error:", error);
      setLoading(false); // Hide loader after error
      toast.error("An error occurred during sign-in. Please try again later.");
      setEmail("");   
      setPassword("");
    }
  };

  const handleSign = async (provider: "github" | "google") => {
    try {
      const res = await signIn(provider, { callbackUrl: "/" });
  
      if (res?.error) {
        toast.error(`${provider.charAt(0).toUpperCase() + provider.slice(1)} sign-in failed. Please try again.`);
      } else {
        toast.success(`${provider.charAt(0).toUpperCase() + provider.slice(1)} sign-in successful!`);
      }
    } catch (error) {
      console.error(`${provider} SignIn error:`, error);
      toast.error(`${provider.charAt(0).toUpperCase() + provider.slice(1)} sign-in failed. Please try again.`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-300">
        {/* Show loader when loading is true */}
        {loading && <Loader />}
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-myDark">Sign In</h1>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back to Bandage Online Shopping!
          </p>
        </div>

        <form
          onSubmit={handleSignIn}
          className="flex flex-col justify-center items-center gap-3 mb-6 border border-gray-300 p-4 rounded-lg"
        >
          <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none p-2 w-full"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
            <FiLock className="text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none p-2 w-full"
              maxLength={12}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 ml-2"
            >
              {showPassword ? (
                <FiEye className="text-xl" />
              ) : (
                <FiEyeOff className="text-xl" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-myBlue text-white font-bold p-2 rounded-lg hover:bg-myBlue/90 transition duration-300 w-full mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-center items-center mb-4">
          <div className="border-t border-gray-300 w-[40%]" />
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t border-gray-300 w-[40%]" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          <button
            onClick={() => handleSign("github")}
            className="px-6 sm:px-10 w-full sm:w-[350px] h-10 sm:h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
          >
            <FaGithub className="text-lg sm:text-xl" />
            <span className="text-myDark font-semibold">GitHub</span>
          </button>
          <button
            onClick={() => handleSign("google")}
            className="px-6 sm:px-10 w-full sm:w-[400px] md:w-[550px] h-10 sm:h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
          >
            <FaGoogle className="text-lg sm:text-xl" />
            <span className="text-myDark font-semibold">Google</span>
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaGoogle, FaGithub } from "react-icons/fa"; // Google and GitHub icons
// import { AiOutlineMail } from "react-icons/ai"; // Email icon
// import { FiLock, FiEye, FiEyeOff } from "react-icons/fi"; // Lock icon and Eye icons

// export default function SignIn() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirect = searchParams.get("redirect") || "/cart"; // Default redirect after sign-in
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (session) {
//       router.replace(redirect);
//     }
//   }, [session, redirect, router]);

//   if (status === "loading") {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Email sign-in logic here");
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("cart");
//   };

//   const handleGoogleSignIn = () => {
//     signIn("google");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//       <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-300">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-semibold text-myDark">
//             Sign In Bandage online Shopping
//           </h1>
//           <p className="text-gray-600 text-sm mt-2">
//             Your go-to platform for seamless sign-in
//           </p>
//         </div>

//         {/* Sign-In Form */}
//         <form
//           onSubmit={handleEmailSignIn}
//           className="flex flex-col justify-center items-center gap-3 mb-6 border border-gray-300 p-4 rounded-lg"
//         >
//           <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
//             <AiOutlineMail className="text-gray-500 mr-2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="outline-none p-2 w-full"
//             />
//           </div>
//           <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
//             <FiLock className="text-gray-500 mr-2" />
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="outline-none p-2 w-full"
//               maxLength={12}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-500 ml-2"
//             >
//               {showPassword ? (
//                 <FiEye className="text-xl" />
//               ) : (
//                 <FiEyeOff className="text-xl" />
//               )}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="bg-myBlue text-white font-bold p-2 rounded-lg hover:bg-myBlue/90 transition duration-300 w-full mt-4"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="flex justify-center items-center mb-4">
//           <div className="border-t border-gray-300 w-[40%]" />
//           <span className="mx-2 text-gray-500">or</span>
//           <div className="border-t border-gray-300 w-[40%]" />
//         </div>

//         {/* GitHub/Google Sign-In Buttons */}
//         <div className="flex justify-center items-center gap-3">
//           <form onSubmit={() => signIn("github")}>
//             <button
//               type="submit"
//               className="px-10 w-full max-w-[350px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//             >
//               <FaGithub className="text-xl" />
//               <span className="text-myDark font-semibold">GitHub</span>
//             </button>
//           </form>
//           <button
//             onClick={handleGoogleSignIn}
//             type="button"
//             className="px-10 w-full max-w-[550px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//           >
//             <FaGoogle className="text-xl" />
//             <span className="text-myDark font-semibold">Google</span>
//           </button>
//         </div>

//         {/* Forgot Password & Sign Up Links */}
//         <div className="text-center mt-4">
//           <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
//             Forgot Password?
//           </a>
//           <p className="text-sm mt-2">
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-blue-500 hover:underline">
//               Sign up
//             </a>
//           </p>
//         </div>

//         {/* Log Out Button */}
//         {session && (
//           <div className="mt-4 text-center">
//             <button
//               onClick={handleSignOut}
//               className="bg-myRed text-white font-bold p-2 rounded-lg hover:bg-myRed/90 transition duration-300 w-full"
//             >
//               Log Out
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// ------------------------------------------------------------------

// "use client";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaGoogle, FaGithub } from "react-icons/fa"; // Importing Google and GitHub icons
// import { AiOutlineMail } from "react-icons/ai"; // Email icon
// import { FiLock, FiEye, FiEyeOff } from "react-icons/fi"; // Lock icon and Eye icons

// export default function SignIn() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirect = searchParams.get("redirect") || "/cart"; // Default redirect to cart page after sign-in
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // Redirect user to the specified page (like cart) after signing in, or show sign-in page if logged out
//   useEffect(() => {
//     if (session) {
//       router.replace(redirect); // Redirect to cart or specified page after successful login
//     }
//   }, [session, redirect, router]);

//   if (status === "loading") {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Logic for email and password sign-in (you may need to handle it with NextAuth or a custom API)
//     alert("Email sign-in logic here");
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("cart");
//     // Proceed with the sign-out logic
//   };

//   const handleGoogleSignIn = () => {
//     signIn("google"); // Trigger Google sign-in manually
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//       <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-300">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-semibold text-myDark">
//             Sign In Bandage online Shopping
//           </h1>
//           <p className="text-gray-600 text-sm mt-2">
//             Your go-to platform for seamless sign-in
//           </p>
//         </div>

//         {/* Sign-In Form */}
//         <form
//           onSubmit={handleEmailSignIn}
//           className="flex flex-col justify-center items-center gap-3 mb-6 border border-gray-300 p-4 rounded-lg"
//         >
//           <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
//             <AiOutlineMail className="text-gray-500 mr-2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="outline-none p-2 w-full"
//             />
//           </div>
//           <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
//             <FiLock className="text-gray-500 mr-2" />
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="outline-none p-2 w-full"
//               maxLength={12} // Limit the input to 12 characters
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-500 ml-2"
//             >
//               {showPassword ? (
//                 <FiEye className="text-xl" />
//               ) : (
//                 <FiEyeOff className="text-xl" />
//               )}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="bg-myBlue text-white font-bold p-2 rounded-lg hover:bg-myBlue/90 transition duration-300 w-full mt-4"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="flex justify-center items-center mb-4">
//           <div className="border-t border-gray-300 w-[40%]" />
//           <span className="mx-2 text-gray-500">or</span>
//           <div className="border-t border-gray-300 w-[40%]" />
//         </div>

//         {/* GitHub/Google SignIn Buttons */}
//         <div className="flex justify-center items-center gap-3">
//           <form onSubmit={() => signIn("github")}>
//             <button
//               type="submit"
//               className="px-10 w-full max-w-[350px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//             >
//               <FaGithub className="text-xl" />
//               <span className="text-myDark font-semibold">GitHub</span>
//             </button>
//           </form>
//           <button
//             onClick={handleGoogleSignIn}
//             type="button"
//             className="px-10 w-full max-w-[550px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//           >
//             <FaGoogle className="text-xl" />
//             <span className="text-myDark font-semibold">Google</span>
//           </button>
//         </div>

//         {/* Log Out Button */}
//         {session && (
//           <div className="mt-4 text-center">
//             <button
//               onClick={handleSignOut}
//               className="bg-myRed text-white font-bold p-2 rounded-lg hover:bg-myRed/90 transition duration-300 w-full"
//             >
//               Log Out
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// --------------------------------------right code upper-----------------
// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect } from "react";

// export default function AuthPage() {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirect = searchParams.get("redirect"); // Get redirect param

//   useEffect(() => {
//     if (session) {
//       router.push(redirect ? decodeURIComponent(redirect) : "/cart"); // Redirect to given path or "/dashboard"
//     }
//   }, [session, redirect, router]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-2xl font-bold mb-4">
//         {session ? `Welcome, ${session.user?.name}` : "Sign in to Continue"}
//       </h1>

//       {session ? (
//         <button
//           onClick={() => signOut({ callbackUrl: "/" })} // Redirects to home after sign-out
//           className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
//         >
//           Sign Out
//         </button>
//       ) : (
//         <button
//           onClick={() => signIn("google", { callbackUrl: redirect ? decodeURIComponent(redirect) : "/dashboard" })}
//           className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//         >
//           Sign in with Google
//         </button>
//       )}
//     </div>
//   );
// }
// -----------------------------------------------------------------------
// import React from "react";
// import { signOut, signIn, auth } from "@/auth";
// import { FaGithub } from "react-icons/fa6";
// import Image from "next/image";
// import { FaGoogle } from "react-icons/fa";

// export default async function userprofile() {
//   const session = await auth();

//   console.log(session);
//   const user = session?.user;
//   return user ? (
//     <div className="px-6 py-6 lg:py-12 flex justify-center items-center min-h-screen bg-blue-50">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
//         <h1 className="text-center text-2xl lg:text-3xl font-bold text-black">
//           User Information
//         </h1>
//         <div className="lg:flex lg:gap-[40px] justify-between items-start mt-6">
//           {/* Left Section (Account, Profile, Security) */}
//           <div className="lg:w-3/5 flex flex-col">
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold">Account</h2>
//               <p className="text-sm text-gray-600">Manage your account info.</p>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-lg font-semibold">Profile</h2>
//                           </div>

//             <div className="mb-6">
//               <h2 className="text-lg font-semibold">Security</h2>
//               <ul className="space-y-2 mt-4">
//                 <li className="text-gray-700 cursor-pointer">Delete Account</li>
//                 <form
//                   action={async () => {
//                     "use server";
//                     await signOut();
//                   }}
//                 >
//                   <button type="submit" className="text-red-600 cursor-pointer">
//                     Sign Out
//                   </button>
//                 </form>
//               </ul>
//             </div>
//           </div>

//           {/* Right Section (Profile Details) */}
//           <div className="lg:w-11/12 mt-6 lg:mt-0">
//             <div className="flex items-center mb-6">
//               <div className="mr-6">
//                 <Image
//                   src={session?.user?.image || ""}
//                   alt="userimg"
//                   width={120}
//                   height={120}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
//                 <p className="text-sm text-gray-600">{session?.user?.email}</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-lg font-semibold mb-4">Connected Accounts</h2>
//               <div className="flex justify-start space-x-6">
//                 <h4 className="text-gray-700 cursor-pointer">GitHub</h4>
//                 <h4 className="text-gray-700 cursor-pointer">Google</h4>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//       <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-semibold text-myDark">
//             Sign In Bandage online Shopping
//           </h1>
//           <p className="text-gray-600 text-sm mt-2">
//             Your go-to platform for seamless sign-in
//           </p>
//         </div>

//         {/* Sign-In Form */}
//         <div className="flex flex-col justify-center items-center gap-3 mb-6">
//           <input
//             type="email"
//             placeholder="Email"
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myDark w-full"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myDark w-full"
//           />
//           <button
//             type="submit"
//             className="bg-myBlue text-white font-bold p-2 rounded-lg hover:bg-myBlue/90 transition duration-300 w-full mt-4"
//           >
//             Log In
//           </button>
//         </div>

//         <div className="flex justify-center items-center mb-4">
//           <div className="border-t border-gray-300 w-[40%]" />
//           <span className="mx-2 text-gray-500">or</span>
//           <div className="border-t border-gray-300 w-[40%]" />
//         </div>

//         {/* GitHub/Google SignIn Buttons */}
//         <div className="flex justify-center items-center gap-3">
//           <form
//             action={async () => {
//               "use server";
//               await signIn("github");
//             }}
//           >
//             <button
//               type="submit"
//               className="px-10 w-full max-w-[350px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//             >
//               <FaGithub className="text-xl" />
//               <span className="text-myDark font-semibold">GitHub</span>
//             </button>
//           </form>

//           <form
//             action={async () => {
//               "use server";
//               await signIn("google");
//             }}
//           >
//             <button
//               type="submit"
//               className="px-10 w-full max-w-[550px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//             >
//               <FaGoogle className="text-xl" />
//               <span className="text-myDark font-semibold">Google</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
