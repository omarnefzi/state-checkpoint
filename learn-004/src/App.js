import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MenuAppBar from "./components/CustomNav";

class App extends Component {
  state = {
    person: {
      fullName: "Omar Nefzi",
      bio: "born October 13, 1998",

      imgSrc: "imgs/pic.jpg",
      profession: "Tunisian researcher and web developer.",
    },
    show: false,
    mountedTime: new Date(),
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <MenuAppBar />
        <Card style={{ marginTop: 50 }}>
          <CardContent>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.toggleShow}
            >
              {show ? "Hide Profile" : "Show Profile"}
            </Button>
            {show && (
              <div>
                <img
                  style={{ width: 300, height: 300, borderRadius: 20 }}
                  src={imgSrc}
                  alt={fullName}
                />
                <h1>{fullName}</h1>
                <h2>{profession}</h2>
                <p>{bio}</p>
              </div>
            )}
            <p>
              Component mounted {Math.floor((new Date() - mountedTime) / 1000)}{" "}
              seconds ago.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
