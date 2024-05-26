import { redirect } from "next/navigation";

export default function Root() {
  //  User will only get here if authenticated, otherwise middleware will auto-redirect them to /sign-in
  return redirect("/home");
}
