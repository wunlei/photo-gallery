import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'app/App';
import AboutUs from 'views/AboutUs/AboutUs';
import MainPage from 'views/Main/Main';
import NotFound from 'views/NotFound/NotFound';
import Contribute from 'views/Contribute/Contribute';
import PhotoPage from 'views/PhotoPage/PhotoPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />}></Route>
          <Route path="photo/:photoId" element={<PhotoPage />} />
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="contribute" element={<Contribute />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
