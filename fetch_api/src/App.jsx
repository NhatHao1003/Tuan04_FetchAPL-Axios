import { useState } from 'react'
import Bai1 from './Bai1.jsx'
import Bai2 from './Bai2.jsx'
import Bai3 from './Bai3.jsx'
import Bai4 from './Bai4.jsx'

function App() {
  const [activeBai, setActiveBai] = useState('bai1')

  const renderResult = () => {
    if (activeBai === 'bai1') {
      return <Bai1 />
    }
    if(activeBai === 'bai2') {
      return <Bai2 />
    }
    if(activeBai === 'bai3') {
      return <Bai3 />
    }
    if(activeBai === 'bai4') {
      return <Bai4 />
    }

    return <p>Chua co component cho {activeBai.toUpperCase()}.</p>
  }

  return (
    <div>
      <div>
        <button type="button" onClick={() => setActiveBai('bai1')}>
          Bai1
        </button>
        <button type="button" onClick={() => setActiveBai('bai2')}>
          Bai2
        </button>
        <button type="button" onClick={() => setActiveBai('bai3')}>
          Bai3
        </button>
        <button type="button" onClick={() => setActiveBai('bai4')}>
          Bai4
        </button>
      </div>

      <div>
        {renderResult()}
      </div>
    </div>
  )
}

export default App
