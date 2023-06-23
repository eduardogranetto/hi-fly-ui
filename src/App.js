import React, { Component } from 'react';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
      };
   }

   componentDidMount() {
      fetch('https://hi-fly.fly.dev/')
         .then((response) => response.json())
         .then((data) => this.setState({ data: data }))
         .catch((error) => console.log(error));
   }

   render() {
      const { data } = this.state;
      return (        
        <div>Loading...</div>,
        <h1>Code: {data.code}</h1>,
        <h1>Hi Var: {data.hiVar}</h1>,
        <h1>Version: {data.versionSha}</h1>
      );
   }
}

export default App;
