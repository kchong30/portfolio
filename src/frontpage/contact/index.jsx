import React from 'react'

function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
      
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            // Handle success, e.g. show a success message
          } else {
            // Handle error
          }
        } catch (error) {
          // Handle network error
        }
    };
        

  return (
    <div>
        <h1>hi</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="comments" placeholder="Your Comments" required></textarea>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact