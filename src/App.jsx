import { ClimbingBoxLoader } from "react-spinners";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-primary">
          <ClimbingBoxLoader color={"#ffffff"} loading={loading} size={30} />
        </div>
      ) : (
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Portfolio />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
