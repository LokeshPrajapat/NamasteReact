import React from "react";
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",
// {},
// React.createElement("div",{},React.createElement("h1",{},"I am an h1 tag"))
// )

// const jsxHeading=<h1 className="heading">Namaste React</h1>

const Title=()=>{
    return(
        <div>
            <h1>Namaste React using JSX</h1>
        </div>
    )
}

// Component Composition Component inside the component

const HeadingComponent=()=>{
    return(
        <div>
            <Title/>
            <h1>
                Namaste React Functional Component
            </h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);