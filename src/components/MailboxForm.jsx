import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
    const navigate = useNavigate();

    const initialState = {
        boxholder: '',
        boxsize: 'small',
    };

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/');
    };

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxholder">Enter a Boxholder:</label>
            <input type="text" name='boxholder' id='boxholder' placeholder='Boxholder name' value={formData.boxholder} onChange={handleChange} />

            <label htmlFor="boxsize">Select a Box Size:</label>
            <select name="boxsize" id="boxsize" value={formData.boxsize} onChange={handleChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>

            <button type='submit'>Submit</button>
        </form>
    </>
};

export default MailboxForm;