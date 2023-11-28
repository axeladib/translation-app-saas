// TODO: Protecting the routes that are sensitive
//Specify URLs to be used if you want to create custom sign-in and error pages. The pages specified will override the corresponding built-in page.
import { withAuth } from "next-auth/middleware";
export default withAuth;

//TODO: These is the protected routes endpoint
// FIXME: /chat is not redirect to the signIn Google when user is not login
export const config = {
  matcher: ["/chat", "/chat/:id*", "/register"],
};
