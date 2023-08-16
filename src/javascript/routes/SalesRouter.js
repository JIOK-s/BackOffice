import SalesManagement from "../pages/SalesManagement";

const salesRouter = [
    {
        path: "/sales",
        element: <SalesManagement />,
        name: "sales 부모"
    },
    {
        path: "/sales/:salesId",
        element: <div> sales 자식 1임 </div>,
        name: "sales 자식1"
    },
]


export default salesRouter