import TextField from '@mui/material/TextField';


export const Input = ({ name, placeholder, defaultValue, type = "text", variant = "outlined", size = "normal"}) => {
    return (
        <TextField
            style={{
                outline:"none"
            }}
            name={name}
            label={placeholder}
            type={type}
            defaultValue={defaultValue}
            variant={variant}
            size={size}
        />
    )
}