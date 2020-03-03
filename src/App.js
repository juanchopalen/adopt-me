import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Teo",
      animal: "Dog",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, {
      name: "Luca",
      animal: "Cat",
      breed: "Cacri"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
