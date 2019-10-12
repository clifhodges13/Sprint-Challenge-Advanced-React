import React, { Component } from 'react'
import axios from 'axios'

export default class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.players.map((plyr, index) => {
           return (
             <div key={index}>
                <h3>Player Name: {plyr.name}</h3>
                <p>Country: {plyr.country}</p>
                <p>Number of Searches: {plyr.searches}</p>
             </div>
           )
        })}
      </div>
    )
  }
}
