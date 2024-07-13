import React from 'react'

function Alert(props){
    return(
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>{props.alert.type}</strong>{props.alert.message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )

}
export default Alert