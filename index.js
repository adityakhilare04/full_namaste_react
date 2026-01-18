const heading = React.createElement(
    "div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", {}, "I am h1 tag" ),
            React.createElement("h2", {}, "I am h2 tag" )
        ]),
        React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "I am h1 tag" ),
            React.createElement("h2", {}, "I am h2 tag" )
        ])
    ]
);

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(heading);