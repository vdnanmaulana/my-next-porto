import React from "react";
import "boxicons/css/boxicons.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

function page() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Gallery />
      </main>
    </>
  );
}

export default page;
