import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
function App() {

  const [feedback, setFeedback] = useState(FeedbackData) 

  const handleClick = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))}
  return (
  
     <>
    <Header/>
    <div className='container'>
      <FeedbackForm/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleClick={handleClick}/>
    </div>
     </> 
  );
}

export default App;
