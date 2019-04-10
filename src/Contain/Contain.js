import React, { Component } from 'react'
import Buttons from './Buttons/Buttons';
import axios from 'axios';
import './Contai.css'
export default class Contain extends Component {
  state = {
    names: [],
    pages: 1,


  }

  changeApi = (page) => {

    if (page === "Previous") {
      this.setState({
        pages: this.state.pages - 1
      },
        this.callApiAgain
      )
    }
    else if (page === "Next") {
      this.setState({
        pages: this.state.pages + 1
      },
        this.callApiAgain
      )
    }
    else {

      this.setState({
        pages: page
      },
        this.callApiAgain
      )
    }

    console.log("Pages ", this.state.pages)
  }

  //console.log(this.state.pages)


  callApiAgain = () => {
    axios.get(`https://reqres.in/api/users?page=${this.state.pages}`)
      .then(res => {
        this.setState({
          names: res.data.data

        })

        // console.log("API ",res.data.data);
      }


      )
  }

  componentDidMount() {
    this.callApiAgain();
  }
  render() {
    const { names } = this.state;
    const nameList = names.length ? (
      names.map(name => {
        return (

          <div className="col-md-4 col-sm-12 p-2" key={name.id}>
            <div className="card" style={{ width:"100%" }}>
              <img src={name.avatar} className="editImage" />
              <div className="card-body">
                <h5 className="card-title">{name.first_name} {name.last_name}</h5>
              </div>
            </div>
          </div>

          )
      })
    ) :
      (
        <div>No Names Yet</div>

      )
    return (



      <div>
        <div className="container">
          <div className="row justify-content-center">
            {nameList}
          </div>
        </div>

        <div style={{ paddingTop: "15px" }}>

          <Buttons changeApi={this.changeApi} pages={this.state.pages} />
        </div>
      </div>
    )
  }
}
