import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function ProportionEmails() {
  const chart_emailRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_email") return new Inspector(chart_emailRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart_emailRef} />
      <p>Credit: <a href="https://observablehq.com/@gabriel-camurca/vizualizacao-de-dados-app-marketplace">Vizualização de Dados - App Marketplace by Gabriel Camurça</a></p>
    </>
  );
}

export default ProportionEmails;