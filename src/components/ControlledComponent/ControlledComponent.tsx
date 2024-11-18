import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input 
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Ingresa el codigo del cupon. Ej: 100FF"
      />
      <p>El cupon es {value}</p>
    </div>
  );
};
