import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./User/Profile";

class App extends React.Component {
    state = {
        show: false,
        chrono: 0,
    };
    showProfile = () => {
        this.setState({ show: !this.state.show });
    };
    componentDidMount = () => {
        setInterval(() => {
            this.setState({ chrono: this.state.chrono + 1 });
        }, 1000);
        console.log("From componentDidMount");
    };
    componentDidUpdate = () => {
        console.log("From componentDidUpdate");
    };
    componentWillUnmount = () => {
        console.log("From componentWillUnmount");
    };
    render() {
        return (
            <div className="App">
                <button className="button" onClick={this.showProfile}>
                    {!this.state.show ? "show" : "hide"}
                </button>
                {this.state.show ? <Profile /> : console.log("hidden")}
            </div>
        );
    }
}

export default App;
