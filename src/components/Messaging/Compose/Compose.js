import React, { Component } from 'react';
import ProfileIcon from 'react-icons/lib/md/person-outline';
import { connect } from 'react-redux'
import { createMessage } from '../../../redux/reducers/message'

import './Compose.css';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT
class Compose extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
    }

    handleText = (e) => {
        this.setState({ message: e.target.value });
    }
    handleClick = () => {
        this.props.createMessage(this.props.inputVal)
        window.location.reload();
    }
    
    render() {
        return (
            <section className="Compose-parent">
                <div className="Compose__top">

                    <div className="Compose__profile-picture">
                        <ProfileIcon />
                    </div>

                    <input className="Compose__input"
                        placeholder="Chat With The Community!"
                        value={this.props.inputVal}
                        onChange={(e)=>this.props.handleChange(e.target.value)} />

                    <button className='Compose' onClick={this.handleClick}>Compose</button>

                </div>
            </section>
        )
    }
}
export default connect(null, { createMessage })(Compose) 