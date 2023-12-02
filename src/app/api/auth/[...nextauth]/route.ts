import NextAuth from "next-auth";
import { authOptions } from "../../../../auth";

//TODO: NextAuth initialise authOptions of Google Provider
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
