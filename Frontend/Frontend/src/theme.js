import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'var(--primary)',
    },
    secondary: {
      main: 'var(--accent)',
    },
    background: {
      default: 'var(--page-bg)',
      paper: 'var(--surface)',
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-muted)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--border-soft) !important',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary) !important',
          '&:hover': {
            backgroundColor: 'var(--border-soft) !important',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary) !important',
          borderBottom: '1px solid var(--border) !important',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--border-soft) !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'var(--surface) !important',
            color: 'var(--text-primary) !important',
            '& fieldset': {
              borderColor: 'var(--border) !important',
            },
            '&:hover fieldset': {
              borderColor: 'var(--primary) !important',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--primary) !important',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--text-muted) !important',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--border) !important',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'var(--text-primary) !important',
          '&:hover': {
            backgroundColor: 'var(--border-soft) !important',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
          boxShadow: 'var(--card-shadow) !important',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--surface) !important',
          color: 'var(--text-primary) !important',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiSnackbarContent-root': {
            backgroundColor: 'var(--surface) !important',
            color: 'var(--text-primary) !important',
          },
        },
      },
    },
  },
});

export default theme;
