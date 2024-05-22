// import * as React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';

export default function CheckboxGroup({ disabled, change }) {
    const [data, setData] = useState(disabled);
    return (
        <FormGroup>
            <FormControlLabel control={<CheckBox1 checked1={data.client} change={change} id='client' />} label="Магазин" />
            <FormControlLabel disabled control={<Checkbox />} label="Город" />
            <FormControlLabel disabled control={<Checkbox />} label="Адрес" />
            <FormControlLabel control={<CheckBox1 checked1={data.time} change={change} id='time' />} label="Часы работы" />
            <FormControlLabel control={<CheckBox1 checked1={data.number} change={change} id='number' />} label="Номер телефона" />
            <FormControlLabel control={<CheckBox1 checked1={data.whatsapp} change={change} id='whatsapp' />} label="Whatsapp" />
            <FormControlLabel control={<CheckBox1 checked1={data.email} change={change} id={'email'} />} label="E-mail" />
            <FormControlLabel disabled control={<Checkbox />} label="Координаты" />
        </FormGroup>
    )
}

export const CheckBox1 = ({ checked1, change, id }) => {
    const [value, setValue] = useState(checked1);
    const handleChange = (e) => {
        setValue(e.target.checked);
        change((prevState) => ({
            ...prevState,
            [id]: e.target.checked,
        }))
    }
    return (
        <Checkbox checked={value} onChange={handleChange} />
    )
}