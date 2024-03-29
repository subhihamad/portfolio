import React,{useState , useEffect, useRef} from 'react'
import './contact.scss'
import AnimitedLetters from '../AnimitedLetters/AnimitedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
const Contact = () => {
    const [letterClass , setLetterClass]=useState("text-animate");
    const form =useRef();
    useEffect(()=>{
        setTimeout(()=>{
          setLetterClass('text-animate-hover')
        },4000)
      },[])
      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_etsjmsq','template_a4s4uj9', form.current, 'Rs0DKVQTwzkkHId65')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload()
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimitedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15} />
            </h1>
            <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
            </p>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
            <ul>
                <li className="half">
                <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                />
                </li>
                <li>
                <textarea
                    placeholder="Message"
                    name="message"
                    required
                ></textarea>
                </li>
                <li>
                <input type="submit" className="flat-button" value="SEND" />
                </li>
            </ul>
            </form>
        </div>
        </div>
        <div className='map-info'>
          Subhi Hamad ,
          <br />
          Syria,Aleppo
          <br />
          <span>hamadsubhi1@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[ 36.1746, 37.2282]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.1746, 37.2282]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        <Loader type='ball-pulse'  />
    </div>
    </>
  )
}

export default Contact