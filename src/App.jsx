import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [person] = useState({
    fullName: "Emma Johnson",
    bio: "Frontend developer specializing in React and TypeScript",
    imgSrc: "https://i.pinimg.com/750x/26/12/73/261273da88b3732c008a871d0284642b.jpg",
    profession: "Senior Software Engineer"
  })
  const [shows, setShows] = useState(false)
  const [timeSinceMount, setTimeSinceMount] = useState(0)

  // Equivalent to componentDidMount and componentWillUnmount
  useEffect(() => {
    const mountTime = new Date()
    const interval = setInterval(() => {
      setTimeSinceMount(Math.floor((new Date() - mountTime) / 1000))
    }, 1000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, []) // Empty dependency array means this runs once on mount

  const toggleShow = () => {
    setShows(prev => !prev)
  }

  return (
    <div className="app">
      <h1>Person Profile</h1>
      <button onClick={toggleShow}>
        {shows ? 'Hide Profile' : 'Show Profile'}
      </button>

      {shows && (
        <div className="profile-card">
          <img src={person.imgSrc} alt={person.fullName} />
          <h2>{person.fullName}</h2>
          <p className="profession">{person.profession}</p>
          <p className="bio">{person.bio}</p>
        </div>
      )}

      <p className="timer">
        Time since mount: {timeSinceMount} seconds
      </p>
    </div>
  )
}

export default App