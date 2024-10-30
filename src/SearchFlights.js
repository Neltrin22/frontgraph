import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SEARCH_FLIGHTS = gql`
  query SearchFlights($originCity: String!, $destinationCity: String!, $departureDate: String!) {
    searchFlights(originCity: $originCity, destinationCity: $destinationCity, departureDate: $departureDate) {
      flightId
      flightNumber
      departureTime
      arrivalTime
      price
      isDirect
    }
  }
`;

function SearchFlights() {
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  
  // Aquí añadimos refetch
  const { loading, error, data, refetch } = useQuery(SEARCH_FLIGHTS, {
    variables: { originCity, destinationCity, departureDate },
    skip: !originCity || !destinationCity || !departureDate
  });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Ciudad de origen" 
        onChange={e => setOriginCity(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Ciudad de destino" 
        onChange={e => setDestinationCity(e.target.value)} 
      />
      <input 
        type="date" 
        onChange={e => setDepartureDate(e.target.value)} 
      />
      <button onClick={() => refetch()}>Buscar Vuelos</button>

      {loading && <p>Cargando...</p>}
      {error && <p>Error en la búsqueda.</p>}
      {data && data.searchFlights.map(flight => (
        <div key={flight.flightId}>
          <p>Número de vuelo: {flight.flightNumber}</p>
          <p>Salida: {flight.departureTime}</p>
          <p>Precio: ${flight.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchFlights;
