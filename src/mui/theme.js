import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export default function generateMuiTheme() {
  return responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: ["SF Pro", "Arial", "sans-serif"].join(","),
      },

      palette: {
        type: "dark",
        text: { primary: "#fff", secondary: "#9fa0a7" },
        success: { main: "#4aa96c" },
        error: { main: "#D32F2F" },
        divider: "#3B3A48",
        background: {
          default: "#212032",
          paper: "#333244",
        },
        primary: {
          main: "#1178F8",
          primaryMain: "#596BFF",
        },
        secondary: {
          main: "#000",
          contrastText: "#fff",
        },
        common: { white: "#fff", black: "#000", sidePanel: "#3D3C4E" },
        red: {
          150: "#E03B34",
        },
        darkTheme: {
          one: "#FFFFFF",
          two: "#EFEFEF",
          three: "#DADADA",
          four: "#818181",
          five: "#6F767E",
          six: "#404B53",
          seven: "#232830",
          slightLighter: "#1A1C22",
          main: "#050A0E",
          eight: "#26282C",
          contrastText: "#95959E",
        },
      },
      overrides: {
        MuiTypography: {
          root: { color: "#fff" },
        },
        MuiTooltip: {
          tooltip: {
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#000",
          },
        },
      },
    })
  );
}
