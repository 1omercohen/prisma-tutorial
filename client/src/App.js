import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Tasks } from "./pages/Tasks";
import { GetTasksRequest } from "./apis/tasks";
import { UserListRequest } from "./apis/users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
        loader: async () => {
            const response = await Promise.all([
                GetTasksRequest(),
                UserListRequest(),
            ]);
            if (response[0].status === 200 && response[1].status === 200) {
                return {
                    tasks: response[0].data.tasks,
                    users: response[1].data.users,
                };
            }
            return {
                tasks: [],
                users: [],
            };
        },
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export { App };
