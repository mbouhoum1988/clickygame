import React, {Component} from 'react';

class Header extends Component{
  render() {
    return (
        <header className="app-header">
            <div className="container">
                <button className='link' onClick={this.props.handleReload}><h2>Clicky Game</h2></button>
                <h2>{this.props.guess}</h2>
                <h2>score = {this.props.score} | high score = {this.props.highscore}</h2>
            </div>
        </header>
    )
  }
}

export default Header;
