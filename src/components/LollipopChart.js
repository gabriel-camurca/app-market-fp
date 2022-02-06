import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function LollipopChart() {
  const lollipop_chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "lollipop_chart") return new Inspector(lollipop_chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={lollipop_chartRef} />
      <p>Credit: <a href="https://observablehq.com/@gabriel-camurca/vizualizacao-de-dados-app-marketplace">Vizualização de Dados - App Marketplace by Gabriel Camurça</a></p>
    </>
  );
}

export default LollipopChart;