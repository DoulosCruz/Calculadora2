import { useState } from "react";

export const useOperaciones = (valor) => {
  const [counter, setCounter] = useState(valor);

  const suma = () => setCounter(counter + valor);
  const resta = () => setCounter(counter - valor);
  const multiplicacion = () => setCounter(counter * valor);
  const division = () => setCounter(counter / valor);
  const mod = () => setCounter(counter % valor);

  return {counter, suma, resta, multiplicacion, division, mod}
};




