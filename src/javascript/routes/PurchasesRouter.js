import PurchasesManagement from "../pages/PurchasesManagement";

const purchasesRouter = [
    {
        path: "/purchases",
        element: <PurchasesManagement />,
        name: "purchases 부모"
    },
    {
        path: "/purchases/:purchasesId",
        element: <div> purchase 자식 1임 </div>,
        name: "purchases 자식1"
    },
]


export default purchasesRouter