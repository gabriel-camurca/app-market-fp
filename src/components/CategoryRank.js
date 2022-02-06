import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function CategoryRank() {
  const chart_categoriasRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_categorias") return new Inspector(chart_categoriasRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart_categoriasRef} />
    </>
  );
}

export default CategoryRank;