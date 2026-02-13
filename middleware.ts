// // // 
// // import { NextResponse } from 'next/server'
// // import createMiddleware from 'next-intl/middleware'
// // import { routing } from './i18n/routing'

// // const publicPages = [
// //   '/',
// //   '/search',
// //   '/sign-in',
// //   '/sign-up',
// //   '/cart',
// //   '/product/(.*)',
// //   '/page/(.*)',
// // ]

// // const intlMiddleware = createMiddleware(routing)

// // export function middleware(req: any) {
// //   const pathname = req.nextUrl.pathname

// //   // public page হলে next
// //   const isPublic = publicPages.some((p) => new RegExp(`^${p}$`).test(pathname))
// //   if (isPublic) return intlMiddleware(req)

// //   // logged in না হলে sign-in page এ redirect
// //   if (!req.auth) {
// //     const signInUrl = new URL(`/sign-in?callbackUrl=${encodeURIComponent(pathname)}`, req.nextUrl.origin)
// //     return NextResponse.redirect(signInUrl)
// //   }

// //   // logged in হলে i18n middleware চালাও
// //   return intlMiddleware(req)
// // }

// // export const config = {
// //   matcher: ['/((?!api|_next|.*\\..*).*)'],
// // }

// // import createMiddleware from 'next-intl/middleware'
// // import { routing } from './i18n/routing'

// // import NextAuth from 'next-auth'
// // import authConfig from './auth.config'

// // const publicPages = [
// //   '/',
// //   '/search',
// //   '/sign-in',
// //   '/sign-up',
// //   '/cart',
// //   '/cart/(.*)',
// //   '/product/(.*)',
// //   '/page/(.*)',
// //   // (/secret requires auth)
// // ]

// // const intlMiddleware = createMiddleware(routing)
// // const { auth } = NextAuth(authConfig)

// // export default auth((req) => {
// //   const publicPathnameRegex = RegExp(
// //     `^(/(${routing.locales.join('|')}))?(${publicPages
// //       .flatMap((p) => (p === '/' ? ['', '/'] : p))
// //       .join('|')})/?$`,
// //     'i'
// //   )
// //   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

// //   if (isPublicPage) {
// //     // return NextResponse.next()
// //     return intlMiddleware(req)
// //   } else {
// //     if (!req.auth) {
// //       const newUrl = new URL(
// //         `/sign-in?callbackUrl=${encodeURIComponent(req.nextUrl.pathname) || '/'
// //         }`,
// //         req.nextUrl.origin
// //       )
// //       return Response.redirect(newUrl)
// //     } else {
// //       return intlMiddleware(req)
// //     }
// //   }
// // })

// // export const config = {
// //   // Skip all paths that should not be internationalized
// //   matcher: ['/((?!api|_next|.*\\..*).*)'],
// // }
// import createMiddleware from 'next-intl/middleware'
// import { routing } from './i18n/routing'
// import NextAuth from 'next-auth'
// import authConfig from './auth.config'

// const publicPages = [
//   '/',
//   '/search',
//   '/sign-in',
//   '/sign-up',
//   '/cart',
//   '/cart/(.*)',
//   '/product/(.*)',
//   '/page/(.*)',
// ]

// const intlMiddleware = createMiddleware(routing)
// const { auth } = NextAuth(authConfig)

// export default auth((req) => {
//   const publicPathnameRegex = new RegExp(
//     `^(/(${routing.locales.join('|')}))?(${publicPages
//       .flatMap((p) => (p === '/' ? ['', '/'] : p))
//       .join('|')})/?$`,
//     'i'
//   )

//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

//   if (isPublicPage) {
//     return intlMiddleware(req)
//   }

//   if (!req.auth) {
//     const url = new URL(
//       `/sign-in?callbackUrl=${encodeURIComponent(req.nextUrl.pathname)}`,
//       req.nextUrl.origin
//     )
//     return Response.redirect(url)
//   }

//   return intlMiddleware(req)
// })

// /**
//  * 🔥 THIS IS THE MOST IMPORTANT PART
//  */
// export const config = {
//   matcher: [
//     '/((?!api|_next|images|icons|favicon.ico|.*\\..*).*)',
//   ],
// // }
// import { NextResponse } from 'next/server'
// import createMiddleware from 'next-intl/middleware'
// import { routing } from './i18n/routing'
// import { getToken } from 'next-auth/jwt'

// const intlMiddleware = createMiddleware(routing)

// const publicPages = [
//   '/',
//   '/search',
//   '/sign-in',
//   '/sign-up',
//   '/cart',
//   '/cart/(.*)',
//   '/product/(.*)',
//   '/page/(.*)',
// ]

// export async function middleware(req: any) {
//   const pathname = req.nextUrl.pathname

//   // 🌍 locale handle
//   const isPublic = new RegExp(
//     `^(/(${routing.locales.join('|')}))?(${publicPages.join('|')})/?$`,
//     'i'
//   ).test(pathname)

//   if (isPublic) {
//     return intlMiddleware(req)
//   }

//   // 🔐 auth check (manual)
//   const token = await getToken({
//     req,
//     secret: process.env.AUTH_SECRET,
//   })

//   if (!token) {
//     const url = new URL(
//       `/sign-in?callbackUrl=${encodeURIComponent(pathname)}`,
//       req.nextUrl.origin
//     )
//     return NextResponse.redirect(url)
//   }

//   return intlMiddleware(req)
// }

// export const config = {
//   matcher: ['/((?!api|_next|images|icons|favicon.ico|.*\\..*).*)'],
// }



//last




// import { NextResponse } from 'next/server'
// import createMiddleware from 'next-intl/middleware'
// import { routing } from './i18n/routing'
// import { getToken } from 'next-auth/jwt'

// const intlMiddleware = createMiddleware(routing)

// const publicPages = [
//   '/',
//   '/search',
//   '/sign-in',
//   '/sign-up',
//   '/cart',
//   '/product',
//   '/page',
// ]

// export async function middleware(req: any) {
//   const pathname = req.nextUrl.pathname

//   // check if public page
//   const isPublic = publicPages.some(page => pathname.startsWith(page))

//   if (isPublic) return intlMiddleware(req)

//   // auth check
//   const token = await getToken({ req, secret: process.env.AUTH_SECRET })
//   if (!token) {
//     return NextResponse.redirect(
//       `/sign-in?callbackUrl=${encodeURIComponent(pathname)}`
//     )
//   }

//   return intlMiddleware(req)
// }

// export const config = {
//   matcher: ['/((?!api|_next|images|favicon.ico).*)'],
// }


import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

import NextAuth from 'next-auth'
import authConfig from './auth.config'

const publicPages = [
  '/',
  '/search',
  '/sign-in',
  '/sign-up',
  '/cart',
  '/cart/(.*)',
  '/product/(.*)',
  '/page/(.*)',
  // (/secret requires auth)
]

const intlMiddleware = createMiddleware(routing)
const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    // return NextResponse.next()
    return intlMiddleware(req)
  } else {
    if (!req.auth) {
      const newUrl = new URL(
        `/sign-in?callbackUrl=${encodeURIComponent(req.nextUrl.pathname) || '/'
        }`,
        req.nextUrl.origin
      )
      return Response.redirect(newUrl)
    } else {
      return intlMiddleware(req)
    }
  }
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}