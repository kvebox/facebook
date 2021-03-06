import React from 'react';
import { withRouter } from 'react-router';


class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        // this.props.fetchUser(this.props.userId);
       this.props.fetchUser(this.props.userId);
    }

    gettest(){
        // console.log(this.props.userId);
        console.log(this.props.user);

    }

    render() {
        if (!this.props.user) return null;
        return (
            <div className='profile-header'>
            {/* <img src={props.currentUser.profilePic} /> */}
                <div>
                    <img className="placeholder" src="https://2.bp.blogspot.com/-VkDNVsRGYXU/XNB-EKNKlSI/AAAAAAAABUA/A3SKtQ-hyUUcAsuOrfISYksxvPEcmO8JQCKgBGAs/s1600/2.png"/>
                </div>

                <div className='profileInfoContainer'>
                    <div className='profilePictureCrop'>
                        <img className='profilePicture' src='/images/profile_2.png'/>
                    </div>
                    <div className='profileName'>{this.props.user.first_name} {this.props.user.last_name}</div>
                </div>


                <ul className="profile-nav">
                    <li className="profile-nav-target"><a href="#">Timeline</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Archive</a></li>
                    <li className="last"><a href="#">More</a></li>
                </ul>
            </div>
        )
    }

}

export default withRouter(ProfileHeader);