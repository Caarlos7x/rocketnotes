import { Routes, Route } from 'react-router-dom';


import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { React } from '../pages/React';
import { Node } from '../pages/NodeJS';


export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/react" element={<React />} />
      <Route path="/nodejs" element={<Node />} />
    </Routes>
  )
}