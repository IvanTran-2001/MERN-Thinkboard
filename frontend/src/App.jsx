import React from 'react'
import { Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/create" element={<CreatePage />} />
        <Route path = "/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App