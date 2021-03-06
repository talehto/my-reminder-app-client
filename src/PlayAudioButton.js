
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PlayAudioButton extends Component {

	constructor(props) {
    	super(props);
    	this.buttonClicked = this.buttonClicked.bind(this);
    	//this.onEndedEvent = this.onEndedEvent.bind(this);
    	//this.audio = new Audio(this.props.blob);

    	this.state = {
     		isPlaying: false
    	}
    }

    omponentDidMount() {

    }

	buttonClicked(){
		console.log("PlayAudioButton.buttonClicked: " + this.props.blob)
		console.log("PlayAudioButton.buttonClicked: " + this.state.isPlaying)
		if(this.state.isPlaying){
			this.audio.pause();
			this.setState({ isPlaying: false });
		}else{
			this.audio.play();
			this.setState({ isPlaying: true });
		}
	}    

	onEndedEvent = () =>{
		console.log("PlayAudioButton.onEndedEvent")
		this.setState({ isPlaying: false });
	}

    render() {
    	const { isPlaying } = this.state;
    	var playButton;
    	if(isPlaying){
    		playButton = <Button variant="primary" size="lg" onClick={this.buttonClicked}><FontAwesomeIcon  icon="pause"/></Button>
    	}else{
    		playButton = <Button variant="primary" size="lg" onClick={this.buttonClicked}><FontAwesomeIcon  icon="play-circle"/></Button>
    	}
        //
    	return (
    		<div>
    			<audio src={this.props.blob}
  			      ref={(audio) => { this.audio = audio }} onEnded={this.onEndedEvent}
        		/>
        		{playButton}
    		</div>
    	)

    }
}

export default PlayAudioButton;

