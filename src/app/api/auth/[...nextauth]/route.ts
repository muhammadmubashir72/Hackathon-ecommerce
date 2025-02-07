
import NextAuth from "next-auth";
import { authOptions } from "@/auth";

// Explicitly type the handler to avoid any conflicts
const handler = NextAuth(authOptions);

// Ensure the handler works with GET and POST by manually typing it
export const GET = handler;
export const POST = handler;
