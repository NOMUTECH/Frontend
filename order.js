import React from "react";
import Grid  from '@mui/material/Grid2';
import CardComponent from "./CardComponent";
import Given from "../orders/Image/given.jpg"
import Stock from "../orders/Image/stock.jpg";
import Taken from "../orders/Image/taken.avif"

const App = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <CardComponent 
          frontText="GIVEN" 
          backText="Kart 1 - Arka Yüz Yazısı" 
          frontImage= {Given}
        />
      </Grid>
      <Grid item>
        <CardComponent 
          frontText="LIVE STOCK" 
          backText="Kart 2 - Arka Yüz Yazısı" 
          frontImage={Stock}
        />
      </Grid>
      <Grid item>
        <CardComponent 
          frontText="Taken" 
          backText="Kart 3 - Arka Yüz Yazısı" 
          frontImage={Taken}
        />
      </Grid>
    </Grid>
  );
};

export default App;
