import React, { Component } from 'react'


class DateComponent extends Component {
    constructor(props) {
        super(props)

        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date
        }
    }


    render() {
        return (
            <div>
                {this.state.date}
            </div>
        )
    }
}

export default DateComponent
