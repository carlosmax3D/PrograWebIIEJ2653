import { Breadcrumbs, Typography, Box, List, Link } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router";
import PropTypes from 'prop-types';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";

const breadcrumbNameMap = {
  '/': 'Home',
  '/material': 'Material',
  '/forms': 'Forms',
  '/montaje': 'Montaje',
  '/actualiza': 'Actualiza',
  '/desmonta': 'Desmonta',
  '/funcional': 'Funcional'
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} sx={{ color: 'text.primary' }}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

function RouterBreadcrumbs() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
        <Page></Page>
        <Box
          sx={{ bgcolor: 'background.paper', mt: 1 }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            {
                Object.entries(breadcrumbNameMap).map((item)=>{
                    return <ListItemLink to={item[0]} bgColor="white"/>
                })
            }
          </List>
        </Box>
      </Box>
  );
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
 
function Menu(props){
    return <>
        <RouterLink to='/'>Home </RouterLink>
        <RouterLink to='/material'>Material </RouterLink>
        <RouterLink to='/forms'>Formularios </RouterLink>
        <RouterLink to='/montaje'>Montaje </RouterLink>
        <RouterLink to='/actualiza'>Actualizacion </RouterLink>
        <RouterLink to='/desmonta'>Desmontaje </RouterLink>
        <RouterLink to='/funcional'>Funcional </RouterLink>
    </>
}

export default RouterBreadcrumbs;