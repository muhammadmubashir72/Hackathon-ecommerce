"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../Loader3D/Loader";
import UserProfile from "@/app/components/UserCompoent/ProfileCompoent";

const User = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Check if session data is available
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.push("/signin");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <Loader />;
  }

  if (!session) {
    return <div><Loader /></div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <UserProfile
          name={session.user?.name || "Guest"} // Dynamic name from session
          username={session.user?.email?.split('@')[0] || "username"} // Username from email
          email={session.user?.email || "user@example.com"} // Dynamic email from session
          profilePicture={session.user?.image || "/user/user-profile.avif"} // Dynamic profile picture
          bio="Software engineer, tech enthusiast, and open-source contributor."
          location="Karachi"
          followers={3000}
          following={300}
          orderHistory={[ 
            { 
              orderId: "ORD12345", 
              date: "2025-01-01", 
              total: 99.99, 
              status: "Delivered", 
            },
            {
              orderId: "ORD67890",
              date: "2025-01-15",
              total: 49.99,
              status: "In Transit",
            }
          ]}
        />
      </div>
    </div>
  );
};

export default User;
