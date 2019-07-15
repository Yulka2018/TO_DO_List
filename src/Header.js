import React, { Component } from 'react';
import './App.css';


class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <h1> TO DO LIST</h1>
                <div className='Input'>
                    <input type='text' placeholder='title'></input>
                    <button> Add </button>
                </div>
            </div>
        )
    }
}

export default Header;
