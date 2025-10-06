import React from 'react'
import '../../styles/CreateServiceOrder/FormField.css'

const FormField = ({ label, type, placeholder, icon, value, onChange, readOnly }) => {
  const getIcon = () => {
    switch (icon) {
      case 'user':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 14V12.6667C13 11.9594 12.719 11.2811 12.219 10.781C11.719 10.281 11.0406 10 10.3333 10H5.66667C4.95942 10 4.28115 10.281 3.78105 10.781C3.28095 11.2811 3 11.9594 3 12.6667V14M10.3333 4.33333C10.3333 5.80762 9.14095 7 7.66667 7C6.19238 7 5 5.80762 5 4.33333C5 2.85905 6.19238 1.66667 7.66667 1.66667C9.14095 1.66667 10.3333 2.85905 10.3333 4.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'calendar':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33333 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 6.66667H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'location':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07536 2.63214 3.54925 3.75736 2.42403C4.88258 1.29881 6.40869 0.666672 8 0.666672C9.59131 0.666672 11.1174 1.29881 12.2426 2.42403C13.3679 3.54925 14 5.07536 14 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'worker':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 14V12C3 10.3431 4.34315 9 6 9H10C11.6569 9 13 10.3431 13 12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 6L12 4L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="form-field">
      <label className="field-label">{label}</label>
      <div className="input-container">
        <div className="input-icon">
          {getIcon()}
        </div>
        <input
          type={type}
          placeholder={placeholder}
            className="field-input"
          value={value}
          onChange={onChange}
          readOnly={readOnly}
        />
      </div>
    </div>
  )
}

export default FormField
