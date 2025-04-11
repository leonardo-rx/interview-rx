import { useState } from 'react';
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import PropTypes from 'prop-types';
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import Exercise6 from './pages/Exercise6';
import Exercise7 from './pages/Exercise7';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderRadius: 8,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 120,
          '&.Mui-selected': {
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

function App() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            sx={{ 
              minHeight: 64,
              '& .MuiTab-root': {
                '&.Mui-selected': {
                  background: 'none',
                  boxShadow: 'none',
                  border: 'none',
                },
                '&:focus': {
                  outline: 'none',
                },
                '&.Mui-focusVisible': {
                  outline: 'none',
                }
              },
              '& .MuiTabs-indicator': {
                height: '3px'
              }
            }}
          >
            <Tab label="Exercise 1 - Find Product" />
            <Tab label="Exercise 2 - Table Elements" />
            <Tab label="Exercise 3 - Checkbox Verification" />
            <Tab label="Exercise 4 - Element Relations" />
            <Tab label="Exercise 5 - Login Command" />
            <Tab label="Exercise 6 - Product Selection" />
            <Tab label="Exercise 7 - API Intercept" />
          </Tabs>
        </Container>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <TabPanel value={tabValue} index={0}>
          <Exercise1 />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Exercise2 />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Exercise3 />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Exercise4 />
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <Exercise5 />
        </TabPanel>
        <TabPanel value={tabValue} index={5}>
          <Exercise6 />
        </TabPanel>
        <TabPanel value={tabValue} index={6}>
          <Exercise7 />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App;
