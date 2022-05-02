import ReactDOM from "react-dom";
// import { App } from "./App"
// import { App2 } from "./App2"
import { App3 } from "./App3";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider"

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <AdminFlagProvider>
        <App3 />
    </AdminFlagProvider>,
    document.getElementById("root"));