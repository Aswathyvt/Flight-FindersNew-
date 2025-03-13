"use client";

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value = [0, 100],
  onChange,
  className = "",
  ...props
}) {
  const handleChange = (e, index) => {
    const newValue = [...value];
    newValue[index] = Number.parseInt(e.target.value);
    onChange(newValue);
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="flex justify-between">
        <span className="text-sm">{min}</span>
        <span className="text-sm">{max}</span>
      </div>
      <div className="relative h-5">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={(e) => handleChange(e, 0)}
          className="absolute w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
          {...props}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={(e) => handleChange(e, 1)}
          className="absolute w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
          {...props}
        />
      </div>
    </div>
  );
}
