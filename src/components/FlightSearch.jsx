"use client";

import { useState } from "react";
import { FaChevronDown, FaFilter, FaThumbsUp, FaBolt } from "react-icons/fa";
import FlightForm from "./FlightForm";
import FlightCard from "./FlightCard";
import { Button } from "./ui/Button";
import { Select } from "./ui/Select";
import { Slider } from "./ui/Slider";
import { Dialog } from "./ui/Dialog";
import AlMusafeerLogo from "../assets/AlMusafeerLogo.png";
import etihadLogo from "../assets/etihadLogo.png";
import Emirates_logo from "../assets/Emirates_logo.png";
import qatarAirways from "../assets/qatarAirways.png";

// Sample flight data
const initialFlights = [
  {
    id: 1,
    airlineName: "Etihad Airways",
    airlineLogo: etihadLogo,
    fromLocation: "COK",
    toLocation: "DXB",
    price: 80.0,
    duration: "6 HOM",
    departureTime: "05:45",
    arrivalTime: "09:20",
    departureDate: "On Thu Jun 25 2023",
    returnDate: "On Tue Jul 15 2023",
    refundable: true,
    flightNumber: "ET852",
    cabinClass: "Economy",
  },
  {
    id: 2,
    airlineName: "Emirates",
    airlineLogo: Emirates_logo,
    fromLocation: "COK",
    toLocation: "DXB",
    price: 130.0,
    duration: "5 HOM",
    departureTime: "07:30",
    arrivalTime: "10:30",
    departureDate: "On Thu Jun 25 2023",
    returnDate: "On Tue Jul 15 2023",
    refundable: true,
    flightNumber: "EK563",
    cabinClass: "Economy",
  },
  {
    id: 3,
    airlineName: "Qatar Airways",
    airlineLogo: qatarAirways,
    fromLocation: "COK",
    toLocation: "DXB",
    price: 135.0,
    duration: "7 HOM",
    departureTime: "09:15",
    arrivalTime: "14:15",
    departureDate: "On Thu Jun 25 2023",
    returnDate: "On Tue Jul 15 2023",
    refundable: false,
    flightNumber: "QR328",
    cabinClass: "Economy",
  },
];

function FlightSearch() {
  const [flights, setFlights] = useState(initialFlights);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filterByAirline, setFilterByAirline] = useState("");
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [showAddFlightDialog, setShowAddFlightDialog] = useState(false);

  // Add a new flight to the list
  const addFlight = (flight) => {
    const newFlight = {
      ...flight,
      id: flights.length + 1,
    };
    setFlights([...flights, newFlight]);
    setShowAddFlightDialog(false);
  };

  // Sort flights based on selected criteria
  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "duration") {
      // Simple string comparison for duration
      const durationA = a.duration.replace(" HOM", "");
      const durationB = b.duration.replace(" HOM", "");
      return sortOrder === "asc"
        ? Number.parseInt(durationA) - Number.parseInt(durationB)
        : Number.parseInt(durationB) - Number.parseInt(durationA);
    } else if (sortBy === "departureTime") {
      return sortOrder === "asc"
        ? a.departureTime.localeCompare(b.departureTime)
        : b.departureTime.localeCompare(a.departureTime);
    }
    return 0;
  });

  // Filter flights based on selected criteria
  const filteredFlights = sortedFlights.filter((flight) => {
    // Filter by price range
    if (flight.price < priceRange[0] || flight.price > priceRange[1]) {
      return false;
    }

    // Filter by airline if selected
    if (filterByAirline && flight.airlineName !== filterByAirline) {
      return false;
    }

    return true;
  });

  // Get unique airlines for filter dropdown
  const airlines = [...new Set(flights.map((flight) => flight.airlineName))];

  // Find cheapest, fastest, and best value flights
  const cheapestFlight = [...flights].sort((a, b) => a.price - b.price)[0];
  const fastestFlight = [...flights].sort((a, b) => {
    const durationA = Number.parseInt(a.duration.replace(" HOM", ""));
    const durationB = Number.parseInt(b.duration.replace(" HOM", ""));
    return durationA - durationB;
  })[0];
  const bestValueFlight = [...flights].sort((a, b) => {
    // Best value is a combination of price and duration (lower is better)
    const valueA = a.price * Number.parseInt(a.duration.replace(" HOM", ""));
    const valueB = b.price * Number.parseInt(b.duration.replace(" HOM", ""));
    return valueA - valueB;
  })[0];

  // Handle sort change
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Reset filters
  const resetFilters = () => {
    setPriceRange([0, 200]);
    setFilterByAirline("");
    setShowFilterDialog(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={AlMusafeerLogo}
              alt="Almusafeer Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-xl font-bold">ALMUSAFEER</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              My Booking
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Register
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Login
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <Button variant="ghost" className="text-white">
              KWD <FaChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="ghost" className="text-white">
              العربية
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Sorting and Filtering */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <div className="bg-purple-600 text-white rounded-full px-4 py-2 flex items-center">
              <span className="mr-2">Sort:</span>
              <Select
                value={sortBy}
                setSortBy={setSortBy}
                onChange={handleSortChange}
                options={[
                  { value: "price", label: "Price" },
                  { value: "duration", label: "Duration" },
                  { value: "departureTime", label: "Departure" },
                ]}
                className="!text-black bg-white"
              />
              <button className="text-white p-0 ml-1" onClick={toggleSortOrder}>
                <FaChevronDown
                  className={`h-4 w-4 transition-transform ${
                    sortOrder === "desc" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <Button
              className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-full px-4 py-2"
              onClick={() => setShowFilterDialog(true)}
            >
              <FaFilter className="h-4 w-4" />
              <span>Filter</span>
            </Button>

            {/* Filter Dialog */}
            {showFilterDialog && (
              <Dialog
                title="Filter Flights"
                onClose={() => setShowFilterDialog(false)}
              >
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Price Range (KWD {priceRange[0]} - {priceRange[1]})
                    </label>
                    <Slider
                      min={0}
                      max={200}
                      step={1}
                      value={priceRange}
                      onChange={(value) => setPriceRange(value)}
                      className="my-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Airline</label>
                    <Select
                      value={filterByAirline}
                      onChange={(value) => setFilterByAirline(value)}
                      options={[
                        { value: "", label: "All Airlines" },
                        ...airlines.map((airline) => ({
                          value: airline,
                          label: airline,
                        })),
                      ]}
                    />
                  </div>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              </Dialog>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md px-4 py-2 flex items-center">
              <FaBolt className="h-4 w-4 mr-2" />
              <span>Cheapest: {cheapestFlight?.price.toFixed(3)}</span>
            </div>
            <div className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center">
              <FaBolt className="h-4 w-4 mr-2" />
              <span>Fastest: {fastestFlight?.duration}</span>
            </div>
            <div className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 flex items-center">
              <FaThumbsUp className="h-4 w-4 mr-2" />
              <span>Best Value: {bestValueFlight?.price.toFixed(3)}</span>
            </div>
          </div>
        </div>

        {/* Flight Results */}
        <div className="space-y-4">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No flights match your current filters.
              </p>
              <Button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;
