import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <Outlet context={{ searchQuery }} />
      </main>
      <Footer />
    </>
  );
}
