import { useRecoilValue } from "recoil"
import { counterState } from "../recoil/counterState"

function ComponentA(){
    const count = useRecoilValue(counterState)

    return(
        <>
            <h2>Counter: {count}</h2>
        </>
    )
}

export default ComponentA


