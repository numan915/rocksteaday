import React from 'react';
import './style.css';
// import { Table } from 'react-bootstrap';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      countries: []
    }
  }

  
  componentDidMount(){ 
      
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(countries => this.setState({ countries:countries }))
.catch(err => console.log("Error:", err));

  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}

  render() {

    return <div className="drop-down">
      <h3>countries list</h3>
      <div className="flag-container">
        <p>add flag</p>
      </div>
      <select id="continent">{
        
        this.state.countries.map(countrie => <option value={this.state.countrie}>{countrie.name}
        </option>)
        }
        </select>
      <p> Capital: </p>
        <p>Dialing Code: </p>
        <p>Population: </p>
        <p>Currencies: </p>
        <p>Region: </p>
        <p>Subregion: </p>
      
    
        
                               
        
      </div>
  }
}

export default Countries;