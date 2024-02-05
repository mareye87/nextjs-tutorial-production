import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

//here configure on which routes middleware will be triggered
// you can restrict access to some routes and redirect user back to homepage
export const config = {
  // indicate about
  //     matcher: "/about",
  // indicate all paths after 'about', and 'tasks'
  //     matcher: ["/about/:path*", "/tasks/:path*"],
  matcher: ["/about/:path*"],
};
