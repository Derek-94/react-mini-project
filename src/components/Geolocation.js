import React from "react"
import Location from "./Location"
import Weather from "./Weather"

const API_key = "8f165c303e16656f72e24f834ab6fb7b";

export default class Geolocation extends React.Component {
    state = {
        isLoading : true,
        longitude : 0,
        latitude : 0,
        data : null
    }

    componentDidMount() {
        setTimeout( () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition( async(pos) => {
                    this.setState({
                        isLoading : false,
                        longitude : pos.coords.longitude.toFixed(5),
                        latitude : pos.coords.latitude.toFixed(5)
                    })

                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${API_key}&units=metric`);
                    const responseData = await response.json();
                    this.setState({data : responseData}) 
                }) 
            } else {
                alert("Doesn't run geolocation function.")
            } 
        }, 2000)
        
    }

    render () {
        return (
        <div>
            {this.state.isLoading ? (
                <div className = "loader">
                    Loading...
                </div>
            ) : (
                <div className = "geolocation">
                    <Location 
                        lon = {this.state.longitude}
                        lat = {this.state.latitude}
                        data = {this.state.data}
                    />
                    <Weather 
                        lon = {this.state.longitude}
                        lat = {this.state.latitude}
                        data = {this.state.data}
                    />
                </div>
            )}
        </div>
        );
    }
}