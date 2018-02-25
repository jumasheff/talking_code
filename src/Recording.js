import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { ReactMic } from 'react-mic'
import { Media, Player, controls, utils } from 'react-media-player'
import { withMediaProps } from 'react-media-player'

import Timer from './Timer'

class Recording extends Component {
  constructor(props){
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false,
    }
  }

  startRecording= () => {
    this.setState({
      record: true,
      isRecording: true
    });
  }

  stopRecording= () => {
    this.setState({
      record: false,
      isRecording: false
    });
  }

  onStart=() => {
    console.log('You can tap into the onStart callback');
  }

  onStop = (blobObject) => {
    this.setState({
      blobURL : blobObject.blobURL
    })
  }

  onTimeUpdate = (t) => {
    console.log(t)
  }

  onTextChange = (e, newValue) => {
    const currentTime = this.textInput.props.counter;
    const data = {
      time: currentTime,
      text: newValue
    }
    console.log(data)
  }

  render() {
    const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls;
    const { keyboardControls } = utils;
    return (
      <div>
        <ReactMic
            className="oscilloscope"
            record={this.state.record}
            backgroundColor="#FF4081"
            audioBitsPerSecond={128000}
            onStop={this.onStop}
            onStart={this.onStart}
            strokeColor="#000000" />
        <Media>
          { mediaProps =>
            <div className="media" onKeyDown={keyboardControls.bind(null, mediaProps)} >
              <Player
                className="media-player"
                src={this.state.blobURL}
                vendor="audio"
                onTimeUpdate={this.onTimeUpdate}
              />
              <div className="media-controls">
                <PlayPause/>
                <CurrentTime/>
                <Progress/>
                <SeekBar/>
                <Duration/>
                <MuteUnmute/>
                <Volume/>
              </div>
            </div>
          }
        </Media>
        <button onClick={this.startRecording}>Start</button>
        <button onClick={this.stopRecording}>Stop</button>
        <div>
          <Timer>
            <TextField
              ref={(text) => { this.textInput = text }}
              hintText="MultiLine with rows: 2 and rowsMax: 4"
              multiLine={true}
              rows={2}
              rowsMax={4}
              onChange={this.onTextChange}
            />
          </Timer>
        </div>
      </div>
    )
  }
}

export default withMediaProps(Recording);
