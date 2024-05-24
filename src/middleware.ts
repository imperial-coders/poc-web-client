import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const { auth } = req;
  console.log("🚀 ~ auth:", auth);
  if (!auth?.user?.id) {
    // invalid user, redirect
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|sign-in).*)"],
};
