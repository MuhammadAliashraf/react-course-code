import React, { useState } from 'react'

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit=(event) => {
        event.preventDefault();
        alert(`Thank you for your feedback, ${name}!`);
        // Here you can also send the feedback data to a server if needed
        console.log({ name, email, feedback });
    }



    return (
        <>
        <div >
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}    >
                <div>
                    <label>Your Name:</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Your Email:</label>
                    <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Your Feedback:</label>
                    <br />
                    <textarea
                        rows="4"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: 10 }}>
                    Submit Feedback
                </button>
            </form>
        </div>
        </>
        
    );
}

export default FeedbackForm