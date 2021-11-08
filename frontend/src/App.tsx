import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import Routes from "Routes";
import { store } from "store/store";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
