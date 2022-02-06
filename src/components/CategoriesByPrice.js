import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function CategoriesByPrice() {
  const chart_contentRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_content") return new Inspector(chart_contentRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart_contentRef} />
    </>
  );
}

export default CategoriesByPrice;