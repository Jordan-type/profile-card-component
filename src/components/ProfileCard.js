import React from 'react'
import './ProfileCard.css'
import avatar from '../images/image-victor.jpg'

function ProfileCard(props) {
    return (
        <div className='card_container'>
            <div className='card_header'>
                <img src={avatar} alt={props.name}/>
            </div>
            <h1 className='card_bold_text'>
                {props.name} <span className='card_normal_text'>{props.age}</span>
            </h1>
            <h2 className="card_normal_text">{props.city}</h2>
            <div className='card_social_info'>
                <div className='card_followers_info'>
                    <h1 className='card_bold_text'>{props.followers}</h1>
					<h2 className='card_smaller_text'>Followers</h2>
                </div>
                <div className='card_likes_info'>
                    <h1 className='card_bold_text'>{props.likes}</h1>
					<h2 className='card_smaller_text'>Likes</h2>
                </div>
                <div className='card_photos_info'>
                    <h1 className='card_bold_text'>{props.photos}</h1>
					<h2 className='card_smaller_text'>Photos</h2>
                </div>
            </div>
        </div>
    )
}


export default ProfileCard