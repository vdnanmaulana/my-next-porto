import React from "react";
import "boxicons/css/boxicons.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Footer from "./components/Footer";

function page() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Gallery />
        {/* Content */}
        <Content />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

export default page;
