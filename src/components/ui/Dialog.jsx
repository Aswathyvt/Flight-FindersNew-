"use client"

import { useEffect, useRef } from "react"
import { FaTimes } from "react-icons/fa"

export function Dialog({ children, title, onClose, className = "" }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    // Prevent scrolling when dialog is open
    document.body.style.overflow = "hidden"

    // Handle escape key press
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  // Handle click outside dialog
  const handleOutsideClick = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div
        ref={dialogRef}
        className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-[90vh] overflow-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

