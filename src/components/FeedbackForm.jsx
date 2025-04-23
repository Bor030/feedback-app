import React from 'react'
import Card from './Card'
import {useState} from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {

const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [message, setMessage] = useState('')
const [btnDisabled, setBtnDisabled] = useState(true)

const handleTextChange = (e) => {
  const inputValue = e.target.value;
  setText(inputValue);

  if (inputValue === '') {
    setBtnDisabled(true);
    setMessage(null);
  } else if (inputValue.trim().length <= 10) {
    setMessage('Text must be at least 10 characters');
    setBtnDisabled(true);
  } else {
    setMessage(null);
    setBtnDisabled(false);
  }
};


  return (
  <Card>
    <form>
        <h2>How would you rate your service wit us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
            <input onChange={handleTextChange}
             type="text" 
             placeholder='Write a review'
             value={text}/>
            <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
    </form>
  </Card>
  )
}

export default FeedbackForm



