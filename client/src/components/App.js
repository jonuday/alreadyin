// App.js
// Render handles the react router
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// placeholder components

const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Check = () => <h2>Check</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/check" component={Check} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
