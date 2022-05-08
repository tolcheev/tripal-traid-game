import React, {useEffect, useState} from "react";
//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date().toLocaleTimeString()
//         }
//     }
//
//     componentDidMount() {
//         this.interval = setInterval(() => {
//             console.log('$$$ time ')
//             this.setState({
//                 date: new Date().toLocaleTimeString()
//             })
//         }, 1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }
//
//     render() {
//
//         return (
//             <div>
//                 Сейчас: {this.state.date}
//             </div>
//             )
//
//     }
// }

const Clock = () => {
    console.log("render")
    const [date, setDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        console.log('compdidmount')
        const interval = setInterval(() => {
            setDate(new Date().toLocaleString())
        }, 1000)
        return () => {
            console.log('component will unmount ')
            clearInterval(interval);
        }
    }, [])



        return (
            <div>
                Сейчас: { date }
            </div>
            )
}

export default Clock;