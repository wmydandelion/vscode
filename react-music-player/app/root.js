import React from 'react';
import Header from './components/header';
import Progress from './components/progress';
let Root = React.createClass({
    render() {
        getInitialState() {
                return {
                    progress: '-'
                }
            },
            componentDidMount() {
                $('#player').jPlayer({
                    ready: function() {
                        $(this).jPlayer('setMedia', {
                            mp3: 'src'
                        }).jPlayer('play');
                    },
                    supplied: "mp3",
                    wmode: 'window'
                });
                $('#player').bind($.jPlayer.event.timeupdate, (e) => {
                    this.setState({
                        progress: Math.round(e.jPlayer.status.currenTime)
                    });
                });
            },
            componentWillUnMOunt() {

            }
        return ( <
            div >
            <
            Header / >
            <
            Progress Progress = { this.state.progress } > < /Progress> < /
            div >

        );
    }
});
export default Root;