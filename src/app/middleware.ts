import { withAuth } from "next-auth/middleware";
import { redirect } from "next/navigation";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req);
  },
  {
    authorized({ req, token }) {
      console.log(req, token);
      if (!token) redirect("/api/auth/signin"); // If there is a token, the user is authenticated
    },
  },
);
