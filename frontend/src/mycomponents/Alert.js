import React from 'react'

const Alert = (props) => {
  return (
    props.alert&& <div>
      <div className="alert alert-primary" role="alert">
      {props.alert.msg}::{props.alert.type}

</div>
    </div>
  )
}

export default Alert
