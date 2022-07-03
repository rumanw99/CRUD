import React, { Component } from 'react';
import FormWard from './components/FormWard.jsx';
import ListWard from './components/ListWard.jsx';
import './App.css';

class App extends Component {
  state = {
    ward:[
      {name : "html"},
      {name : "css"},
      {name : "recat"}
    ],
    current : "",
  }

  updateWard = (e) => {
    this.setState({
      current : e.target.value
    })
  }
  addWard = (e) => {
    e.preventDefault();
    if(this.state.current === ""){
      alert("Enter Your data");
      return;
    }
    let curre = this.state.current;
    let war = this.state.ward;
    war.push({name : curre})
    this.setState({
      war,
      current:""
    })
  }

  deleteWard = (i) => {
    let war = this.state.ward;
    war.splice(i , 1);
    this.setState({
      war,
    })
  }

  editWard = (i , value) => {
    let wardes = this.state.ward;
    let ward1 = wardes[i];
    ward1["name"] = value;
    this.setState({
      ward1,
    })
  }

  render() {
    const {ward} = this.state;
    const listWard = ward.map((war , i) => {
      return <ListWard details={war} key={i} i={i} deleteWard={this.deleteWard} editWard={this.editWard} />
    })
    return (
      <div className='add'>
        <h1>Add Ward</h1>
        <FormWard updateWard={this.updateWard} addWard={this.addWard} current={this.state.current} />
        <ul>{listWard}</ul>
      </div>
    );
  }
}


export default App;
