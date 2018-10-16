import React from 'react'

function ErrorHandler({ err, children }) {
    return (
        err ?
            <div>Your data is unavailable</div>
            :
            children
    )
}

export default ErrorHandler
