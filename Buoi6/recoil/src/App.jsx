import { useState } from 'react'
import { useRecoilState } from 'recoil'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {

  return (
    <>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </>
  )
}

export default App
