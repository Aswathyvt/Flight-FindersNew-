import { Button } from "./ui/Button";

function FlightCard({ flight }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Departure Info */}
        <div className="col-span-1">
          <div className="text-blue-600 font-bold">DEPARTURE</div>
          <div className="text-gray-500 text-sm">{flight.departureDate}</div>
          <div className="flex items-center mt-2">
            <div className="w-16 h-16 relative mr-2">
              <img
                src={flight.airlineLogo || "/placeholder.svg"}
                alt={flight.airlineName}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-medium">{flight.airlineName}</div>
              <div className="text-sm text-gray-500">{flight.flightNumber}</div>
              <div className="text-sm text-gray-500">{flight.cabinClass}</div>
            </div>
          </div>
        </div>

        {/* Flight Details */}
        <div className="col-span-2 flex items-center justify-between">
          <div className="text-center">
            <div className="text-xl font-bold">{flight.departureTime}</div>
            <div className="text-lg font-medium">{flight.fromLocation}</div>
          </div>
          <div className="flex flex-col items-center flex-1 px-4">
            <div className="text-xs text-gray-500 mb-1">
              Total Time: {flight.duration}
            </div>
            <div className="relative w-full">
              <div className="h-0.5 bg-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"></div>
              <div className="flex justify-between relative">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">{flight.arrivalTime}</div>
            <div className="text-lg font-medium">{flight.toLocation}</div>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="col-span-1 flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-500 line-through">
            KWD {(flight.price + 10).toFixed(3)}
          </div>
          <div className="text-xl font-bold">KWD {flight.price.toFixed(3)}</div>
          <div className="text-green-500 text-sm">
            {flight.refundable ? "Refundable" : "Non-refundable"}
          </div>
          <Button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            SELECT +
          </Button>
        </div>
      </div>

      {/* Return Flight if available */}
      {flight.returnDate && (
        <div className="mt-4 pt-4 border-t">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <div className="text-blue-600 font-bold">RETURN</div>
              <div className="text-gray-500 text-sm">{flight.returnDate}</div>
              <div className="flex items-center mt-2">
                <div className="w-16 h-16 relative mr-2">
                  <img
                    src={flight.airlineLogo || "/placeholder.svg"}
                    alt={flight.airlineName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-medium">{flight.airlineName}</div>
                  <div className="text-sm text-gray-500">
                    {flight.flightNumber}
                  </div>
                  <div className="text-sm text-gray-500">
                    {flight.cabinClass}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-between">
              <div className="text-center">
                <div className="text-xl font-bold">{flight.departureTime}</div>
                <div className="text-lg font-medium">{flight.fromLocation}</div>
              </div>
              <div className="flex flex-col items-center flex-1 px-4">
                <div className="text-xs text-gray-500 mb-1">
                  Total Time: {flight.duration}
                </div>
                <div className="relative w-full">
                  <div className="h-0.5 bg-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"></div>
                  <div className="flex justify-between relative">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">{flight.arrivalTime}</div>
                <div className="text-lg font-medium">{flight.toLocation}</div>
              </div>
            </div>

            <div className="col-span-1"></div>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-center">
        <Button
          variant="outline"
          className="text-blue-600 border border-blue-600 px-4 py-2 rounded"
        >
          Flight Details
        </Button>
      </div>
    </div>
  );
}

export default FlightCard;
