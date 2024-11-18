import React from "react";

interface DataItem {
  id: number;
  name: string;
  description: string;
  image: string;
}
interface DataPresenterProps {
  data: DataItem[];
}
export const DataPresenter = ({data}:DataPresenterProps) => {
  return (
    <>
    {data.map((item) => (
      <React.Fragment key={item.id}>
        <img src={item.image} alt={item.name} />
        <em>{item.description}</em>
      </React.Fragment>
    ))}
    </>
  );
};
