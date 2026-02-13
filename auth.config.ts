// // 

// import type { NextAuthConfig } from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'

// export default {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     // এখানে চাইলে আরও providers যোগ করতে পারো
//   ],
//   trustHost: true, // ✅ UntrustedHost error fix

//   callbacks: {
//     authorized({ request, auth }: any) {
//       const protectedPaths = [
//         /^\/checkout(\/.*)?$/,
//         /^\/account(\/.*)?$/,
//         /^\/admin(\/.*)?$/,
//       ]
//       const pathname = request.nextUrl.pathname

//       // protected path হলে session থাকা লাগবে
//       if (protectedPaths.some((p) => p.test(pathname))) return !!auth

//       // অন্য path সব public
//       return true
//     },
//   },
// } satisfies NextAuthConfig


// import type { NextAuthConfig } from 'next-auth'

// // Notice this is only an object, not a full Auth.js instance
// export default {
//   providers: [],
//   trustHost: true, // ✅ UntrustedHost error fix

//   callbacks: {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     authorized({ request, auth }: any) {
//       const protectedPaths = [
//         /\/checkout(\/.*)?/,
//         /\/account(\/.*)?/,
//         /\/admin(\/.*)?/,
//       ]
//       const { pathname } = request.nextUrl
//       if (protectedPaths.some((p) => p.test(pathname))) return !!auth
//       return true
//     },
//   },
// // } satisfies NextAuthConfig



//last



// import type { NextAuthConfig } from 'next-auth'

// export default {
//   providers: [],
//   trustHost: true,
//   secret: process.env.AUTH_SECRET, // 🔑 এটা অবশ্যই থাকবে
// } satisfies NextAuthConfig


import type { NextAuthConfig } from 'next-auth'

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorized({ request, auth }: any) {
      const protectedPaths = [
        /\/checkout(\/.*)?/,
        /\/account(\/.*)?/,
        /\/admin(\/.*)?/,
      ]
      const { pathname } = request.nextUrl
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth
      return true
    },
  },
} satisfies NextAuthConfig