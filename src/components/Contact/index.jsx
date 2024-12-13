import React, { useState } from "react";
import emailjs from "emailjs-com";

// .sendForm('service_d3n3zq9', 'template_0pqxbuj', form.current, {
//         publicKey: 'UbxA-oE3azucK5gex'


function Contact() {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ contactEmail, setContactEmail ] = useState('')
  const [ contactPhone, setContactPhone] = useState('')
  const [ zipcode, setZipcode] = useState('')
  const [ companyName, setCompanyName] = useState('')
  const [ contactMessage, setContactMessage ] = useState('')


  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_d3n3zq9", "template_0pqxbuj", e.target, "UbxA-oE3azucK5gex")
      .then(
        (result) => {
          console.log('success')
          setFirstName('')
          setLastName('')
          setContactEmail('')
          setContactPhone('')
          setZipcode('')
          setCompanyName('')
          setContactMessage('')

        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        document
          .querySelector('#response-message')
          .classList.remove('hidden')
      )
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="text-center grid grid-col-1 mb-9">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">Ready to Elevate Your Vision?</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          Whether you need stunning aerial photography, cinematic drone
          videography, or precise mapping services, I’m here to help. Reach out
          today, and let’s create something extraordinary from above!
        </p>
      </div>
      <div className="container mx-auto mt-5 pt-3">
        <div className="flex justify-center">
          <form onSubmit={sendEmail} className="w-full lg:w-2/3 border rounded p-6">
            <p className="pt-1 text-gray-700 text-sm">Required *</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                  id="firstName"
                  placeholder="First Name *"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  required
                  id="lastName"
                  placeholder="Last Name *"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                name="phone_number"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                  type="tel"
                  required
                  id="phone"
                  placeholder="Phone Number *"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                name="from_email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                  type="email"
                  required
                  id="email"
                  placeholder="Email *"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Filming Zipcode */}
              <div>
                <label htmlFor="zipcode" className="sr-only">
                  Filming Zipcode
                </label>
                <input
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                  pattern="[0-9]{5}"
                  required
                  id="zipcode"
                  placeholder="Filming Zipcode *"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="sr-only">
                  Company Name
                </label>
                <input
                name="company_name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  id="company"
                  placeholder="Company Name (if applicable)"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
                />
              </div>
            </div>

            
            {/* Description */}
            <div className="mt-4">
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
               value={contactMessage} 
               onChange={(e) => setContactMessage(e.target.value)}
              name="message"
                id="description"
                required
                rows="4"
                placeholder="Description of Requirements * - Please be as detailed and as specific as possible to ensure we match your requirements"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-sky-blue"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                value={sendEmail}
                className="bg-sky-blue text-cloud-white font-medium py-2 px-6 rounded hover:scale-150 hover:bg-yellow-ochre transition duration-300"
              >
                
                Get a Free Quote Today!
              </button>
            </div>
          </form>
          
        </div>
      </div>
      <p className="hidden text-center" id="response-message">Message Sent. Thanks for reaching out!</p>
    </div>
  );
}

export default Contact;
