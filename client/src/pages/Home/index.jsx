import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import ExplainList from "../../components/ExplainList";
import Products from "../../components/Products";
import FAQ from "../../components/FAQ";
import Articles from "../../components/Articles";
import ExplainListv2 from "../../components/ExplainListv2";
import Loading from "../../components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Hero />
      <Services />
      <ExplainList />
      <Products />
      <ExplainListv2 />
      <Articles />
      <FAQ />
    </div>
  );
}
