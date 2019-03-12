import React from "react";

export const MyContext = React.createContext({ value: "Blue" });

export const ContextProvider = MyContext.Provider;
export const ContextConsumer = MyContext.Consumer;
