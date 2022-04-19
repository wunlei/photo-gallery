import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import './App.scss';
import { AppContextProvider } from 'contexts/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </AppContextProvider>
  );
}

export default App;
