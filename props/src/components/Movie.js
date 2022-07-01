import {Component} from 'react';

export default class Movie extends Component{
    obj = this.props.data;
    render(){
        return(
            <div className='movie-item'>
                <img src={this.obj.imageURL} alt={this.obj.id}/>
                <h3>{this.obj.name} {this.obj.year} {this.obj.attr}</h3>

            </div>
        )
    }
}