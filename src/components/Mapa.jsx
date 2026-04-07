import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const Mapa = () => {
  // 1. Aqui você criou a variável corretamente (com aspas)
  const API_KEY = 'AIzaSyDOftujVoOKYtt2949SjTTUfbNCcOfIH0s'; 
  
  const position = { lat: -22.8068, lng: -43.3645 };

  return (
    <section id="secao-mapa" className="mapa-container" style={{ padding: '20px 0' }}>
      <h2 className="mapa-titulo" style={{ textAlign: 'center', marginBottom: '20px', color: '#fff', fontFamily: 'Lexend Exa' }}>
        Nossa Localização
      </h2>
      
      <div style={{ height: '450px', width: '100%', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
        {/* 2. CORREÇÃO AQUI: Você deve usar a variável API_KEY que criou lá em cima */}
        <APIProvider apiKey={API_KEY}>
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={position}
            defaultZoom={15}
            mapId={'fb5b718e67a2e887'} 
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