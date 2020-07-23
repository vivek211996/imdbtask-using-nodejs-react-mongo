import React from 'react'
import {Card , CardActionArea , CardContent , Typography , Button , CardMedia , CardActions} from '@material-ui/core'

function MovieCard({movie}) {
    return (
        <Card style={{maxWidth: 500}} >
        <CardActionArea>
          <CardMedia
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
            title="Contemplative Reptile"
            height="140"
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.description}
            </Typography>
            <Typography variant="body2" component="p">  
            Year : {movie.year}
            </Typography>
            <Typography variant="body2" component="p">  
            Director : {movie.director}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    )
}

export default MovieCard
