import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gabriel-camurca/vizualizacao-de-dados-app-marketplace";

export function CalendarGraph() {
  const chart_dateRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart_date") return new Inspector(chart_dateRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart_dateRef} />
    </>
  );
}

export default CalendarGraph;