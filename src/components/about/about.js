import React from 'react';
import Hoc from './../hoc/hoc'
const About = () =>{
    return(
        <div className="container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla reprehenderit laboriosam cumque optio saepe nam amet numquam tenetur iure, minima eum maiores nobis minus nemo explicabo, repellendus incidunt soluta neque.</p>
        </div>
    );
}

export default Hoc(About);