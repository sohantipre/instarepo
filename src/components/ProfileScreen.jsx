import React from 'react'
import Image from './Image'
import {IoSettingsOutline} from 'react-icons/io5'

const ProfileScreen = () => {
    return (
        <>  
            <div className='profile_details' >
                <Image className="circular_profile_image" src="/images/Profile_pic.jpeg" alt='profile_pic' />   
            
            <div className="profile_info">
                <div className="profile_info_first_line">
                <div className="profile_username">
                    <p style={{ fontSize: '30px' }} >ketanpathare007</p>
                </div>
                <div className="edit_profile_btn">
                    <button>edit profile</button>
                </div>
                <div className="settings_btn">
                    <button><IoSettingsOutline /> </button>
                </div>
                </div>
                <div className="profile_info_second_line">
                <div className="profile_posts">3 posts</div>
                <div className="profile_followers">56 followers</div>
                <div className="profile_following">88 following</div>
                </div>
                <div className="profile_name">Ketan Pathare</div>
                <div className="profile_bio">PICT'23</div>
            </div>
            </div>
            <br />
            <div className="profile_highlights">Highlights Stories</div>
            <br/>
            <div className="profile_all_posts">All posts</div>
        </>
    )
}

export default ProfileScreen
