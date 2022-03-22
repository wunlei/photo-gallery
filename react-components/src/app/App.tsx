import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
