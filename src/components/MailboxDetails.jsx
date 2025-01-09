import { Link, useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));
    return <>
        {
            selectedBox ? (<>
                <h1> Mailbox {selectedBox._id}</h1>
                <h2>Details</h2>

                <p>Boxholder: {selectedBox.boxholder}</p>
                <p>Box Size: {selectedBox.boxsize}</p>

                <h2>Letters</h2>
                {
                    letters.length ? (
                        <ul>
                            {
                                letters
                                    .filter(letter => letter.mailbox === mailboxId)
                                    .map(letter => (
                                        <p key={letter._id}>
                                            {letter.message}
                                        </p>
                                    ))
                            }
                        </ul>
                    ) : (
                        <p>No letters</p>
                    )
                }
            </>) : (
                <p>Mailbox Not Found!</p>
            )
        }
    </>
};

export default MailboxDetails;