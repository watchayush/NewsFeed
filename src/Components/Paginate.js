import React from 'react'
import {useState} from "react";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ul: {
      "& .MuiPaginationItem-root": {
        backgroundColor: "white"
      }
    }
  }));
  
export default function Paginate({total_no_of_pages,setPage}) {

    const classes = useStyles();

    const [page, setpage] = useState(1);
    const handleChange = (event, value) =>{
        debugger;
        setpage(value);
        setPage(value);
    }
    return (
        <>
           <Pagination count={total_no_of_pages} page={page} onChange={handleChange} /> 
        </>
    )
}

// classes={{ ul: classes.ul }}