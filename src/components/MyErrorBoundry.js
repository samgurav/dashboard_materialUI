import React from 'react'

function MyErrorBoundry() {
    return (
        <div>
            <p>index.js:1 Warning: Received `true` for a non-boolean attribute `exact`.

If you want to write it to the DOM, pass a string instead: exact="true"</p>
        </div>
    )
}

export default MyErrorBoundry
