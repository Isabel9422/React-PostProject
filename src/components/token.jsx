import { createContext, useContext } from "react";

function token() {
    const Context = createContext("default Value");

    const value = useContext(Context);
  return (
    <span>
      {value}
    </span>
  )
}

export default token
