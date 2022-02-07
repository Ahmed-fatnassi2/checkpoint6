import React from "react";
import "./Profile.css";
class Profile extends React.Component {
    state = {
        fullName: "Ahmed Fatnassi",
        bio: "A 19 years old student",
        imgSrc: <img src="./Photo.jpg" width={100} />,
        profession: "Student",
    };
    render() {
        return (
            <div className="pr">
                <ul>
                    <li>
                        FULLNAME: {this.state.fullName}
                        <br />
                    </li>
                    <li>
                        BIO/ {this.state.bio}
                        <br />
                    </li>
                    <li>
                        PROFESSION: {this.state.profession}
                        <br />
                    </li>
                    <li>
                        PROFILE IMAGE:
                        <br />
                        {this.state.imgSrc}
                        <br />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile;
