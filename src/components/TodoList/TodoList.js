import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import React from 'react'
import './TodoList.css'

function TodoList() {
    const [input, setInput] = React.useState('');
    const [list, setList] = React.useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(input.trim() === '') { return;}
        setList(oldlist => setList([...oldlist,input]));
        setInput('');
    }
    const deleteItem = (idx) => {
        let arr = []
        for(let i=0; i < list.length; i++){
            if(idx !== i){
                arr.push(list[i]);
            }
        }
        setList(arr);
    }
    return (
        <div className='d-container'>
            <div className='d-input-container'>
                <form className='todo-form' onSubmit={submitHandler}>
                    <input type='text' placeholder='Enter Todo' 
                    value={input} name='text'
                    className='todo-input' 
                    onChange={e => setInput(e.target.value)} />
                    <Button variant='contained' type='submit'>Add Todo</Button>
                </form>
                <div style={{display : "flex", flexDirection:"column", justifyContent:"space-between",width :"100%", alignItems:"center"}}>
                    {list&&list.map((data, idx) => <div style={{width:"100%" ,display : "flex", alignItems:"center", justifyContent:"space-between"}} key={idx}>
                    <span style={{margin : "1rem",color:"white"}}>{data}</span>
                    <div style={{margin : "1rem"}} onClick={()=>deleteItem(idx)}><Button><DoneIcon/></Button></div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default TodoList
