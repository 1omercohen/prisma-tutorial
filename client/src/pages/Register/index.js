import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { RegisterRequest } from "../../apis/auth";

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Add your login logic here using the data object
            console.log("register successful", data);
            reset();
            const response = await RegisterRequest(data);
            console.log(response);
            if (response.status === 200) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
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
                Register Form
            </Typography>
            <TextField
                fullWidth
                label="First Name"
                {...register("first_name", {
                    required: "First Name is required",
                    minLength: {
                        value: 3,
                        message: "First Name must be at least 3 characters",
                    },
                })}
                error={Boolean(errors.first_name)}
                helperText={errors.first_name?.message}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Last Name"
                {...register("last_name", {
                    required: "Last Name is required",
                    minLength: {
                        value: 3,
                        message: "Last Name must be at least 3 characters",
                    },
                })}
                error={Boolean(errors.last_name)}
                helperText={errors.last_name?.message}
                margin="normal"
            />
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
                Create Account
            </Button>
            <Box sx={{ mt: 2 }}>
                <Link to="/" variant="body2">
                    Already have an account? Login
                </Link>
            </Box>
        </Box>
    );
};

export { Register };
