import ReactDOM from 'react-dom';
import React, {useReducer} from 'react';
import './index.css';

const initialState={
    correct:'',
    wrong:'',
}

function Welcome(state, action) {
    switch (action.category) {
        case 'correct':
            return {
                correct : 'Answer : Correct',
            };
        case 'wrong':
            return {
                wrong:'Answer : Wrong',

            };
        default :
            throw new Error();
    }
}

function Header(){
    return(
        <h2>React Js Multiple Choice Question</h2>
    )
}

function QuesOne() {
    const [state,dispatch]=useReducer(Welcome,initialState);
    return (

        <div >
            <div className='f1'>
            <p >1. What is React.js primarily used for?</p>
            <div className='btn'>
            <button onClick={() => dispatch({ category: 'correct' })}>A. Front-end web development</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>B. Server-side scripting</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>C. Mobile app development</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>D. Database management</button><br></br>
            <p>{state.correct}</p>
            <p>{state.wrong}</p>
            </div>
            </div>
        </div>
    );
}

function QuesTwo() {
    const [state,dispatch]=useReducer(Welcome,initialState);
    return (
        <div >
            <div className='f1'>
            <p >3. Which programming language is commonly used to write React.js applications? </p>
            <div className='btn'>
            <button onClick={() => dispatch({ category: 'wrong' })}>A. PHP</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>B. Python</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>C. Ruby</button><br></br>
            <button onClick={() => dispatch({ category: 'correct' })}>D. JavaScript</button><br></br>
            <p>{state.correct}</p>
            <p>{state.wrong}</p>
            </div>
            </div>
        </div>
    );
}

function QuesThree() {
    const [state,dispatch]=useReducer(Welcome,initialState);
    return (
        <div >
            <div className='f1'>
            <p >2. Who developed React.js?</p>
            <div className='btn'>
            <button onClick={() => dispatch({ category: 'wrong' })}>A. Google</button><br></br>
            <button onClick={() => dispatch({ category: 'correct' })}>B. Facebook</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>C. Microsoft</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>D. Amazon</button><br></br>
            <p>{state.correct}</p>
            <p>{state.wrong}</p>
            </div>
            </div>
        </div>
    );
}

function QuesFour() {
    const [state,dispatch]=useReducer(Welcome,initialState);
    return (
        <div >
            <div className='f1'>
            <p >4. What is the term used to describe React's ability to update only changed parts of the user interface?</p>
            <div className='btn'>
            <button onClick={() => dispatch({ category: 'wrong' })}>A. Efficient Rendering</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>B. Dynamic Reconciliation</button><br></br>
            <button onClick={() => dispatch({ category: 'correct' })}>C. Virtual DOM</button><br></br>
            <button onClick={() => dispatch({ category: 'wrong' })}>D. Component Reusability</button><br></br>
            <p>{state.correct}</p>
            <p>{state.wrong}</p>
            </div>
            </div>
        </div>
    );
}

function Value(){
    
    return(
        <div>
            <Header/>
            <QuesOne/>
            <QuesTwo/>
            <QuesThree/>
            <QuesFour/>
        </div>
    )
}
ReactDOM.render(<Value/>,document.getElementById('root'));