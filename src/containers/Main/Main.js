import React, { Component } from "react";
import clsx from "clsx";
// API
import { Grid, Paper } from "@material-ui/core";
import SecondaryAppBar from "components/SecondaryAppBar";
import { withStyles } from "@material-ui/core/styles";
// Utility
import { attachSinkId } from "utils/audio-utils";
import styles from "./styles.js";
import VolumeSlider from "components/VolumeSlider/VolumeSlider.js";
import SimpleSelect from "components/SimpleSelect/SimpleSelect.js";
import AudioAnalyser from "components/AudioAnalyser/AudioAnalyser.js";
import Drawer from "components/Drawer/Drawer.js";
import PluginNavigator from "components/PluginNavigator";
import PluginEditor from "components/PluginEditor";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamActive: false,
      stream: null,
      constraints: {
        audio: true,
      },
      sideBar: true,
      audioInputOptions: [],
      audioOutputOptions: [],
    };
    this.audioElement = "";
    this.audioConstraints = this.state.constraints;
  }
  componentDidMount() {
    // Gets <audio> source to begin passing options
    this.audioElement = document.querySelector("audio");
    // Helper function to get native in/out devices
    this.getSelectOptions();
  }
  componentDidUpdate() {}
  async getSelectOptions() {
    try {
      const response = await navigator.mediaDevices.enumerateDevices();

      response.map((device, index) => {
        if (device.kind === "audioinput") {
          this.setState({
            audioInputOptions: [...this.state.audioInputOptions, device],
          });
        }
        if (device.kind === "audiooutput") {
          this.setState({
            audioOutputOptions: [...this.state.audioOutputOptions, device],
          });
        }
      });
      this.setState({ audioDevices: response });
    } catch (error) {
      console.log(error);
    }
  }

  updateAudioDestination = ({ device }) => {
    const audioDestination = device.deviceId;
    attachSinkId(this.audioElement, audioDestination);
    this.setState({ audioDestination: device });
  };

  updateAudioSource = ({ device }) => {
    const audioSource = device.deviceId;
    this.setState({
      constraints: {
        ...this.state.constraints,
        audio: {
          deviceId: device.deviceId ? { exact: audioSource } : undefined,
        },
      },
      audioSource: device,
    });
    console.log(`Success, audio input device attached: ${audioSource}`);
  };

  // Toggles UI Side Menu
  toggleSidebar = ({ setOpen }) => {
    this.setState({ sideBar: setOpen });
  };

  // Initalizes  Live Stream
  handleLiveSwitchChange = ({ value }) => {
    if (this.state.stream) {
      this.stopLiveAudio();
    } else {
      this.startLiveAudio();
    }
  };

  startLiveAudio = async () => {
    let stream = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia(
        this.state.constraints
      );
      const audioTracks = stream.getAudioTracks();
      console.log("Got stream with constraints:", this.state.constraints);
      console.log("Using audio device: " + audioTracks[0].label);
      this.audioElement.srcObject = stream;
      this.setState({ stream, streamActive: true });
    } catch (error) {
      console.log(error);
    }
  };
  stopLiveAudio() {
    this.state.stream.getTracks().forEach((track) => track.stop());
    this.state.stream.oninactive = function () {
      console.log("Stream ended");
    };
    this.setState({ stream: null, streamActive: false });
  }
  handleVolumeChange = ({ value }) => {
    console.log(value);

    this.setState({
      constraints: {
        ...this.state.constraints,
        audio: { autoGainControl: { exact: value } },
      },
    });
  };
  render() {
    console.log("state", this.state);
    const { classes } = this.props;
    const { sideBar } = this.state;
    return (
      <div className={classes.root}>
        <SecondaryAppBar
          open={this.state.sideBar}
          onClick={this.toggleSidebar}
          LiveAudioSwitchProps={{
            onChange: this.handleLiveSwitchChange.bind(this),
            currentValue: this.state.streamActive,
          }}
        />
        <Drawer></Drawer>
        <main className={classes.appContainer}>
          <PluginEditor></PluginEditor>
          {/* <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paperVolume} elevation={0}>
                <VolumeSlider
                  max={1}
                  min={0}
                  step={0.1}
                  onChange={this.handleVolumeChange}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <SimpleSelect
                  label="Audio In"
                  value={this.state.audioSource || ""}
                  options={this.state.audioInputOptions}
                  onChange={this.updateAudioSource}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <SimpleSelect
                  label="Audio Out"
                  value={this.state.audioDestination || ""}
                  options={this.state.audioOutputOptions}
                  onChange={this.updateAudioDestination}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paperAudioAnalyser}>
                {this.state.stream && (
                  <AudioAnalyser audio={this.state.stream} />
                )}
              </Paper>
            </Grid>
                </Grid> */}
        </main>
        <audio id="gum-local" autoPlay></audio>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
