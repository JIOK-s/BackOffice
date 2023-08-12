import './App.css';
import SidebarMenu from "./javascript/pages/SidebarMenu";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="Sidebar-for-jiok">
            <SidebarMenu />
        </div>
        <div className="Contents-for-jiok">
            <Outlet />
        </div>
    </div>
  );
}

export default App;
