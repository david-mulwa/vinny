"use client"

import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import Image from 'next/image'


const Page = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [pledge, setPledge] = useState('')
  const [reminder, setReminder] = useState('')
  const [how, setHow] = useState('')

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return;

    emailjs.send(
      'service_y7cxpme',
      'template_im8vj0q',
      {
        name,
        phone,
        email,
        pledge,
        reminder,
        how,
      },
      'jlkPZwbol4fDKVM1y'
    )
    
      .then(
        () => {
          alert('Form submitted successfully!')
          // Clear form
          setName('')
          setPhone('')
          setEmail('')
          setPledge('')
          setReminder('')
          setHow('')
        },
        (error) => {
          alert('Failed to send form. Please try again.')
          console.log(error)
        }
        
      )
  }

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="flex items-center justify-center">
        <Image 
          src="./favicon.jpg"
          alt="jacky wed vinny"
          className="w-[300px] h-[300px] max-md:w-full max-md:h-full"
        />
      </div>
      <div>
        <h1 className='text-3xl font-bold mt-3'>RSVP</h1>
        <h2 className="text-xl font-semibold mt-2">A Beautiful Story Is About to Begin...</h2>
        <h2 className='text-xl font-semibold mt-2'>Jacky weds Vinny</h2>
        <p className='mt-3'>
        Dear Friends and Family,
        </p>
        <p className='mt-2'>You hold a special place in our hearts, and it is with great joy that we invite you
        to share in the celebration of our love.</p>
        <p className='mt-3'>We warmly welcome you to our wedding on <span className='text-lg'><b>August 9th, 2025</b></span>, at <span className='text-lg'><b>Samdove Gardens</b></span>, located along the Eastern Bypass.</p>
        <p className='mt-3'>
        As we prepare for this special day, we kindly seek your financial support to help
us reach our budget of <span className='text-lg'><b>Ksh 500,000</b></span>. Contributions can be sent
to <span className='text-lg'><b>0725 120 785 (Marchel Ochieng)</b></span>.
        </p>
        <p className='mt-3'>
        We are excited to share our love story with you and invite you to be a part of our special day.
        </p>
        <p className='mt-3'>Above all, your prayers, love, and presence would mean the world to us.</p>
        <p className='mt-3'>Thank you, and may God bless you abundantly for your kindness and support.</p>
        <p className='mt-3'>
        With love,
        </p>
        <p className='text-lg'>
        <span><b>Jacky & Vinny</b></span>
        </p>
        <p className='text-lg mt-4'><b>Kindly fill out the pledge form below!</b></p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mt-5">
        <div>
          <label className="block text-sm font-medium mb-1">FULL NAME</label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 bg-white h-10 p-4 w-full rounded-lg text-sm text-black placeholder:text-black"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="border border-gray-300 bg-white h-10 p-4 w-full rounded-lg text-sm text-black placeholder:text-black"
            placeholder="Enter your phone number"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="border border-gray-300 bg-white h-10 p-4 w-full rounded-lg text-sm text-black placeholder:text-black"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pledge Amount</label>
          <input
          required
            type="number"
            name="pledge"
            className="border border-gray-300 bg-white h-10 p-4 w-full rounded-lg text-sm text-black placeholder:text-black"
            placeholder="Enter your Pledge Amount"
            value={pledge}
            onChange={(e) => setPledge(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">When do you want to be reminded?</label>
          <input
          required
            type="date"
            name="reminder"
            className="border border-gray-300 bg-white h-10 px-4 w-full rounded-lg text-sm text-black"
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">How would you love to be reminded?</label>
          <select
            name="how"
            className="border border-gray-300 bg-white h-10 px-4 w-full rounded-lg text-sm text-black"
            value={how}
            onChange={(e) => setHow(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#ffa500] text-white px-4 py-2 rounded-lg hover:bg-[#ffa500] transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Page
