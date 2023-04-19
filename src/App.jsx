import './App.css';
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PersonalPage from './pages/PersonalPage';
import ResumePage from './pages/ResumePage';
import Root from './Root';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about-me" element={<PersonalPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
