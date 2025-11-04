import { useState } from 'react'
import './App.css'
import AnimationPane from './components/AnimationPane';
import LoginForm from './components/LoginForm';

function App() {

  return (
    <main className="app-container">
    <AnimationPane />
    <LoginForm />
    
    </main>
  );
}

export default App
