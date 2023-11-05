// import React from "react";

function Hello({greeting1}) { // {greeting1} is destructured
    return(
        <div className="f1 tl">   {/* f1 t1 is a property of the tachyons which we had to install using the command "npm install tachyons"  */}
        <p>hello + {greeting1}</p>
        <h1>Suiiiiiii</h1>
      </div>
    );
  }

  export default Hello;