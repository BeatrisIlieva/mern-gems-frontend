import { useState, createContext, useContext } from "react";

export const JewelryContext = createContext();

export const JewelryProvider = ({ children }) => {
  const [selectedEntity, setSelectedEntity] = useState([]);

  const [selectedColor, setSelectedColor] = useState(null);

  const updateSelectedEntity = (entity) => {
    setSelectedEntity(entity);
  };

  const updateSelectedColor = (colorIndex) => {
    setSelectedColor(colorIndex);
  };

  const context = {
    selectedEntity,
    updateSelectedEntity,
    selectedColor,
    updateSelectedColor,
  };

  return (
    <JewelryContext.Provider value={context}>
      {children}
    </JewelryContext.Provider>
  );
};

export const useJewelryContext = () => {
  const context = useContext(JewelryContext);

  return context;
};
