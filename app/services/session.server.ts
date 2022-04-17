import { createCookieSessionStorage } from "@remix-run/node";

if (process.env.AUTH_SECRET == null) {
  throw new Error('Missing AUTH_SECRET');
}

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.AUTH_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;
