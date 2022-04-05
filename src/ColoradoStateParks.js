import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import { trees, wildlife } from "./parks/RockyMountain.js"
import * as RMFunctions from "./parks/RockyMountain.js"

console.log(RMFunctions.trees)

RMFunctions.wildlife()

RMFunctions.elevation()

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}


export default ColoradoStateParks
