import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { defaultProps } from 'default-props';

const Profile = (props) => {
    return (
        <div>
            <h1>First Name: {props.fname}</h1> <br></br>
            <h1>Last Name:{props.lname}</h1><br></br>
            <h1>Bio: {props.myBio}</h1><br></br>
            <h1>Profession:{props.pro}</h1>
            {props.children}
        </div>
    );
}
Profile.defaultProps={pro:"no job"}
Profile.propTypes={
    fname:PropTypes.string,
    lname:PropTypes.string,
    pro:PropTypes.string,
    myBio:PropTypes.any,
  }
export default Profile;

