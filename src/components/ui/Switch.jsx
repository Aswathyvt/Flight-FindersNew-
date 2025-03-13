"use client"

export function Switch({ id, checked = false, onChange, className = "", ...props }) {
  return (
    <label htmlFor={id} className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
        {...props}
      />
      <div className={`w-11 h-6 bg-gray-200 rounded-full peer ${checked ? "bg-blue-600" : ""}`}>
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${checked ? "translate-x-5" : "translate-x-1"}`}
        ></div>
      </div>
    </label>
  )
}

