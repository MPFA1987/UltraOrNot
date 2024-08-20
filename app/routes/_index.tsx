import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return redirect("/games");
};

export default function Index() {
  // Cette fonction ne sera jamais rendue en raison de la redirection,
  // mais elle est nécessaire pour que Remix considère ceci comme un composant de route valide.
  return null;
}
