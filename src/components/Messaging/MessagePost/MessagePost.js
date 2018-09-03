import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProfileIcon from 'react-icons/lib/md/person-outline';
import ReplyIcon from 'react-icons/lib/md/chat-bubble-outline';
import FavoriteIcon from 'react-icons/lib/md/favorite-outline';
import MessageIcon from 'react-icons/lib/md/mail-outline';


import './MessagePost.css';


//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT

class MessagePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            showMasterMenu: false
        };
    }

    // This puts the post into EDIT mode when the EDIT button is clicked from the drop-down
    // showEdit = () => {
    //     this.setState({ editing: true, showMasterMenu: false });
    // }

    // This puts the post back into normal viewing mode when the CANCEL button is clicked
    // This method is passed down to the <Edit /> component via props
    // hideEdit = () => {
    //     this.setState({ editing: false });
    // }

    // This toggles the drop-down when the three dots in the top right corner of a post are clicked
    // toggleMasterMenu = () => {
    //     this.setState({ showMasterMenu: !this.state.showMasterMenu });
    // }

    // This hides the drop-down when the post is clicked anywhere
    // hideMasterMenu = () => {
    //     if (this.state.showMasterMenu === true) {
    //         this.setState({ showMasterMenu: false });
    //     }
    // }

    render() {
        // console.log(this.props.messages);
        return (
            <section className="Post__parent" onClick={this.hideMasterMenu}>

                <div className="Post__master-controls">
                    {/* <MasterControlIcon onClick={this.toggleMasterMenu} /> */}

                </div>

                <div className="Post__meta-data">
                    <div className="Post__profile-picture">
                        {
                            this.props.user ?
                                <img className='icon' src={this.props.user.profile_pic} alt='' /> :
                                <ProfileIcon />
                        }
                    </div>

                    <span className="Post__name">{this.props.user.name}</span>
                    <span className="Post__handle">@{this.props.user.name}</span>

                    {/* <span className="Post__date">- {date}</span> */}
                </div>

                <div className="Post__content">
                        
                    {this.props.message.message}

                </div>

                <div className="Post__user-controls">
                    <ReplyIcon className="Post__control-icon" />
                    <FavoriteIcon className="Post__control-icon" />
                    <MessageIcon className="Post__control-icon" />
                </div>

            </section>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data,
        messages: state.message.messages
    }
}

export default connect(mapStateToProps)(MessagePost)