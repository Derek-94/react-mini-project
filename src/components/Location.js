import React from "react"

export default class Location extends React.Component {
    render() {
        return (
        <div>
            {this.props.data === null ? (
                <div>
                Not loaded...
                </div>
            ) : (
                <div>
                You are in ({this.props.lat}, {this.props.lon}), {this.props.data.name}
                </div>
            )}
        </div>
        );
    }
}