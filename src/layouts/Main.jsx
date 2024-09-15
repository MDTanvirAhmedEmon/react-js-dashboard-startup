import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>Header...</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;