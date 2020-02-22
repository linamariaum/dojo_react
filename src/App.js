import React from 'react';
import Layout from './containers/Layout'
import Tasks from './containers/Tasks/Tasks';
//npm start
function App() {
  return (
    <div className="App">
    <Layout>
      <Tasks/>
    </Layout>
    </div>
  );
}

export default App;
