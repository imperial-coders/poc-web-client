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
    session({ session }) {
      const HARD_CODED_USER_IDS = [
        "clwb7mw8300003z6kadi875xg",
        "clwb7nckm00033z6kbm4nd22r",
        "clwb7nfxq00063z6k0acectsj",
      ];
      const randomId =
        HARD_CODED_USER_IDS[
          Math.floor(Math.random() * HARD_CODED_USER_IDS.length)
        ] ?? HARD_CODED_USER_IDS[0];

      return {
        ...session,
        user: {
          id: randomId,
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
