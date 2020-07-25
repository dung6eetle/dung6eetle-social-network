import React from 'react'
import classes from './MyProfile.module.css'
import Preloader from '../../common/Preloader'
import userPhotoAnonimus from '../../../assets/anonymous.svg'
import sunny from '../../../assets/sun.svg'
import watermelon from '../../../assets/watermelon.svg'
import myPhoto from '../../../assets/hacker.svg'
import ProfileStatus from './ProfileStatus'
import MyProfileStatus from './MyProfileStatus'


function MyProfile(props) {
  
    if (!props.profile) {
        return <Preloader/>
    }
    if (!props.profile.photos) {
        return <Preloader/>
    }
    
    return (<>
        <div className={classes.myProfile__container}>
          <div className={classes.myProfile__title}>
              Artyoma Pupkins
              <span><img className={classes.imgStatus} src={watermelon}></img></span>
          </div>
          <div className={classes.status}>
            <MyProfileStatus myStatus={props.myStatus} updateStatus={props.updateStatus}/>
          </div>
          <div className={classes.itemPhoto}>
             <img className={classes.myPhoto} src={myPhoto}></img>
          </div>
          <div className={classes.itemDiscription}>
              <p>ABOUT ME..</p>
          </div>
        </div>

        <div className={classes.myProfile__container}>
          <div className={classes.myProfile__title}>
              {props.profile.fullName}
              <img className={classes.imgStatus} src={sunny}/>
          </div>
          <div className={classes.status}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
          </div>
          <div className={classes.itemPhoto}>
            <img src={props.profile.photos.large != null ? props.profile.photos.small : userPhotoAnonimus}/>
          </div>
          <div className={classes.itemDiscription}>
             <p>{props.profile.aboutMe != null ? props.profile.aboutMe : <p>ABOUT ME..</p>}</p>
          </div>
        </div>
        
       </> 
    )
}
export default MyProfile


