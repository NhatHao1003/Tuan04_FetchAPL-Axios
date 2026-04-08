import { useRecoilState } from "recoil"
import { counterState } from "../recoil/counterState"

function ComponentB() {
    const [count, setCount] = useRecoilState(counterState)

    console.log(count)

  return (
    <>
        <div style={{padding : 20}}>
            <button onClick={() => setCount(count +1)}>Tang</button>          
            <button onClick={() => setCount(count -1)}>Giam</button>
        </div>
    </>
  )
}

export default ComponentB