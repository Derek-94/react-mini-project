import React from "react" 

export default class Weather extends React.Component {

    render() {
        return (
            <div>
                {this.props.data === null ? (
                    <div>
                        Coords info not loaded...
                    </div>
                ) : (
                    <div>
                        <div>🌡️ in {this.props.data.name} is {this.props.data.main.temp} celsius.</div>
                        <div>Feels like {this.props.data.main.feels_like} celsius.</div>
                        <div>Today 🌡️ max : {this.props.data.main.temp_max} celsius , min : {this.props.data.main.temp_min} celsius.</div>
                        <div>💦 Humidity : {this.props.data.main.humidity}%</div>
                    </div>
                )}
            </div>
        );
    }
}