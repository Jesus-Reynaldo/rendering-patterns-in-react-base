import { useState } from "react";

interface UserProps {
  name: string;
}
function useLoading(initiaLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(initiaLoading);
  return {
    isLoading,
    setIsLoading,
  };
}

const UserComponent = ({name}:UserProps) => {
  const {isLoading, setIsLoading} = useLoading(false);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="Teffcode" />;
};

