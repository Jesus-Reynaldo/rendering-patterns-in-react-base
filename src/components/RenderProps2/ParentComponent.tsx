import { useState } from "react";

interface ParentComponentProps {
  render:(data:string[]) => React.ReactNode;
}
const ParentComponent = ({render}:ParentComponentProps) => {
  const [data] = useState<string[]>(["Apple 🍎", "Banana 🍌", "Orange 🍊"]);
  return (
    <ul>
      {render(data)}
    </ul>
  );
};

export default ParentComponent;
