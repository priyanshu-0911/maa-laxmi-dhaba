// src/components/ContactForm.jsx

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Sending your message...');

    const dataToSend = {
      ...formData,
      access_key: 'c4730a43-dbb5-4284-8079-8e028000c3d1', // Your key is here
      subject: `New Booking Inquiry from ${formData.name}`,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! We will contact you soon.', { id: toastId });
        // Reset form
        setFormData({ name: '', phone: '', date: '', guests: '', message: '' });
      } else {
        toast.error(`Error: ${result.message}`, { id: toastId });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { id: toastId });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Full Name"
        required
        className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <div className="flex gap-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-1/2 p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          placeholder="No. of Guests"
          required
          className="w-1/2 p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Any special requests? (Optional)"
        rows="3"
        className="w-full p-3 bg-zinc-700 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      ></textarea>
      <button
        type="submit"
        className="w-full py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all duration-300"
      >
        Send Booking Request
      </button>
    </form>
  );
}