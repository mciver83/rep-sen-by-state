import React from 'react'

export default function List(props) {
  return (
    <div style={{flex: 1, marginRight: 50}}>
      <h3>List / <span style={{color: '#1a73e8'}}>{props.selectedType}</span></h3>
      <table style={{width:"100%", borderCollapse: 'collapse'}} cellPadding="10">
        <thead style={{backgroundColor: '#e9e9e9', textAlign: 'left'}}>
          <tr style={{padding: 20}}>
            <th>Name</th>
            <th>Party</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(person => {
            return (
              <tr key={`${person.name}${person.party}`}  onClick={() => props.handleRepClick(person)} style={{borderBottom: '1px solid #e9e9e9'}}>
                <td>{person.name}</td>
                <td>{person.party[0]}</td> 
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}