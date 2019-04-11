
import React, { Component } from 'react'
import './Buttons.css';
export default class Buttons extends Component {
    
    state = {
        value: this.props.pages,
        previous: true,
        next: false
    }
    
    componentDidMount() {
        this.setState({
            value: this.props.pages
        })
        //  console.log("Component",this.state.value);
    }

    // Buttonval = (e) => {
    //     console.log("vale of changeAPI", this.state.value);
    //     if (e === 1) {
    //         this.setState({
    //             value: e,
    //             previous: true,
    //             next: false
    //         },

    //         )

    //     }
    //     else if (e === 4) {
    //         this.setState({
    //             value: e,
    //             next: true,
    //             previous: false,

    //         },


    //         )

    //     }
    //     else if(e==="Previous")
    //     {
    //         if(this.state.value===1)
    //         {
    //             this.setState({
    //                 previous: true,
    //                 next: false
    //             })
    //         }
    //     }
    //     else {
    //         this.setState({
    //             value: e,
    //             previous: false,
    //             next: false,

    //         },

    //         )

    //     }
    // }

    render() {
        const { changeApi } = this.props;
        
        //console.log("Value of State ",this.state.value);
        
        return (
            <div className="row rowamend" role="group" aria-label="First group">
                <button onClick={() => { changeApi(1); }} type="button" className="btn btn-secondary mr-1 ">First</button>
                <button onClick={() => {changeApi("Previous");}} type="button" disabled={this.props.pages===1 ? true:false} className="btn btn-secondary mr-1">Previous</button>
                <button onClick={() => { changeApi(1); }} type="button" className="btn btn-secondary mr-1 ">1</button>
                <button onClick={() => { changeApi(2); }} type="button" className="btn btn-secondary mr-1">2</button>
                <button onClick={() => { changeApi(3);}} type="button" className="btn btn-secondary mr-1">3</button>
                <button onClick={() => { changeApi(4); }} type="button" className="btn btn-secondary mr-1">4</button>
                <button onClick={() => changeApi("Next")} type="button" disabled={this.props.pages===4 ? true:false} className="btn btn-secondary mr-1">Next</button>
                <button onClick={() => { changeApi(4); }} type="button" disabled={this.props.pages===4 ? true:false} className="btn btn-secondary mr-1">Last</button>
                
            </div>
        )
    }
}
