import { createContext, useState } from "react";

const BodyContext = createContext([]);

export const BodyProvider = ({ children }) => {
    const [bodies, setBodies] = useState([]);

  return (
    <BodyContext.Provider  value={{ bodies,setBodies}}>
      {children}
    </BodyContext.Provider>
  );
};

export default BodyContext;