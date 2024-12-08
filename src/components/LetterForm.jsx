import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = ({ mailboxes, addLetters }) => {
    const navigate = useNavigate();

    const initialState = {
        mailbox: 1,
        recipient: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        addLetters(formData);
        navigate(`/mailboxes/${formData.mailbox}`);
        setFormData(initialState);
    };

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return <>
        <h1>New Letter</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mailbox">Select a Mailbox</label>
            <select name="mailbox" id="mailbox" value={formData.mailbox} onChange={handleChange}>
                {
                    mailboxes.map(mailbox => (
                        <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
                    ))
                }
            </select>

            <label htmlFor="recipient">Recipient</label>
            <input type="text" name="recipient" id="recipient" value={formData.recipient} placeholder="Recipient name" onChange={handleChange} />

            <label htmlFor="message">Message</label>
            <input type="text" name="message" id="message" value={formData.message} placeholder="Message" onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    </>
};

export default LetterForm;