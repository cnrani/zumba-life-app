import {useState} from 'react';


export const useForm = (initialForm) => {   //custom hook

 const [form, setForm] = useState(initialForm);   // returns array

    const change = ({ target: { name, value }}) => {
        setForm({
            ...form,
            [ name ]: value,
        });
    };

    return [form, change, () => setForm(initialForm)]; // return array object

};