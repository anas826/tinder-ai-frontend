import { User, MessageCircle, Heart, X } from 'lucide-react';
import './App.css'
import React, { useState } from 'react';

const ProfileSelector = () => (
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src = "http://127.0.0.1:8081/018aafd0-6a0d-4f38-b2ca-45c0c9b13fa2.jpg" />
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
        <h2 className="text-4x1 font-bold">Foo bar, 30</h2>
      </div>
    </div>
      <div className="p-4">
        <p className="text-grey-600 mb-4">Nurse and fitness enthusiast. I love helping others and staying active. I enjoy running marathons and participating in fitness challenges.
        </p>
      </div>
    <div className="p-4 flex justify-center space-x-4">
      <button className="bg-red-500 rounded-full p-4 text-white hover:bg-red-700"
      onClick={()=> console.log("left")}>
        <X size = {24} />
      </button>
      <button className="bg-green-500 rounded-full p-4 text-white hover:bg-green-700"
      onClick={()=> console.log("right")}>
        <Heart size = {24} />
      </button>
    </div>
  </div>

);

const MatchesList = () =>(
  <div className="rounded-lg shadow-lg p-4">
    <h2 className="text-2x1 font-bold">Matches</h2>
    <ul>
    {
      [
        {id: 1, firstName: "Foo", lastName: "Bar", imageUrl: "http://127.0.0.1:8081/0e985a4b-6944-4dec-b0f7-4a4453592dd0.jpg"},
        {id: 2, firstName: "Bar", lastName: "test", imageUrl: "http://127.0.0.1:8081/018aafd0-6a0d-4f38-b2ca-45c0c9b13fa2.jpg"}
      ].map(match =>(
        <li key = {match.id} className="mb-2">
          <button className="w-full hover:bg-gray-100 rounded flex item-center">
            <img src={match.imageUrl} className="w-16 h-16 rounded-full mr-3 object-cover" />
            <span>
              <h3 className="font-bold">{match.firstName} {match.lastName}</h3>
            </span>
            </button>
          </li>
      ))
    }
    </ul>
  </div>

);

function App() {

  const [currentScreen, setCurrentScreen] = useState('profile');

  const randorScreen = () =>{
    switch (currentScreen) {
      case 'profile':
        return <ProfileSelector />
      case 'matches':
       return <MatchesList />

    }
  }

  return (<>
  <div className="max-w-md mx-auto p-4">
    <nav className="flex justify-between mb-4">
      <User onClick={()=> setCurrentScreen("profile")}/>
      <MessageCircle onClick={()=> setCurrentScreen("matches")} />
    </nav>
    {randorScreen()}
  </div>
  </>
  )
}

export default App
