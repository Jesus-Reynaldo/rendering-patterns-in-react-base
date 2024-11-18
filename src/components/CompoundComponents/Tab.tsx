interface TabProps {
  label: string;
  children: React.ReactNode;
}
const Tab = ({label, children}:TabProps) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
