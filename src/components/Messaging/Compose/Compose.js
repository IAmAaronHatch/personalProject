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
        this.props.createMessage(this.state.message)
        window.location.reload();
    }
    
    render() {
        return (
            <section className="Compose__parent">
                <div className="Compose__top">

                    <div className="Compose__profile-picture">
                        <ProfileIcon />
                    </div>

                    <input className="Compose__input"
                        placeholder="Chat With The Community!"
                        onChange={this.handleText} />

                </div>

                <div className="Compose__bottom">
                    <button onClick={this.handleClick}>Compose</button>
                </div>
            </section>
        )
    }
}
export default connect(null, { createMessage })(Compose) 