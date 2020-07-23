import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button,
  Box,
} from "@material-ui/core";

function Upload() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    fetch("http://localhost:4040/insert", {
      method: "POST",
      headers: { "Content-Type"  : "application/json" },
      body: JSON.stringify(data),
    }).then(res => res.json()).then(data => {
        console.log(data)
    })
  };
  const handleOnChange = (event) => {
    var value = event.target.value;
    var name = event.target.name;
    var temp = JSON.parse(JSON.stringify(data));
    temp[name] = value;
    setData(temp);
  };
  const [data, setData] = useState({
    title: "",
    year: "",
    description: "",
    director: "",
  });
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Box my={5}>
          <FormControl fullWidth>
            <InputLabel htmlFor="Title">Movie Title</InputLabel>
            <Input
              id="Title"
              aria-describedby="my-helper-text"
              name="title"
              value={data.title}
              onChange={handleOnChange}
            />
          </FormControl>
        </Box>
        <Box my={5}>
          <FormControl fullWidth>
            <InputLabel htmlFor="Year">Year</InputLabel>
            <Input
              id="Year"
              aria-describedby="my-helper-text"
              type="number"
              name="year"
              value={data.year}
              onChange={handleOnChange}
            />
          </FormControl>
        </Box>
        <Box my={5}>
          <FormControl fullWidth>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              name="description"
              value={data.description}
              onChange={handleOnChange}
            />
          </FormControl>
        </Box>
        <Box my={5}>
          <FormControl fullWidth>
            <InputLabel htmlFor="Director">Director</InputLabel>
            <Input
              id="Director"
              aria-describedby="my-helper-text"
              name="director"
              onChange={handleOnChange}
              value={data.director}
            />
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Upload;
