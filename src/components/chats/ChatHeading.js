import React from 'react'

function chatHeading ({name, numberOfUsers}) {

    return (
        <div>
            <div>
                <div>{name}</div>
                <div>
                    <div></div>
                    <span>{numberOfUsers ? numberOfUsers : null}</span>
                </div>
            </div>
        </div>
    )
}

export default chatHeading