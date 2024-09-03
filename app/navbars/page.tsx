import { CollapsibleNavbar } from "@/components/navbars/collapsible-navbar";
import { NavbarWithDrawer } from "@/components/navbars/navbar-with-drawer";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex flex-col">
      {/* <NavbarWithDrawer transparent={false} /> */}
      <CollapsibleNavbar />
      <div className="flex-1  m-2 grid place-items-center text-5xl">
        Navbars
      </div>
    </main>
  );
}
