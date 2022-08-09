import React from "react";
import Cards from "../Cards";
import NavBar from "../NavBar";
import Tags from "../Tags";

function home() {
  return (
    <>
      <NavBar />
      <div className="mt-1">
        <a className="mt-1 absolute inset-y-20 left-36 grid grid-cols-2 gap-10 min-h-fit">
          <Cards />
        </a>
        <a className="mt-1 absolute inset-y-40 right-20">
          <h1 className="font-bold mb-5 pl-40 text-white underline hover:underline-offset-2	">Categorias</h1>
          <Tags />
        </a>
      </div>
    </>
  );
}

export default home;
