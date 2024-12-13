'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Вашето съобщение беше изпратено!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light text-gray-900 mb-8 text-center">
        Контакт
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-200"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Име
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-gray-900 focus:border-gray-900 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Имейл
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow-sm focus:ring-gray-900 focus:border-gray-900 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Съобщение
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="shadow-sm focus:ring-gray-900 focus:border-gray-900 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-gray-900 text-white font-light px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            Изпрати
          </button>
        </div>
      </form>
    </main>
  )
}
