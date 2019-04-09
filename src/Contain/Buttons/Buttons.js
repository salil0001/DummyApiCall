
import React, { Component } from 'react'
import './Buttons.css';
export default class Buttons extends Component {
    state = {
        value: 1,
        previous: true,
        next: false
    }
    componentDidMount() {
        this.setState({
            value: this.props.pages
        })
        //  console.log("Component",this.state.value);
    }

    Buttonval = (e) => {
        console.log("vale of changeAPI", this.state.value);
        if (e === 1) {
            this.setState({
                value: e,
                previous: true,
                next: false
            },

            )

        }
        else if (e === 4) {
            this.setState({
                value: e,
                next: true,
                previous: false,

            },


            )

        }
        else {
            this.setState({
                value: e,
                previous: false,
                next: false,

            },

            )

        }




    }

    render() {
        const { changeApi } = this.props;



        return (
            <div className="row rowamend" role="group" aria-label="First group">
                <button onClick={() => changeApi("Previous")} type="button" disabled={this.state.previous} className="btn btn-secondary mr-2">Previous</button>
                <button onClick={() => { changeApi(1); this.Buttonval(1) }} type="button" className="btn btn-secondary mr-2 ">1</button>
                <button onClick={() => { changeApi(2); this.Buttonval(2) }} type="button" className="btn btn-secondary mr-2">2</button>
                <button onClick={() => { changeApi(3); this.Buttonval(3) }} type="button" className="btn btn-secondary mr-2">3</button>
                <button onClick={() => { changeApi(4); this.Buttonval(4) }} type="button" className="btn btn-secondary mr-2">4</button>
                <button onClick={() => changeApi("Next")} type="button" disabled={this.state.next} className="btn btn-secondary mr-2">Next</button>

            </div>
        )
    }
}
