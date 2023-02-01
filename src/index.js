import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import generateMuiTheme from "./mui/theme";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
    <ThemeProvider theme={generateMuiTheme()}>
    <App />
    </ThemeProvider>,
  document.getElementById("root")
);

