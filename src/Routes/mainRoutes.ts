import React from "react";
const CreateForm = React.lazy(()=>import('../Views/CreateForm/CreateForm'))
const EditForm = React.lazy(()=>import('../Views/EditForm/EditForm'))
const ShowForm = React.lazy(()=>import('../Views/ShowForm/ShowForm'))
const APIList = React.lazy(()=>import('../Views/APIList/APIList'))
const routes = [
    {path:"/",exact:true,Component:CreateForm},
    {path:"/editform",exact:true,Component:EditForm},
    {path:"/showform",exact:true,Component:ShowForm},
    {path:"/apilist",exact:true,Component:APIList},
]
export default routes; 