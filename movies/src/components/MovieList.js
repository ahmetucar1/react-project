import React from 'react';

const MovieList = (props) => {

    

        return (
          <div className="row m-2">

            {props.movies.map((movie) => (

                 <div className="col-sm-4" key={movie.id}>
                 <div className="card mb-4 shadow-sm">
                   <img src= {movie.imageURL} className="card-img-top img-thumbnail" alt="Sample Movie" ></img>
                   <div className="card-body">
                       <h5 className="card-title"> {movie.title} </h5>
                       <p className="card-text"> {movie.overview} </p>
                       <div className="d-flex justify-content-between align-items-center">
                          <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                          <h2><span className="badge badge-info"> {movie.rating} </span></h2>
                     </div>    
                   </div>
                 </div>
             </div>

            ))}
              

          </div>      
        )
    
}
export default MovieList;
