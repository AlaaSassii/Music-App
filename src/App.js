import {useEffect, useRef} from 'react'
import audio from './a.mp3'
function App() {
  const audioRef = useRef({})
  console.log(audioRef.current.autoPlay);
  const currentTime = ( time)=> {
    const time1 = Number(time.toString().toFixed(0)) ; 
    const min = time / 60 ; 
    const sec = time % 60 ; 
    return `${min}:${sec}`
  }

  return (
    <>
      <audio ref={audioRef}  controls={true} play={true} src={audio}></audio>
      <button onClick={()=>{audioRef.current.muted = true}}>muted</button>
      <button onClick={()=>{audioRef.current.loop = true}}>loop</button>
      <button onClick={()=>{audioRef.current.controls = false}}>controls</button>
      <button onClick={()=>{audioRef.current.play()}}>play</button>
      <button onClick={()=>{audioRef.current.pause()}}>pause</button>
      <button onClick={()=>{console.log(audioRef.current.duration)}}>duration</button>
      <button onClick={()=>{console.log(currentTime(audioRef.current.currentTime) )}}>currentTime </button>
      
      </>
  );
}

export default App;
