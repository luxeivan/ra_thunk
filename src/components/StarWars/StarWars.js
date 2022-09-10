import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFacts, selectNumber, changeNum } from './factSlice';
import './StarWars.css'

export default function StarWars() {
  const facts = useSelector(selectFacts);
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();
  return (
    <div className='starWars'>
      <input type="number" min="1" max="5" className='starWars__input' value={number} onChange={event => dispatch(changeNum(event.target.value))} />
      <ul className='starWars__list'>
        {facts.slice(0, number).map((item, index) => <li key={index} className='starWars__item'>{item}</li>)}
      </ul>
    </div>
  )
}
