import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/Routes';
import { Provider, teamsTheme } from '@fluentui/react-northstar';


function App() {
  return (
    <Provider theme={teamsTheme}>
    <Router>
      <Routes />
    </Router>
    </Provider>
  );
}

export default App;
