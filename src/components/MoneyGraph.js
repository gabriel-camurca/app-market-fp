import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function MoneyGraph() {
  const chart_dinRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_din") return new Inspector(chart_dinRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart_dinRef} />
    </>
  );
}

export default MoneyGraph;