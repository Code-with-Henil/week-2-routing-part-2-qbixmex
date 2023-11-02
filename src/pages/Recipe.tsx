import { Button, Container, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import recipes from '../data/recipes';
import parser from 'html-react-parser';

const Recipe = () => {
  const { recipeId } = useParams();
  const recipe = recipes.find(recipe => recipe.slug === recipeId);
  const navigate = useNavigate();
  
  return (
    <Container sx={{ pb: 4 }}>
      <Typography
        variant="h1"
        component="h1"
        my={4}
      >{recipe!.title}</Typography>

      <img
        src={'/images/' + recipe!.image}
        alt={recipe!.title}
        style={{ maxWidth: '560px', borderRadius: '8px', marginBottom: '2rem' }}
      />
      <Typography component="section" mb={2}>{parser(recipe!.description)}</Typography>
      <Typography>Author: {recipe!.author}</Typography>
      <Typography mb={4}>Date: {String(recipe!.date.toLocaleDateString())}</Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/recipes', { replace: true })}
      >Back to Recipes</Button>
    </Container>
  );

};

export default Recipe;