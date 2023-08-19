const membersRouter = [
    {
        path: '/members',
        element: <div> members 부모임 </div>,
        name: 'members 부모',
    },
    {
        path: '/members/:membersId',
        element: <div> members 자식 1임 </div>,
        name: 'members 자식1',
    },
];

export default membersRouter;
