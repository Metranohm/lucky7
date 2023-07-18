import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState } from 'react';



export default function FormDemo() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState(50);
    const updateName = (e) => {
        setName(e.target.value);
    }
    const changeVolume = (e, newValue) => {
        setVolume(newValue);
    }
    return (
        <div>
            <h2>Name is: {name}</h2>
            <TextField 
                id="outlifed-basic" 
                label="Your Name" 
                variant="outlined" 
                placeholder="Enter your name"
                value={name}
                onChange={updateName}
                />
            <h2>Volume: {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </div>
    )
}