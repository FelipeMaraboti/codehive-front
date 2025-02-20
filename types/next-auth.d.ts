import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Adiciona o campo ID ao usuário da sessão
    } & DefaultSession["user"];
  }
}
