import React from "react"

const API_KEYS = "5c98c6954d5565acfa116b5902da6602";

export default class Location extends React.Component {
    render() {
        return <div>
            You are in ({this.props.lat}, {this.props.lon})
        </div>
    }
}