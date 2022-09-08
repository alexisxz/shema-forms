import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/home/Home'
import De from './pages/de/De'
import En from './pages/en/En'

//components

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='de' element={<De />} />
                <Route path='en' element={<En />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App