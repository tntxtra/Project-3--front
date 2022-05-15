import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar.jsx';
import {Form} from './components/forms/FormPage';

const App = () => {
  const [shouldRender, toggleShouldRender] = useState(false);

  // In a "function component" we return all of the JSX that we need to render to the page
  return (
      // In React, you can only return 1 JSX element at a time

      // This is a fragment and it does not render to the page
      // It's useful for returning 2+ JSX elements
      

          <NavBar />

          
  )
       
  };
export default App;
