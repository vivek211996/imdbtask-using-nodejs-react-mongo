import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Navbar({setView , view}) {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setView(newValue);
    console.log(view)
  };


  return (
    <Paper className={classes.root}>
      <Tabs
        value={view}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Upload" value={0} />
        <Tab label="List" value={1}  />
        <Tab label="Search" value={2} />
      </Tabs>
    </Paper>
  );
}