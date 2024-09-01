import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = await fetch(new URL(request.nextUrl.pathname, request.url));

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("text/html")) {
    return response;
  }
  const originalBody = await response.text();

  const modifiedBody = originalBody.replace(
    /(?<!<div class="nomerci">)\s*<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>\s*(?!<\/div>)/gi,
    (match) => `<div class="nomerci">${match}</div>`
  );
  return new Response(modifiedBody, {
    status: response.status,
    headers: { ...response.headers, "content-type": "text/html" },
  });
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
