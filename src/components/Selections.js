import React, { Component } from 'react'

class Selections extends Component {
  constructor() {
    super()

    this.state = {
      state: '',
      type: '',
      error: '',
      stateList: [
        { value: "AK", text: "Alaska" },
        { value: "AL", text: "Alabama" },
        { value: "AR", text: "Arkansas" },
        { value: "AZ", text: "Arizona" },
        { value: "CA", text: "California" },
        { value: "CO", text: "Colorado" },
        { value: "CT", text: "Connecticut" },
        { value: "DE", text: "Delaware" },
        { value: "FL", text: "Florida" },
        { value: "GA", text: "Georgia" },
        { value: "HI", text: "Hawaii" },
        { value: "IA", text: "Iowa" },
        { value: "ID", text: "Idaho" },
        { value: "IL", text: "Illinois" },
        { value: "IN", text: "Indiana" },
        { value: "KS", text: "Kansas" },
        { value: "KY", text: "Kentucky" },
        { value: "LA", text: "Louisiana" },
        { value: "MA", text: "Massachusetts" },
        { value: "MD", text: "Maryland" },
        { value: "ME", text: "Maine" },
        { value: "MI", text: "Michigan" },
        { value: "MN", text: "Minnesota" },
        { value: "MO", text: "Missouri" },
        { value: "MS", text: "Mississippi" },
        { value: "MT", text: "Montana" },
        { value: "NC", text: "North Carolina" },
        { value: "ND", text: "North Dakota" },
        { value: "NE", text: "Nebraska" },
        { value: "NH", text: "New Hampshire" },
        { value: "NJ", text: "New Jersey" },
        { value: "NM", text: "New Mexico" },
        { value: "NV", text: "Nevada" },
        { value: "NY", text: "New York" },
        { value: "OH", text: "Ohio" },
        { value: "OK", text: "Oklahoma" },
        { value: "OR", text: "Oregon" },
        { value: "PA", text: "Pennsylvania" },
        { value: "RI", text: "Rhode Island" },
        { value: "SC", text: "South Carolina" },
        { value: "SD", text: "South Dakota" },
        { value: "TN", text: "Tennessee" },
        { value: "TX", text: "Texas" },
        { value: "UT", text: "Utah" },
        { value: "VA", text: "Virginia" },
        { value: "VT", text: "Vermont" },
        { value: "WA", text: "Washington" },
        { value: "WI", text: "Wisconsin" },
        { value: "WV", text: "West Virginia" },
        { value: "WY", text: "Wyoming" }
      ]
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  } 

  handleSubmit = async () => {
    this.setState({
      error: ''
    })
    let { state, type } = this.state
    if (!state || !type) {
      this.setState({
        error: 'you must make selections'
      })
      return;
    }
    let response = await fetch(`http://localhost:3000/${type}/${state}`).then(res => res.json())
    let results = response.results
    let newState = {
      results,
      selectedType: this.state.type
    }
    this.props.updateAppState(newState)
  }

  render() {
    return (
      <div>
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
        <select name="type" id="" onChange={this.handleChange} value={this.state.type}>
          <option value="" disabled>Select Rep/Sen</option>
          <option value="representatives">representatives</option>
          <option value="senators">senators</option>
        </select>
        <select name="state" id="" onChange={this.handleChange} value={this.state.state}>
          <option value="" disabled>Select State</option>
          {this.state.stateList.map(state => {
            return <option key={state.value} value={state.value}>{state.text}</option>
          })}
        </select>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }
}

export default Selections