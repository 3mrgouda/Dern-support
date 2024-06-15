import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import ExplainList from "../../components/ExplainList";
import Products from "../../components/Products";
import News from "../../components/News";
import FAQ from "../../components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ExplainList />
      <Products />
      <News />
      <FAQ />
    </div>
  );
}
