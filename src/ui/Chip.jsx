import React from 'react'

export default function Chip({label, isSelected, onClick}) {
  return (
    <span className={`chip ${isSelected ? 'selected' : ''}`} onClick={onClick}>
        {label}
    </span>
  )
}
