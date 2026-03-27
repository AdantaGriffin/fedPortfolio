import styles from './App.module.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Components/Root/root';
import Home from './Components/Pages/Home/home';
import About from './Components/About/about';
import Projects from './Components/Pages/Projects/projects';
import Library from './Components/Pages/Library/library';
import Places from './Components/Pages/Places/places';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="library" element={<Library/>}/>
    <Route path="places" element={<Places/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="all" element={""}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouter}/>
    </div>
  );
}

export default App;
