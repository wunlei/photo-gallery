import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
