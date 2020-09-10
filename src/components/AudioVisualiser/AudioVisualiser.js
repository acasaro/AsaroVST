import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class AudioVisualiser extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidUpdate() {
        this.draw();
    }

    draw() {
        const { audioData } = this.props;
        const canvas = this.canvas.current;
        const context = canvas.getContext('2d');
        const height = 150;

        const width = context.canvas.width;
        let x = 0;
        const sliceWidth = (width * 1.0) / audioData.length;

        context.lineWidth = 2;
        context.strokeStyle = '#F6AC5D';
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.moveTo(0, height / 2);
        for (const item of audioData) {
            const y = (item / 255.0) * height;
            context.lineTo(x, y);
            x += sliceWidth;
        }
        context.lineTo(x, height / 2);
        context.stroke();
    }

    render() {
        const { classes } = this.props;
        return <canvas className={classes.canvasRoot} id={'audioVisualiser'} ref={this.canvas} />;
    }
}

export default withStyles(styles)(AudioVisualiser);
