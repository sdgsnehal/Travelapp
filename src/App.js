import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  // Customize your theme here
});
function App() {
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
          <Map />
        </Grid>
      </Grid>
      </ThemeProvider>
    

    </>
  );
}

export default App;
