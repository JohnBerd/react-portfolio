import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

export const theme = createMuiTheme({
  bg: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  start: "#FF8E53",
  end: "#FE6B8B",
  palette: {
    primary: {
      main: "#FF8E53",
      dark: "#080218",
      contrastText: "#FE6B8B",
    },
    secondary: {
      main: "#FF8E53",
      contrastText: "#0f0430",
    },
    background: {
      default: "#0f0430",
    },
  },

  overrides: {
    MuiCardContent: {
      root: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0,
       },
      },
    },
    MuiStepLabel: {
      color: "#080218",
      label: {
        color: "#fff",
        "&$active": {
          color: "#fff",
        },
        "&$completed": {
          color: "rgba(255,255,255,.4)",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Baloo", "serif"].join(","),
  },
});

theme.typography.body1 = {
  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
  color: "rgba(0,0,0,.6)",
}

theme.typography.body2 = {
  fontSize: 'clamp(1.2rem, 2.2vw, 1.3rem)',
  color: "rgba(0,0,0,.7)",
}

theme.typography.h3 = {
  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
  color: "rgba(0,0,0,.8)",
  fontFamily: "baloo, serif",
  fontWeight: "400",
}

theme.typography.h2 = {
  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
  color: "rgba(0,0,0,.8)",
  fontFamily: "baloo, serif",
  fontWeight: "400",
}

theme.typography.h4 = {
  fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)',
  color: "rgba(0,0,0,.8)",
  fontFamily: "baloo, serif",
  fontWeight: "400",
}