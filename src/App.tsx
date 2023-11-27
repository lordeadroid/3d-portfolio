import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Hello, world</p>,
  },
]);

const App = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
