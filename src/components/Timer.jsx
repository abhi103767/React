import { useEffect, useState } from "react"

const Timer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        setInterval(() => {
            setTimer((perv) => perv - 1);
        }, 1000)
    }, [])

    console.log(timer);

    return (

        <div>
            <h1>Timer : {timer}</h1>
        </div>

    )
}



export default Timer;