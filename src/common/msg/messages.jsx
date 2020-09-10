import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import '../../../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
    <ReduxToastr 
        timeOut={4000}
        newestOnTop={false}
        position='bottom-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
        //timeOut={0}
        //closeOnToastrClick
        //removeOnHover={false}
        //removeOnHoverTimeOut={100000}
        //preventDuplicates={true}
         />
)