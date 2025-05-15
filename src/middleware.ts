/* 
import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server"

const publicRoutes = [
    {path: '/', whenAuthenticated: 'next'},
    {path: '/login', whenAuthenticated: 'redirect'},
] as const

const REDIRECT_WHEN_UNAUTHORIZED = '/login'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('next-auth.session-token')

     // Ignorar arquivos de imagem e JSON diretamente no middleware
     if (/\.(png|jpg|jpeg|gif|webp|svg|ico|json)$/i.test(path)) {
        return NextResponse.next();
    }

    if(!authToken && publicRoute) {
        return NextResponse.next()
    }

    if(!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_UNAUTHORIZED
        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = '/aplication'
        return NextResponse.redirect(redirectUrl)
    }

    return NextResponse.next()
}

export const config: MiddlewareConfig = { 
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      ],
}
*/
