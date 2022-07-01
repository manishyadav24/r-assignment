import {Component} from 'react';
import Movie from './Movie';

export default class AppScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            movies : [
                {
                    id : 1,
                    name : "The Avengers",
                    year : 2012,
                    attr : "",
                    imageURL : "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                },
                {
                    id : 2,
                    name : "Avengers : United They Stand",
                    year : 1999,
                    attr : "(TV Series)",
                    imageURL : "https://i.pinimg.com/222x/b8/4d/08/b84d08e617e034b753fbde627f51ca6b.jpg"
                },
                {
                    id : 3,
                    name : "Avengers : Endgame",
                    year : 2019,
                    attr : "",
                    imageURL : "https://i.pinimg.com/736x/5b/f4/a9/5bf4a989ac96489a138b7f2dc223ebd0.jpg"
                },
                {
                    id : 4,
                    name : "Avengers : Infinity War",
                    year : 2018,
                    attr : "",
                    imageURL : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
                },
                {
                    id : 5,
                    name : "Avengers : Age Of Ultron",
                    year : 2015,
                    attr : "",
                    imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMJdFWaakf7NQo5mlD7eRQcK0Dgi9v2mRNg&usqp=CAU"
                },
                {
                    id : 6,
                    name : "Avengers Assemble",
                    year : 2012,
                    attr : "(TV Series)",
                    imageURL : "https://i.pinimg.com/474x/63/d6/41/63d641d8eb2b062a6d3f5acd2112022b.jpg"
                },
                {
                    id : 7,
                    name : "The Avengers : Earth's Mightiest Heroes",
                    year : 2010,
                    attr : "(TV Series)",
                    imageURL : "https://dpwhatsapp.xyz/wp-content/uploads/2021/06/Avengers-Profile-Pic.jpg"
                },
                {
                    id : 8,
                    name : "The Avengers",
                    year : 1961,
                    attr : "(TV Series)",
                    imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuC6tmQD8MsMx3rOaPyntHp_ki1_D1Yu0vkA&usqp=CAU"
                },

            ]
        }
    }

    render(){
        return(
            <>
            <h1 align="center" style={{color : 'white'}}> Avengers Movies</h1>

            {
                this.state.movies.map((movie)=>(
                    <Movie key={movie.id} data={movie}/>
                ))
            }
            </>
        )
    }
}