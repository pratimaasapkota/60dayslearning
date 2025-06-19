import React, { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
          const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const validate = () => {
    let tempErrors = {}
 
    if (!formData.name) tempErrors.name = 'Name is required'
    if (!formData.email) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       tempErrors.email = 'Email is invalid'
    }
    

    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form Submitted:', formData)
      setSubmitted(true)
      // Clear form
      setFormData({
        name: '',
        email: '',
        password: '',
      })
    }
  }

  return (
    <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Registration Form</h2>
      {submitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
