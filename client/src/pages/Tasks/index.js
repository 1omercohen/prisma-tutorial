import { NewTaskModal } from "./create";
import { useLoaderData } from "react-router-dom";
import Grid from "@mui/material/Grid";

export const Tasks = () => {
    const { tasks, users } = useLoaderData();
    console.log(tasks, users);
    return (
        <Grid container>
            <NewTaskModal users={users} />
            <div>TASKS PAGE</div>
        </Grid>
    );
};
