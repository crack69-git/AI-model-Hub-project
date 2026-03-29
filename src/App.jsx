import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/heroSection/HeroSection'
import ToggleSection from './components/toggleSection/ToggleSection'

const fetchAiData = async () => {
  const res = await fetch('/models.json');
  return res.json();
}

function App() {
  const aiDataPromise = fetchAiData();
  // console.log('App component created aiDataPromise:', aiDataPromise);
  return (
    <>
      <NavBar />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ToggleSection aiDataPromise={aiDataPromise} />
      </Suspense>
    </>
  )
}

export default App
