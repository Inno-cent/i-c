import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools"

// const styles = {
//   global:(props) => ({
//     body:{
//       bg:mode('gray.100', "#000")(props),
//       color:mode("grey.800", "whiteAlpha.900")(props)
//     }
//   })
// }

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.100', "#000")(props),
        color: mode("grey.800", "whiteAlpha.900")(props)
      }
    })
  }
});
// const theme = extendTheme({ config.styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
