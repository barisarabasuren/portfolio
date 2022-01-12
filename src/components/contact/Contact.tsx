import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { useInView } from 'react-intersection-observer';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

interface ContactsProps {

}

const Contact: React.FC<ContactsProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [messageCounter, setMessageCounter] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(inView) {
      setIsVisible(true)
    }
  }, [inView])

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const name = contactForm.name.charAt(0).toUpperCase() + contactForm.name.slice(1)
    if(!messageCounter) {
      if(contactForm.name && contactForm.email && contactForm.subject && contactForm.message) {
        emailjs.sendForm('service_vkvy9hs', 'template_p0mtrqq', form.current? form.current: 'null', 'user_jXimtYRy8LPVhNvNNo0bK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        toast.success(`${name}, thank your message! I will get back to you asap!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }); 
        setMessageCounter(1)
      } else {
        toast.warn( 'Please fill all the fields.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error( `${name}, you have already sent a message. If you want to send another one, please refresh the website.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
  }

  return (
    <div ref={ref} className={`contact ${isVisible? 'section_no_offset': 'section_offset'}`}>
      <div className={`contact-form ${isVisible? 'content_visible': 'content_hidden'}`}>
        <div className='skills-title'>
          <p className='skills-header'>CONTACT</p>
          <div className='line'></div>
        </div>
        <div className='contact-explanation'>
          <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        </div>
        <Form ref={form as React.RefObject<any>} className='contact-form-inner'>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control 
              onChange={e => {
                setContactForm(prevState => ({
                  ...prevState,
                  name: e.target.value
                }))
              }} 
              name='name' 
              size="sm" 
              type='text' 
              placeholder="Name" 
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              onChange={e => {
                setContactForm(prevState => ({
                  ...prevState,
                  email: e.target.value
                }))
              }} 
              name='email' 
              size="sm" 
              type="email" 
              placeholder="E-mail" 
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Control 
              onChange={e => {
                setContactForm(prevState => ({
                  ...prevState,
                  subject: e.target.value
                }))
              }} 
              name='subject' 
              size="sm" 
              type="text" 
              placeholder="Subject" 
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Control
              onChange={e => {
                setContactForm(prevState => ({
                  ...prevState,
                  message: e.target.value
                }))
              }} 
              name='message'
              size="sm"
              as="textarea"
              placeholder="Your message..."
              style={{ height: '150px', resize:'none' }}
            />
          </Form.Group>
          <Button 
            onClick={handleFormSubmit}
            size="sm" 
            className='send-button' 
            variant="light" 
            type="submit">
            Send
          </Button>
          <ToastContainer/>
        </Form>
      </div>
    </div>
  );
}

export default Contact;