import PurchasesManagement from "../pages/PurchasesManagement";

const purchasesRouter = [
    {
        path: "/purchases",
        element: <PurchasesManagement />,
    },
    {
        path: "/purchases/:purchasesId",
        element: <div> purchase 자식 1임 </div>,
    },
]


export default purchasesRouter