import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  selectCount,
} from '../../features/counter/counterSlice';

export default function Home() {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);

	return (
		<h1
			onClick={() => {
        console.log('saul l')
        dispatch(increment());
			}}
		>
			首页{value}
		</h1>
	)
}
