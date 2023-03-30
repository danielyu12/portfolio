import './App.css';
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import Root from './Root';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<div>Hi</div>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
