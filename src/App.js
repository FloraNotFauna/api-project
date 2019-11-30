import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/search?term=jack+johnson&limit=25")
      .then(results) => {
          return results.json();
        }).then(data => {
          let items = data.results.map((item) => {
            return(
              <div key={item.results}>
                <img src={item.results.} />
              </div>
            )
          })
        (items) => {
          this.setState({items : items});
          console.log("state", this.state.items);
        })
  }

  render() {
      return (
        <div className= "bodydiv">
        <div className= "titlediv">
          <h1 classname= "AN"> Artists Name </h1>
          
        </div>
        <div className= "container1">
          <div> className= "container2">
            {this.state.items}
          </div>
          <div> </div>
        </div>  
        </div>
      );
    }
  }
}


export default App;
