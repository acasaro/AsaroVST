import React, { Component } from 'react';
import clsx from 'clsx';
// API
import { Grid, Paper } from '@material-ui/core';
import SecondaryAppBar from 'components/SecondaryAppBar';
import { withStyles } from '@material-ui/core/styles';
// Utility
import { attachSinkId } from 'utils/audio-utils';
import styles from './styles.js';
import VolumeSlider from 'components/VolumeSlider/VolumeSlider.js';
import SimpleSelect from 'components/SimpleSelect/SimpleSelect.js';
import Mic from 'components/Mic';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            live: false,
            constraints: {
                audio: true,
                video: false,
            },
            sideBar: true,
            audioInputOptions: [],
            audioOutputOptions: [],
        };
    }
    componentDidMount() {
        // Gets <audio> source to begin passing options
        this.setState({ audioElement: document.querySelector('audio') });
        // Helper function to get native in/out devices
        this.getSelectOptions();
    }
    componentDidUpdate() {}
    async getSelectOptions() {
        try {
            const response = await navigator.mediaDevices.enumerateDevices();

            response.map((device, index) => {
                if (device.kind === 'audioinput') {
                    this.setState({ audioInputOptions: [...this.state.audioInputOptions, device] });
                }
                if (device.kind === 'audiooutput') {
                    this.setState({ audioOutputOptions: [...this.state.audioOutputOptions, device] });
                }
            });
            this.setState({ audioDevices: response });
        } catch (error) {
            console.log(error);
        }
    }

    updateAudioDestination = ({ device }) => {
        const audioDestination = device.deviceId;
        attachSinkId(this.state.audioElement, audioDestination);
        this.setState({ audioDestination: device });
    };

    updateAudioSource = ({ device }) => {
        console.log(device);
        const audioSource = device.deviceId;

        this.setState({
            constraints: {
                ...this.state.contraints,
                audio: { deviceId: device.deviceId ? { exact: audioSource } : undefined },
            },
            audioSource: device,
        });
    };
    // Toggles UI Side Menu
    toggleSidebar = ({ setOpen }) => {
        this.setState({ sideBar: setOpen });
    };

    // Initalizes  Live Stream
    handleLiveSwitchChange = ({ value }) => {
        if (window.stream) {
            window.stream.getTracks().forEach((track) => {
                track.stop();
            });
        }
        if (value) {
            navigator.mediaDevices
                .getUserMedia(this.state.constraints)
                .then(this.initializeAudioStream)
                .catch(this.streamError);
        }
        this.setState({ live: value });
    };

    initializeAudioStream = (stream) => {
        const audioTracks = stream.getAudioTracks();
        console.log('Got stream with constraints:', this.state.constraints);
        console.log('Using audio device: ' + audioTracks[0].label);
        stream.oninactive = function () {
            console.log('Stream ended');
        };
        window.stream = stream;
        this.state.audioElement.srcObject = stream;
    };

    // Handles Error on Media Stream
    streamError = (error) => {
        const errorMessage = 'navigator.MediaDevices.getUserMedia error: ' + error.message + ' ' + error.name;
        console.log(errorMessage);
    };

    render() {
        console.log('state', this.state);
        const { classes } = this.props;
        const { sideBar } = this.state;
        return (
            <div className={classes.root}>
                <SecondaryAppBar
                    open={this.state.sideBar}
                    onClick={this.toggleSidebar}
                    LiveAudioSwitchProps={{
                        onChange: this.handleLiveSwitchChange.bind(this),
                        currentValue: this.state.live,
                    }}
                />
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: sideBar,
                    })}>
                    <div className={classes.drawerHeader} />
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <VolumeSlider />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <SimpleSelect
                                    label="Audio In"
                                    value={this.state.audioSource || ''}
                                    options={this.state.audioInputOptions}
                                    onChange={this.updateAudioSource}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <SimpleSelect
                                    label="Audio Out"
                                    value={this.state.audioDestination || ''}
                                    options={this.state.audioOutputOptions}
                                    onChange={this.updateAudioDestination}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Mic />
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
                <audio id="gum-local" autoPlay></audio>
            </div>
        );
    }
}

export default withStyles(styles)(Main);
