import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';
import useStyles from './styles'

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates ={lat:0,lng:0}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key:'AIzaSyAHB1wI8Lu45ECvmG6ACKMvSWJ-wyAVpZY'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
        
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map