import React, { useState, ReactElement  } from "react";
import classes from "./CompoundComponents.module.css";
interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({children}:TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };
  const TabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  )


  return (
    <div className={classes.Tabs}>
      <ul>
        {
        TabElements.map((child,index) =>(
          <li 
            key={index}
            className={`${index === activeIndex ? classes.activeTab :"" }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))
        }
      </ul>
      <p className={classes.TabContent}>
        {TabElements[activeIndex]}
      </p>
    </div>
  );
};

export default Tabs;
