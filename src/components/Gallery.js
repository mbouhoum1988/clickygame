import React, {Component} from 'react';

class Gallery extends Component{
  render() {  
  return (
        this.props.images.map(todo => ( 
          <div className='display-images' key={todo.id} data-pid={todo.id} onClick= {this.props.clickimage}>
              <img className='imginsert' src={todo.title} alt={todo.id} />
          </div>    
         ))
         
    );
  }
}
  
export default Gallery;

