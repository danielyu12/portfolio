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
import ExperiencePage from './pages/ExperiencePage';
import Root from './Root';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about-me" element={<PersonalPage />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
