import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';
import useStyles from './styles'

const Map = ({setCoordinates,setBounds,coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key:'AIzaSyAHB1wI8Lu45ECvmG6ACKMvSWJ-wyAVpZY'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
      onChange={(e)=>{
        
      console.log(e)
        setCoordinates({lat:e.center.lat,lng:e.center.lng});
        setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
      }}
         
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map