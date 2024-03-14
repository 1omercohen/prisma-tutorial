import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LoginRequest } from "../../apis/auth";

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Add your login logic here using the data object
        console.log("Login successful", data);
        reset();
        const response = await LoginRequest(data);
        if (response.status === 200) {
            navigate("tasks");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: "500px",
                margin: "auto",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "white",
            }}
        >
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Login Form
            </Typography>
            <TextField
                fullWidth
                label="Email"
                {...register("email", {
                    required: "Email is required",
                    type: "email",
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                margin="normal"
            />
            <TextField
                fullWidth
                type="password"
                label="Password"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                    },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                margin="normal"
                sx={{ mt: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
            >
                Login
            </Button>
            <Box
                sx={{ mt: 2, justifyContent: "space-between", display: "flex" }}
            >
                <Link href="#" variant="body2">
                    Forgot Password?
                </Link>
                <Link to="register">Register</Link>
            </Box>
        </Box>
    );
};

export { Login };
