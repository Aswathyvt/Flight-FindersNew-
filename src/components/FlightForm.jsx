"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Select } from "./ui/Select";
import { Switch } from "./ui/Switch";

function FlightForm({ onAddFlight }) {
  const [flight, setFlight] = useState({
    airlineName: "",
    airlineLogo: "/placeholder.svg",
    fromLocation: "",
    toLocation: "",
    price: 0,
    duration: "",
    departureTime: "",
    arrivalTime: "",
    departureDate: "",
    returnDate: "",
    refundable: false,
    flightNumber: "",
    cabinClass: "Economy",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight((prev) => ({
      ...prev,
      [name]: name === "price" ? Number.parseFloat(value) : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFlight((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFlight(flight);
    // Reset form
    setFlight({
      airlineName: "",
      airlineLogo: "/placeholder.svg",
      fromLocation: "",
      toLocation: "",
      price: 0,
      duration: "",
      departureTime: "",
      arrivalTime: "",
      departureDate: "",
      returnDate: "",
      refundable: false,
      flightNumber: "",
      cabinClass: "Economy",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="airlineName" className="block text-sm font-medium">
            Airline Name
          </label>
          <Input
            id="airlineName"
            name="airlineName"
            value={flight.airlineName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="flightNumber" className="block text-sm font-medium">
            Flight Number
          </label>
          <Input
            id="flightNumber"
            name="flightNumber"
            value={flight.flightNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="fromLocation" className="block text-sm font-medium">
            From Location (Airport Code)
          </label>
          <Input
            id="fromLocation"
            name="fromLocation"
            value={flight.fromLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="toLocation" className="block text-sm font-medium">
            To Location (Airport Code)
          </label>
          <Input
            id="toLocation"
            name="toLocation"
            value={flight.toLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="block text-sm font-medium">
            Price (KWD)
          </label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.001"
            value={flight.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="duration" className="block text-sm font-medium">
            Total Duration (e.g., "6 HOM")
          </label>
          <Input
            id="duration"
            name="duration"
            value={flight.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="departureTime" className="block text-sm font-medium">
            Departure Time (HH:MM)
          </label>
          <Input
            id="departureTime"
            name="departureTime"
            value={flight.departureTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="arrivalTime" className="block text-sm font-medium">
            Arrival Time (HH:MM)
          </label>
          <Input
            id="arrivalTime"
            name="arrivalTime"
            value={flight.arrivalTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="departureDate" className="block text-sm font-medium">
            Departure Date
          </label>
          <Input
            id="departureDate"
            name="departureDate"
            value={flight.departureDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="returnDate" className="block text-sm font-medium">
            Return Date (optional)
          </label>
          <Input
            id="returnDate"
            name="returnDate"
            value={flight.returnDate}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cabinClass" className="block text-sm font-medium">
            Cabin Class
          </label>
          <Select
            value={flight.cabinClass}
            onChange={(value) => handleSelectChange("cabinClass", value)}
            options={[
              { value: "Economy", label: "Economy" },
              { value: "Business", label: "Business" },
              { value: "First", label: "First" },
            ]}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="refundable"
            checked={flight.refundable}
            onChange={(checked) =>
              setFlight((prev) => ({ ...prev, refundable: checked }))
            }
          />
          <label htmlFor="refundable" className="text-sm font-medium">
            Refundable
          </label>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Flight
      </Button>
    </form>
  );
}

export default FlightForm;
