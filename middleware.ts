// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
//   console.log('Token:', token);  // Log the token to see if it's being fetched correctly

//   if (!token) {
//     // Redirect to sign-in page if no token is found
//     return NextResponse.redirect(new URL("/auth/signin", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/"],  // Match dynamic routes as well
// };
