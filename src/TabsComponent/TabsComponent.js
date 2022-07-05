import { useState } from "react";

import TabComponent from "./TabComponent";

const TabsComponent = () => {
  const [displayData, setDisplayData] = useState();
  
  const tabsData = [
    { name: "Tab1", value: "Tab1 content" },
    { name: "Tab2", value: "Tab2 content" },
    { name: "Tab3", value: "Tab3 content" },
  ];

  const updateContent = (name) => {
    let data = tabsData.filter((tab) => tab.name === name);
    setDisplayData(data[0]);
  };
  return (
    <>
      <div>
        {tabsData &&
          tabsData.map((tabData) => {
            return (
              <TabComponent
                key={`${tabData.name}`}
                setActive={displayData && displayData.name}
                name={tabData.name}
                updateContent={updateContent}
              />
            );
          })}
      </div>
      <div>
        <p>{displayData && displayData.value}</p>
      </div>
    </>
  );
};
export default TabsComponent;
