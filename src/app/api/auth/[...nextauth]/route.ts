/* importar session depois 

import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET || !process.env.NEXTAUTH_SECRET) {
    throw new Error("Variáveis de ambiente ausentes.");
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("Variáveis de ambiente ausentes.");
}

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Quando o usuário se autentica, adiciona o nome e e-mail ao token
            if (user) {
                token.id = user.id;
                token.email = user.email;  // Adiciona o e-mail ao token
                token.name = user.name;    // Adiciona o nome ao token
            }
            return token;
        },
        async session({ session, token }) {
            // Passa os dados do token para a sessão
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;  // Passa o nome para a sessão
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
    }
})

export { handler as GET, handler as POST };
*/
