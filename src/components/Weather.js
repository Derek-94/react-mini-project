import React from "react" 

export default class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>Weather information renders here. </p>
                {this.props.lat}, {this.props.lon} 's weather is...
            </div>
        );
    }
}