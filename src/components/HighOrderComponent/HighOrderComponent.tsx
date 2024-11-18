interface UserProps {
  name: string;
}
function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & {isLoading: boolean}) => {
    const {isLoading, ...rest} = props;
    return isLoading ? <p>Loading...</p> : <Component {...rest as T} />;
  };
}

const UserCompponent = ({name}:UserProps) => {
  return <p>Hello, {name}!</p>;
}

const UserWithLoading = withLoading(UserCompponent);
export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading name="Teffcode" isLoading={true} />
      <UserWithLoading name="Teffcode" isLoading={false} />
    </div>
  );
};