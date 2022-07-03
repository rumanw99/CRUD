import React, { Component } from 'react';

class FormWard extends Component {
    render() {
        return (
            <form className='addForm'>
                <input type="text" value={this.props.current} onChange={this.props.updateWard} />
                <button type='submit' onClick={this.props.addWard}>Add Ward</button>
            </form>
        );
    }
}

export default FormWard; 