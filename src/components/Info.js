import React from 'react'

export default function List(props) {
  let { representative } = props
  let name = representative.name.split(' ')
  return (
    <div style={{flex: 1}}>
      <h3>Info</h3>
      <InfoBox label="First Name" value={name[0]} />
      <InfoBox label="Last Name"  value={name[1]} />
      <InfoBox label="District"  value={representative.district} />
      <InfoBox label="Phone"  value={representative.phone} />
      <InfoBox label="Office"  value={representative.office} />
    </div>
  )
}

function InfoBox(props) {
  return (
    <div style={{padding: 10, backgroundColor: '#e9e9e9', marginBottom: 20}}>
      <label style={{color: '#b1b1b1', marginRight: 20}}>{props.label}</label> {props.value}
    </div>
  )
}