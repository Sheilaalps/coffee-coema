import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const Mapa = () => {
  // A chave deve ser uma STRING (entre aspas)
  const API_KEY = 'AIzaSyDOftujVoOKYtt2949SjTTUfbNCcOfIH0s'; 
  
  const position = { lat: -23.5505, lng: -46.6333 };

  return (
    <section className="mapa-container" style={{ padding: '20px 0' }}>
      <h2 className="mapa-titulo" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Nossa Localização
      </h2>
      
      {/* Garanti que a div tenha altura e largura visíveis */}
      <div style={{ height: '450px', width: '100%', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
        <APIProvider apiKey={API_KEY}>
          <Map
            style={{ width: '100%', height: '100%' }} // Adicionado para garantir preenchimento
            defaultCenter={position}
            defaultZoom={15}
            mapId={'fb5b718e67a2e887'} // Use os primeiros 16 caracteres do seu ID ou 'DEMO_MAP_ID'
            gestureHandling={'greedy'}
            disableDefaultUI={false}
          >
            <AdvancedMarker position={position}>
              <Pin 
                background={'#4b2c20'} 
                glyphColor={'#fff'} 
                borderColor={'#000'} 
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};

export default Mapa;