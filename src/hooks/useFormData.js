import { useRef, useState } from 'react';

export const useFormData = (initial=null) => {
    const form = useRef(initial);
    const [formData, setFormData] = useState({});
    const getFormData = () => {
        const fd = new FormData(form.current);
        const obj = {};
        fd.forEach((value, key) => {
            obj[key] = value;
        });
        return obj;
    };
    const updateFormData = () => {
        setFormData(getFormData());
    };
    return {
        form,
        formData,
        updateFormData
    };
};
