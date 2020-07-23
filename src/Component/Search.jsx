import React , {useState} from 'react'
import { FormControl, InputLabel, Input ,Button , RadioGroup , Box ,FormControlLabel , Radio } from "@material-ui/core";
import MovieCard from "./MovieCard";
import { Grid } from "@material-ui/core";

function Search() {
    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(data)
        fetch(`http://localhost:4040/search?title=${data.search}&opt=${data.opt}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.movies)
        setMovies([data.movies]);
      
      });
    }
    const handleOnChange = (event) => {
        var value = event.target.value
        var name = event.target.name
        var temp = JSON.parse(JSON.stringify(data))
        temp[name] = value
        setData(temp)
    }
    const [data, setData] = useState({search : "" , opt : "title" })
    const [movies, setMovies] = useState([]);
    return (
        <div>
             <form onSubmit={handleOnSubmit}>
          <Box my={5}>
        <FormControl fullWidth  >
          <InputLabel htmlFor="Title">Movie Title</InputLabel>
          <Input id="Title" aria-describedby="my-helper-text" name="search"  value={data.search} onChange={handleOnChange} required/>
        </FormControl>
        </Box>
        <FormControl component="fieldset">
 
  <RadioGroup name="opt" value={data.opt} onChange={handleOnChange} >
    <FormControlLabel value="title" control={<Radio />} label="Title" />
    <FormControlLabel value="id" control={<Radio />} label="ID" />
  </RadioGroup>
</FormControl>
<Button variant="contained" color="primary" type="submit">
  Search </Button>
        </form>
        <Grid container spacing={3} className="mt-3">
        {movies.map((movie) => (
          <Grid item sm={6} md={5} lg={4} key={movie._id}>
            <MovieCard movie={movie}  />
          </Grid>
        ))}
      </Grid>
        </div>
    )
}

export default Search
