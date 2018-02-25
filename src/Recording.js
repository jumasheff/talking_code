import React, { Component } from 'react'
import { ReactMic, saveRecording } from 'react-mic'
import { Media, Player, controls, utils } from 'react-media-player'
import { withMediaProps } from 'react-media-player'

class Recording extends Component {
  constructor(props){
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false
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
    });
    console.log(blobObject.blobURL);
  }

  onTimeUpdate = (t) => {
    console.log(t);
  }

  render() {
    const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls;
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
                <Fullscreen/>
              </div>
            </div>
          }
        </Media>
          <div>
            <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
          </div>
          <button onClick={this.startRecording}>Start</button>
          <button onClick={this.stopRecording}>Stop</button>
      </div>
    )
  }
}

export default withMediaProps(Recording);
