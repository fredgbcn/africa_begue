import React, {useState} from "react";
import axios from "axios";
import './CreateEvent.css';

    const CreateEvent = () => {

        const [input, setInput] = useState({
            date: '',
            content: '',
            place: ''

        })

        function handleChange(event){
            const {name, value}= event.target;
            setInput(prevInput =>{
                return {
                    ...prevInput,
                    [name]: value
                }
            })
        }
        function handleClick(event){
            event.preventDefault();
            const newNote = {
                date: input.date,
                content: input.content,
                place: input.place
            }
            axios.post('5.196.8.40:3001/create333-er5ert', newNote);
        }
        return (<div>
            <h1>Create Note</h1>.
            <form>
                <input onChange={handleChange} name="date" autoComplete="off" placeholder="note date" value={input.date}></input>
                <textarea onChange={handleChange} name="content" autoComplete="off" placeholder="note content" value={input.content}></textarea>
                <input onChange={handleChange} name="place" autoComplete="off" placeholder="note place" value={input.place}></input>
                <button onClick={handleClick}>SUBMIT</button>
                
            </form>
        </div>
        )
        }

export default CreateEvent;
