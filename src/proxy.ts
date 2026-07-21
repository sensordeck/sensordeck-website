import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-sensordeck-pathname", pathname);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Redirect to default locale for root path
  if (pathname === "/") {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Redirect other paths to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip API routes, Next.js internals, and public files with extensions.
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
