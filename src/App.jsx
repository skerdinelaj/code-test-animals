import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {path: '/about', element: <AboutUs />},
        {path: '/contact', element: <ContactUs />}
      ]
    }
  ])
  return <RouterProvider router={Router} />
};

export default App;

