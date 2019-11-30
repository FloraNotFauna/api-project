import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/search?term=jack+johnson&limit=25")
      .then(res => res.json())
      .then(
        (result) => {
          
          console.log(result);
          
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <div>
        
          {items.map(item => (

          <p>{item.artistName} ({item.trackName})</p> 
          ))}
          
      </div>  
        
      );
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
);

export default App;
