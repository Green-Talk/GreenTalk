//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './app-routes';

function App() {
/*  const [count, setCount] = useState(0)*/

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path || 'root'} path={route.path} element={route.element}>
            {route.children?.map((child) => (
              <Route
                key={child.path || 'index'}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App
