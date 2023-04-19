import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getPlaceData } from "./api";
import React,{useEffect ,useState} from "react";

const theme = createTheme({
  // Customize your theme here
});
function App() {
  const [places,setPlaces]= useState();
  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds]=useState(null);
 
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
    })

  },[])
  useEffect(()=>{
    console.log(bounds);
    getPlaceData(bounds.sw,bounds.ne)
    .then((data)=>{
        console.log(data)
         setPlaces(data) 
    })
  },[coordinates,bounds])
  return (
    <>
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          
          />
        </Grid>
      </Grid>
      </ThemeProvider>
    

    </>
  );
}

export default App;
