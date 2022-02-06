import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function Installs() {
  const chart_installRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_install") return new Inspector(chart_installRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart_installRef} />
    </>
  );
}

export default Installs;