
//components
import Header from './components/header/Header'   //  ../ move you out of src folder and ./ inside src folder
import Home from './components/home/Home';
import LoginDialog from './components/login/LoginDialog';

import {Box} from '@mui/material';

function App() {
  return (
    <div>
      <Header/>
      <Box style={{marginTop: 54}}>
        <Home/>
        <LoginDialog/>
      </Box>
    </div>
  );
}

export default App;
