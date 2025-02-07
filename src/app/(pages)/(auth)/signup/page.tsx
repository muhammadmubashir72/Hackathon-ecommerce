"use client";
import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.warn("⚠️ Please fill in all fields.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warn("⚠️ Please enter a valid email.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    if (password.length < 6) {
      toast.warn("⚠️ Password should be at least 6 characters.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    if (password !== confirmPassword) {
      toast.warn("⚠️ Passwords do not match.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      username: name,
      email,
      password,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error === "User already exists") {
          toast.warn(
            "⚠️ An account with this email already exists! Try logging in."
          );
        } else {
          toast.warn(
            "⚠️ An account with this email already exists! Try logging in."
          );
          // toast.error("❌ Error: " + result.error);
        }
        return;
      }

      toast.success("✅ Account created successfully! 🎉");
      router.push("/signin");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("❌ Something went wrong. Please try again later.");
    }
  };

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      const result = await signIn(provider, { callbackUrl: "/" });

      if (result?.error) {
        toast.error(`❌ ${provider.toUpperCase()} Sign-In Failed!`);
      } else {
        toast.success(
          `✅ Signed in with ${provider.toUpperCase()} successfully!`
        );
      }
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      toast.error(`❌ ${provider.toUpperCase()} Sign-In Error!`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-300">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-myDark">
            Create an Account
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Join Bandage Online Shopping today!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mb-6 border border-gray-300 p-4 rounded-lg"
        >
          <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
            <AiOutlineUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none p-2 w-full"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
            <AiOutlineMail className="text-gray-500 mr-2" />
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
          <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
            <FiLock className="text-gray-500 mr-2" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="outline-none p-2 w-full"
              maxLength={12}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-gray-500 ml-2"
            >
              {showConfirmPassword ? (
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
            Sign Up
          </button>
        </form>

        <div className="flex justify-center items-center mb-4">
          <div className="border-t border-gray-300 w-[40%]" />
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t border-gray-300 w-[40%]" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          <button
            onClick={() => handleSignIn("github")}
            className="px-6 sm:px-10 w-full sm:w-[350px] h-10 sm:h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
          >
            <FaGithub className="text-lg sm:text-xl" />
            <span className="text-myDark font-semibold">GitHub</span>
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className="px-6 sm:px-10 w-full sm:w-[400px] md:w-[550px] h-10 sm:h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
          >
            <FaGoogle className="text-lg sm:text-xl" />
            <span className="text-myDark font-semibold">Google</span>
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

//--------------------------- deepseek

// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FaGoogle, FaGithub } from "react-icons/fa";
// import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
// import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
// import { signIn } from "next-auth/react";

// export default function SignUp() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// // signup/page.tsx
// const handleSignup = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (password !== confirmPassword) {
//     alert("Passwords do not match!");
//     return;
//   }

//   console.log("Submitting signup data:", { name, email, password });

//   const res = await fetch("/api/signup", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, password }),
//   });

//   if (res.ok) {
//     alert("Signup successful! You can log in now.");
//     router.push("/signin");
//   } else {
//     const errorData = await res.json();
//     console.error("Signup failed:", errorData);
//     alert("Signup failed: " + errorData.error);
//   }
// };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
//       <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-300">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-semibold text-myDark">Create an Account</h1>
//           <p className="text-gray-600 text-sm mt-2">
//             Join Bandage Online Shopping today!
//           </p>
//         </div>

//         <form
//           onSubmit={handleSignup}
//           className="flex flex-col justify-center items-center gap-3 mb-6 border border-gray-300 p-4 rounded-lg"
//         >
//           <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
//             <AiOutlineUser className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="outline-none p-2 w-full"
//             />
//           </div>
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
//               {showPassword ? <FiEye className="text-xl" /> : <FiEyeOff className="text-xl" />}
//             </button>
//           </div>
//           <div className="flex items-center border-b-2 border-gray-300 w-full mb-4">
//             <FiLock className="text-gray-500 mr-2" />
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="outline-none p-2 w-full"
//               maxLength={12}
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="text-gray-500 ml-2"
//             >
//               {showConfirmPassword ? <FiEye className="text-xl" /> : <FiEyeOff className="text-xl" />}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="bg-myBlue text-white font-bold p-2 rounded-lg hover:bg-myBlue/90 transition duration-300 w-full mt-4"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="flex justify-center items-center mb-4">
//           <div className="border-t border-gray-300 w-[40%]" />
//           <span className="mx-2 text-gray-500">or</span>
//           <div className="border-t border-gray-300 w-[40%]" />
//         </div>

//         <div className="flex justify-center items-center gap-3">
//           <button
//             onClick={() => signIn("github")}
//             className="px-10 w-full max-w-[350px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//           >
//             <FaGithub className="text-xl" />
//             <span className="text-myDark font-semibold">GitHub</span>
//           </button>
//           <button
//             onClick={() => signIn("google")}
//             className="px-10 w-full max-w-[550px] h-9 rounded-lg border border-myBlueImage flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all ease-in-out duration-300"
//           >
//             <FaGoogle className="text-xl" />
//             <span className="text-myDark font-semibold">Google</span>
//           </button>
//         </div>

//         <div className="text-center mt-4">
//           <p className="text-sm">
//             Already have an account?{" "}
//             <a href="/signin" className="text-blue-500 hover:underline">
//               Sign in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// ---------------------------------------
// import Image from "next/image";
// import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

// export default function Signup() {
//   return (
//     <div className="mt-4 flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
//       <div className="flex w-full max-w-4xl shadow-lg bg-white rounded-lg">
//         {/* Left Side: Image */}
//         <div className="w-1/2 hidden md:block">
//           <Image
//             width={300}
//             height={300}
//             src="/register/a.jpg"
//             alt="Register"
//             className="w-full h-full object-cover rounded-l-lg"
//           />
//         </div>

//         {/* Right Side: Registration Form */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//             Create an Account
//           </h2>
//           <form>
//             {/* Full Name */}
//             <div className="mb-4">
//               <label
//                 htmlFor="fullName"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your full name"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Create a password"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div className="mb-4">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//                 placeholder="Re-enter your password"
//               />
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
//             >
//               Register
//             </button>
//           </form>

//           {/* Social Login */}
//           <div className="text-center mt-6">
//             <p className="text-sm text-gray-600 mb-4">Or register with</p>
//             <div className="flex justify-center gap-4">
//               <button className="flex items-center justify-center bg-red-500 text-white py-3 px-3 rounded-full hover:bg-red-600 transition duration-200">
//                 <FaGoogle size={24} />
//               </button>
//               <button className="flex items-center justify-center bg-blue-700 text-white py-3 px-3 rounded-full hover:bg-blue-800 transition duration-200">
//                 <FaFacebook size={24} />
//               </button>
//               <button className="flex items-center justify-center bg-gray-800 text-white py-3 px-3 rounded-full hover:bg-gray-900 transition duration-200">
//                 <FaGithub size={24} />
//               </button>
//             </div>
//           </div>

//           {/* Redirect to Login */}
//           <div className="text-center mt-4">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <a href="/login" className="text-green-500 hover:underline">
//                 Login here
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
