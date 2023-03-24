import { useState } from "react";
import { Entradas } from "./entradas";
import { useOperaciones } from "./HooksPruebas/useOperaciones";

export const Prueba1 = () => {
  const { counter, suma, resta, multiplicacion, division, mod } =
    useOperaciones(2);

  const arr = [suma, resta, multiplicacion, division, mod];

  return (
    <>
   
      <h1>Contador Bacano:{counter}</h1> <Entradas/>
      <hr />
      <div>
        {arr.map((valor) => {
          return <button className="btn btn-primary mt-2" onClick={valor}>{valor.name}</button>;
        })}
      </div>
    </>
  );
};
