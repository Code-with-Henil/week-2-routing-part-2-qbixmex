import { Link } from 'react-router-dom';
import {
  Box, Container, Divider, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import CakeIcon from '@mui/icons-material/Cake';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

const RecipesPage = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        my={4}
      >Recipes Page</Typography>

      <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'secondary.main' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CakeIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    className="link"
                    to="/recipes/chocolate-cake"
                  >Chocolate Cake</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalPizzaIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    className="link"
                    to="/recipes/pepperoni-pizza"
                  >Pepperoni Pizza</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CoffeeIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    className="link"
                    to="/recipes/roasted-coffee"
                  >Roasted Coffee</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <RamenDiningIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link
                    className="link"
                    to="/recipes/ramen"
                  >Ramen</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  );
};

export default RecipesPage;
