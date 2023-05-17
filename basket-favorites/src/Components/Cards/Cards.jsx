import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { dataContext } from '../../Context/BasketContext';
function Api() {
  let [dataState,setDataState]=useState([])
  const[categories,setCategories]=useState([]);
  const{basket,setBasket}=useContext(dataContext)

  useEffect(()=>{
    fetch("https://www.omdbapi.com/?s=vampire&apikey=a1f3aad")
    .then((res)=>res.json())
    .then((data)=>{
      console.log("fetch");
      setDataState(data.Search)
      console.log(data)
    })
  },[])
 
  return (
  <>
    
    <ul style={{display:"flex", flexWrap:"wrap", gap:"20px"}}> 
      {dataState&& dataState.map((data,i)=>(
        
        <Card key={i} sx={{ maxWidth: 320 }} >
      <CardMedia
        sx={{ height: 340 }}
        image={data.Poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {data.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.Year}
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{
            setBasket([...basket,data])

            Swal.fire({
                position: 'bottom-right',
                icon: 'success',
                title: 'Add to favorites',
                showConfirmButton: false,
                timer: 1000
              })
        }} size="small">Add to favorite</Button>
       
      </CardActions>
    </Card>
      
     
      ))}
    </ul>
   
  </>  

)
}

export default Api