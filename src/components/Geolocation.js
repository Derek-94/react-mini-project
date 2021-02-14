import React from "react"
import Location from "./Location"

export default class Geolocation extends React.Component {
    state = {
        isLoading : true,
        longtitude : 0,
        latitude : 0
    }

    async componentDidMount() {
        setTimeout( () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition( (pos) => {
                    this.setState({
                        isLoading : false,
                        longitude : pos.coords.longitude,
                        latitude : pos.coords.latitude
                    })
                } )
            } else {
                alert("Doesn't run geolocation function.")
            } 
        }, 2000 )      
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
                    />
                </div>
            )}
        </div>
        );
    }
}