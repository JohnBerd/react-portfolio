import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';

export const theme = createMuiTheme({
  bg: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  start: '#FF8E53',
  end: '#FE6B8B',
  palette: {
    primary: {
      main: '#FF8E53',
      dark: '#080218',
      contrastText: '#FE6B8B',
    },
    secondary: {
      main: '#FF8E53',
      contrastText: '#0f0430',
    },
    background: {
      default: "#0f0430"
    },
  },
  overrides: {
    MuiStepLabel: {
      color: '#080218',
        label: {
            color: '#080218',
            '&$active': {
                color: '#d4af37',
            },
            '&$completed': {
              color: '#d4af37',
          },
        },
    },
},
});