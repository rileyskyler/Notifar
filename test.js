import React, { Component } from 'react';

class Test extends Component {
    constructor(){
        this.state = {
            array: [
                {
                    name: 'hello'
                },
                {
                    name: 'skyler'
                },
                {
                    name: 'hello'
                }
            ]
        }
    }

    render() {

        const displayArray = this.state.array.map((elem)=>{
            return (
                <div>
                    <h1>
                        {elem.name}
                    </h1>
                </div>
            )
        })


        return (
            <div>
                {displayArray}
            </div>
        );
    }
}

export default Test;