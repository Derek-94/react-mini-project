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
                        {console.log(this.props.data)}
                        <p>🌡️ in {this.props.data.name} is {this.props.data.main.temp} celsius.</p>
                        <p>Feels like {this.props.data.main.feels_like} celsius.</p>
                        <p>Today 🌡️ max : {this.props.data.main.temp_max} celsius , min : {this.props.data.main.temp_min} celsius.</p>
                        <p>💦 Humidity : {this.props.data.main.humidity}%</p>
                    </div>
                )}
            </div>
        );
    }
}