import React from 'react';
const Hoc = (WrappedComponent) => {
    const colour = ["red","green","blue","pink","cyan"];
    var n = Math.random();
    console.log('n : ',n); 
    const num = Math.floor( n * 5);
    console.log('num : ',num);
    const randomColour = colour[num];
    console.log('randomColour : ',randomColour);
    const className =  randomColour + '-text';
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Hoc;