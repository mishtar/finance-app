import React from 'react';
import Login from './Login';
import './App.css';

function App() {
  return(    
    <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </div>
  )
}

export default App;
