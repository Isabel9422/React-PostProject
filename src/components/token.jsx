import { createContext, useContext } from "react";

function token() {
    const Context = createContext("token");
    console.log("token")
    const value = useContext(Context);
  return (
    <span>
      {value}
    </span>
  )
}

export default token
