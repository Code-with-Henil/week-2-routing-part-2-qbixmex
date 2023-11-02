import { Box, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <MenuItem>
            <NavLink to="/" className="link">
              <Typography variant="h6" component="span">
                Home
              </Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/about" className="link">
              <Typography variant="h6" component="span">
                About
              </Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/recipes" className="link">
              <Typography variant="h6" component="span">
                Recipes
              </Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/dashboard" className="link">
              <Typography variant="h6" component="span">
                Dashboard
              </Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/login" className="link">
              <Typography variant="h6" component="span">
                Login
              </Typography>
            </NavLink>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
