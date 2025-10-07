import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Map hostnames to the path you want to serve
// Example: admin.your-domain.com -> /admin (served from app/admin/page.tsx)
const HOSTNAME_TO_PATH: Record<string, string> = {
  "www.your-domain.com": "/",
  "app.your-domain.com": "/app",
  "admin.your-domain.com": "/admin",
  // Helpful for local testing: send localhost to an existing route

  "apple.localhost": "/careerpages",
  "apple": "/careerpages",
  "127.0.0.1": "/testing",
  "lucres": "/careerpages",  //Testing Purpose Assume as company
  "bonageri":  "/",   //Tesing purpose Assume as lucres.com
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Prefer x-forwarded-host on proxies (e.g. Vercel), fall back to host
  const headerHost =
    request.headers.get("x-forwarded-host") || request.headers.get("host") || url.hostname;

  const hostname = headerHost.split(":")[0]?.toLowerCase().split(".");
    console.log("HOSTNAME", hostname[1]);
  const targetPath = HOSTNAME_TO_PATH[hostname[1]];
  if (targetPath) {
    // Only rewrite from the site root to avoid catching static assets or nested routes
    if (url.pathname === "/") {
      url.pathname = targetPath;
      return NextResponse.redirect(url);
      // If you want the location bar to change, use redirect instead:
      // return NextResponse.redirect(url, 307);
    }
  }

  return NextResponse.next();
}

// Exclude static assets and API routes from middleware
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};


