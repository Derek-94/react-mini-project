import React from "react"

export default class Timer extends React.Component {
    state = {
        timerWorking: false,
        timerStopped: false,
        intervalDate : null,
        minuteDiff: 0,
        secondDiff: 0,
        id : 0
    }

    intervalDateChange = () => {
        this.setState({intervalDate : new Date()})
    }

    onStartTimer = () => {
        if(this.state.timerWorking && !this.state.timerStopped) {
            // timer is working. Need to stop timer.
            this.setState({timerStopped : true});
            clearInterval(this.state.id);
            console.log("진행중이다가 잠깐 멈추자");
            console.log("분: ",this.state.minuteDiff, " 진행된 초: ", this.state.secondDiff)
        } else if(!this.state.timerWorking && !this.state.timerStopped) {
            // timer is not working. Timer starts for the first time.
            console.log("처음 시작!")
            this.setState({
                timerWorking : true
                });
            let date = new Date();
            let intervalID = setInterval( () => {
                this.intervalDateChange();
                this.setState({
                    minuteDiff : this.state.intervalDate.getMinutes() - date.getMinutes(),
                    secondDiff : this.state.intervalDate.getSeconds() - date.getSeconds()
                })
            }, 1000);
            this.setState({id: intervalID});
        } else if(this.state.timerWorking && this.state.timerStopped) {
            // timer have to be continued.
            console.log("멈췄다가 재개하자.")
            this.setState({timerStopped : false});
            let previosTime = {min : this.state.minuteDiff, sec : this.state.secondDiff};
            let date = new Date();
            let intervalID = setInterval( () => {
                this.intervalDateChange();
                this.setState({
                    minuteDiff : previosTime.min + this.state.intervalDate.getMinutes() - date.getMinutes(),
                    secondDiff : previosTime.sec + this.state.intervalDate.getSeconds() - date.getSeconds()
                })
            }, 1000);
            this.setState({id: intervalID});
        }
    }

    onResetTimer = () => {
        clearInterval(this.state.id);
        this.setState({
            timerWorking : false,
            timerStopped : false,
            minuteDiff : 0,
            secondDiff : 0
        })
    }

    render() {
        return (
            <>
                <div className = "time-block">
                    {this.state.timerWorking ? (
                        <>{this.state.secondDiff < 0 ? (this.state.minuteDiff < 10 ? `0${this.state.minuteDiff - 1}` : `${this.state.minuteDiff}`) : (this.state.minuteDiff < 10 ? `0${this.state.minuteDiff}` : `${this.state.minuteDiff}`)}
                        :{this.state.secondDiff < 10 ? (this.state.secondDiff < 0 ? `${60 + this.state.secondDiff}` : `0${this.state.secondDiff}` ): `${this.state.secondDiff}`}</>
                    ) : (
                        <>00:00</>
                    )}
                </div>
                <div className = "timer-btn">
                    <button onClick = {this.onStartTimer} >{(!this.state.timerWorking && !this.state.timerStopped) || (this.state.timerWorking && this.state.timerStopped) ? <>start</> : <>stop</>}</button>
                    <button onClick = {this.onResetTimer}>reset</button>
                </div>
            </>
        );
    } 
}