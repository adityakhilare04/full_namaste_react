import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
    <h1 className="heading">Namaste React Functional Component</h1>
)
const HeadingComponent = () => (
    <div className="container">
        <TitleComponent />
        <h1>This is a functional component.</h1>
    </div>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<HeadingComponent />);