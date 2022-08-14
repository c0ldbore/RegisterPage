import './App.css';
import { RegisterForm } from './Components/Register/RegisterForm'

/**************************************
 * 
 * React Typescript
 * Author: Sidney Wittman
 * Last edited: 13-August-2022
 * 
 * About: J
 * 
 **************************************/

 type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  error: void;
};


const App = (): JSX.Element => {
  return (
      <>
        <RegisterForm onSuccess={() => null } />
      </>
  );
};

export default App;