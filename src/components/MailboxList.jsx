import { Link } from "react-router-dom"

const MailboxList = ({ mailboxes }) => {
    return <>
        <h1>Mailbox List</h1>
        {
            mailboxes.length ? (
                <ul>
                    {
                        mailboxes.map(mailbox => (
                            <li key={mailbox._id} className="mail-box">
                                <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                            </li>
                        ))
                    }
                </ul>
            ) : (
                <p>No mailboxes</p>
            )
        }
    </>
}

export default MailboxList;