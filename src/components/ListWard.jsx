import React, { Component } from 'react'

export default class ListWard extends Component {
    state = {
        isPen : false,
    }
    renderList = () => {
        return(
            <li className='ward1'>
        <span>{this.props.details.name}</span>
       <div className='bit'>
         <button onClick={() => this.toggle()}>Edit</button>
         <button onClick={() => {this.props.deleteWard(this.props.i)}}>Delete</button>
       </div>
      </li>
        )
    }

    toggle = () => {
        let {isPen} = this.state;
        this.setState({
            isPen : !isPen
        })
    }
    updateVal = (e) => {
        e.preventDefault();
        this.props.editWard(this.props.i  , this.input.value);
        this.toggle();
    }

    renderForm = () => {
        return(
            <form onSubmit={this.updateVal} className='ward2'>
                <input type="text" ref={v => {this.input = v}} defaultValue={this.props.details.name} />
                <button>update</button>
            </form>
        )
    }
  render() {
    let {isPen} = this.state;
    return (
        <>
            {isPen ?this.renderForm() : this.renderList() }
      </>
    )
  }
}
