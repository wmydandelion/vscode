import React from 'react';
require('./progress.less');

let Progress = React.createClass({


    render() {
        return ( <
            div >
            <
            div className = "components-progress"
            ref = "progressBar"
            onClick = { this.changeProgress } >
            <
            div className = "progress"
            style = {
                { width: '${this.props.progress}%', background: this.props.barColor }
            } >
            <
            /div> </div >
            <
            /div>
        );
    }
});

export default Progress;