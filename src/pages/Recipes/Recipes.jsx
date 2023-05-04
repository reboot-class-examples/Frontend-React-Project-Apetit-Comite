import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { getAllRecipes } from '../../Services/recipeServices';
// import Header from '../../components/Header/Header'



const recetas = [
  {
    nombre: "Ensalada César",
    descripcion: "Una ensalada clásica con pollo, lechuga romana, parmesano y aderezo César",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/9/96/Lagarto_ocelado_Sierra_Sur_Ja%C3%A9n_2019_24J_01.jpg"

  },

]
export default function Recipes() {

  const [recipes, setRecipes] = useState([])

useEffect(() => {

  getRecipes()
}, [])

 async function getRecipes () {
    const result = await getAllRecipes()
    setRecipes(result)
  }

  function displayRecipes() {
    return recipes.map(r => {
      return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <Card sx={{ maxWidth: "345px", padding: "10px", margin: "10px", flexDirection: "row", }}>

            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={r.img}
              />
              <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                  {r.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  {r.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" sx={{ backgroundColor: "black", left: "50px" }}>
                + Add To Planner
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )
    })
  }

  
  return (
    <>
      <div style={{ width: "100%", height: "auto" }}>
        {/* <Header/> */}
        <Grid container sx={{ justifyContent: "start", flexWrap: "wrap" }}>
          {displayRecipes()}
        </Grid>
      </div>
    </>
  )
  }
