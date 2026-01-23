import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import Menu from "../components/Menu"
import { Fragment, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    console.log(formJson)
    if (formJson.email == 'a@a.com' && formJson.password == '1234'){
        props.funcion(formJson);
        handleClose();
    }
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresa tus credenciales.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" form="subscription-form">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

function ButtonExample(props){
    return <Button color={props.color} variant={props.type}>{props.value}</Button>
}

function BasicTextFields(props) {
  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate autoComplete="off" >
      <TextField type="password" color="warning" id="outlined-basic" label="Outlined" variant="outlined" defaultValue={props.value}/>
      <TextField type="number" color="error" id="filled-basic" label="Filled" variant="filled" defaultValue={props.value}/>
      <TextField type="text" color="success" id="standard-basic" label="Standard" variant="standard" defaultValue={props.value}/>
      {props.children}
    </Box>
  );
}

function MaterialEx(props){
    const [session, setSession] = useState({})
    const login = (value) =>{
        console.log("Iniciaste sesion")
        console.log(value);
        setSession(value);
    }
    const {user, logout} = useAuth();
    if (!user){
      return <Navigate to="/" replace="true"/>
    }
    return <>
        <Menu/>
        <br/>
        {user && <h1>Hola, {user.user}</h1>}
        <FormDialog funcion={login}/>
        <BasicTextFields value="hola">
            Hola como estan?
        </BasicTextFields>
        <ButtonExample color="warning" type="contained" value="Hola"/>
        <ButtonExample color="error" type="text" value="Como"/>
        <ButtonExample color="secondary" type="outlined" value="estan?"/>
    </>
}
export default MaterialEx