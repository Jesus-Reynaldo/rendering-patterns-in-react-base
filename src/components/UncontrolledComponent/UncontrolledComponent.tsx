import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (inputRef.current) {
      alert(`Nuevo producto añadido: ${inputRef.current.value}`);
    }
  }
  return (
    <div>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Name of the purchase. e.g. Apple"
      />
      <button onClick={handleSubmit}>add to cart</button>
    </div>
  );
};
