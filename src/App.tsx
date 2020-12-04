import React from 'react';
import './App.css';
import {InputPage} from "./components/InputPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  return (
      <div >
        <InputPage/>
      </div>
  );
}

export default App;
