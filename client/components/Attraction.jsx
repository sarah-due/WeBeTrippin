import React from 'react'
import {connect} from 'react-redux'


let Attraction = (props) => {
  console.log(props)
  return (
    <div>
      <h1> Hello</h1>
      <h1>{attraction}</h1>
      <img src={img} />
    </div>
  )
}

function mapStateToProps(state) {
    return {
      attraction: state.attraction,
      img: state.img
    }
}

export default connect(mapStateToProps)(Attraction)
