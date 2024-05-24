import NextAuth from "next-auth";
import GoogleProvider from "@auth/core/providers/google";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log("🚀 ~ profile:", profile);
        const userName = `${profile.given_name} ${profile.family_name}`;
        return {
          id: profile.sub,
          name: userName,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    session({ session, ...rest }) {
      const token = rest.token;
      return {
        ...session,
        user: {
          id: session?.user?.id ?? token?.sub ?? "",
          email: session?.user?.email,
          image: session?.user?.image,
          name: session?.user?.name,
        },
      };
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});
