const membersRouter = [
    {
        path: "/members",
        element: <div> members 부모임 </div>,
    },
    {
        path: "/members/:membersId",
        element: <div> members 자식 1임 </div>,
    },
]


export default membersRouter