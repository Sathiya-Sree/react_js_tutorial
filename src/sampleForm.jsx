import React from 'react';
import { useState } from 'react';
// import { FormControl, Input, InputLabel, Button } from '@material-ui/core';

const SampleForm = ()=>{
    const [name,setName]= useState ("sathiya")
    const [color, setColor] = useState("black");
    const style = {
        width: '30%',
        margin: '60px auto',
        background: '#efefef',
        padding: '60px 120px 80px 120px',
        textAlign: 'center'
    };
    return(
        <div style={style}>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input value={name} onChange={(event) => setName(event.target.value)}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Color</InputLabel>
                <Input onChange={(event) => setColor(event.target.value)}></Input>
            </FormControl>
            <h3 style={{color:color}}>{name}</h3>
        </div>
    );
};
export default SampleForm; 