import React, { createContext } from 'react';

export const  CssContext = createContext(null)
const CssProvider = ({ children }) => {

    const cssInfo ={
        primaryColor : "#9747FF"
    }

    return (
        <CssContext.Provider value={cssInfo}>
            {children}
        </CssContext.Provider>
    );
};

export default CssProvider;