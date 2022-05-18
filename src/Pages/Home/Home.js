import React from "react";
import SearchBar from "./SearchBar";
import Todos from "./Todos";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <SearchBar />
      <Todos />
    </div>
  );
};

export default Home;
