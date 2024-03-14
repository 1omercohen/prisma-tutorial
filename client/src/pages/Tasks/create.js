import * as React from "react";
import { useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CreateTaskRequset } from "../../apis/tasks";

export const NewTaskModal = ({ users }) => {
    const statusList = [
        { value: "TODO", label: "Todo" },
        {
            value: "IN_PROGRESS",
            label: "In Progress",
        },
        { value: "COMPLETED", label: "Completed" },
    ];
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (data) => {
        const task = Object.fromEntries(
            Object.entries(data).filter((field) => !!field)
        );
        const response = await CreateTaskRequset(task);
        if (response.status === 200) {
            console.log(task);
            handleClose();
        }
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                New Task
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: handleSubmit(onSubmit),
                }}
            >
                <DialogTitle>Create Task From</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Task Title"
                        {...register("title", {
                            required: "Task Title is required",
                            minLength: {
                                value: 10,
                                message:
                                    "Task Title must be at least 10 characters",
                            },
                        })}
                        error={Boolean(errors.title)}
                        helperText={errors.title?.message}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Task Discription"
                        multiline
                        rows={3}
                        {...register("discription", {
                            required: "Task Discription is required",
                            minLength: {
                                value: 50,
                                message:
                                    "Task Discription must be at least 10 characters",
                            },
                        })}
                        error={Boolean(errors.title)}
                        helperText={errors.title?.message}
                        margin="normal"
                    />
                    <Select
                        fullWidth
                        defaultValue={statusList[0].value}
                        {...register("status")}
                    >
                        {statusList.map((status) => (
                            <MenuItem key={status.value} value={status.value}>
                                {status.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        style={{ marginTop: 10 }}
                        fullWidth
                        defaultValue=""
                        label="Assign To"
                        {...register("assign_to")}
                    >
                        {users.map((user) => (
                            <MenuItem key={user.id} value={user.id}>
                                {user.first_name} {user.last_name}
                            </MenuItem>
                        ))}
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
