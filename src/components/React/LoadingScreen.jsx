import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Espera un momento...",
    "Se están preparando las hamburguesas 🍔",
    "Calentando la parrilla...",
    "Solo un minuto más...",
    "Agregando ingredientes frescos...",
    "Casi listo para servir...",
    "Preparando la mejor experiencia...",
    "Últimos toques gourmet...",
    "¡Ya casi terminamos!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loading-screen" className="loading-screen">
      {/* Partículas de fondo */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}></div>
        ))}
      </div>

      {/* Efectos de glow */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      {/* Contenido principal */}
      <div className="loading-content">
        {/* Logo/Título */}
        <div className="loading-logo">
          <h1 className="logo-text" style={{
            fontFamily: 'Poppins-Bold'
          }}>BIG NIGGA BURGER</h1>
          <div className="logo-underline"></div>
        </div>

        {/* Spinner */}
        <div className="spinner-container">
          <div className="spinner">
            <div className="spinner-inner"></div>
            <div className="spinner-glow"></div>
          </div>
        </div>

        {/* Mensajes cambiantes */}
        <div className="message-container">
          <p className="loading-message" key={currentMessage}>
            {messages[currentMessage]}
          </p>
        </div>

        {/* Barra de progreso decorativa */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ff6b35;
          border-radius: 50%;
          animation: float 4s infinite ease-in-out;
          box-shadow: 0 0 10px #ff6b35;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse-glow 3s infinite ease-in-out;
        }

        .glow-orb-1 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .glow-orb-2 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255, 165, 0, 0.2) 0%, transparent 70%);
          bottom: 30%;
          right: 15%;
          animation-delay: 1s;
        }

        .glow-orb-3 {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, transparent 70%);
          top: 60%;
          left: 70%;
          animation-delay: 2s;
        }

        .loading-content {
          text-align: center;
          z-index: 10;
          position: relative;
        }

        .loading-logo {
          margin-bottom: 3rem;
        }

        .logo-text {
          font-size: 3.5rem;
          font-weight: 900;
          background: linear-gradient(45deg, #ff6b35, #ffa500, #ff6b35);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite, glow-text 2s ease-in-out infinite;
          margin: 0;
          text-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
        }

        .logo-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #ff6b35, transparent);
          margin: 1rem auto;
          border-radius: 2px;
          animation: expand-contract 2s ease-in-out infinite;
        }

        .spinner-container {
          margin: 2rem 0;
          position: relative;
        }

        .spinner {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          position: relative;
        }

        .spinner-inner {
          width: 100%;
          height: 100%;
          border: 4px solid rgba(255, 107, 53, 0.2);
          border-top: 4px solid #ff6b35;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          position: relative;
        }

        .spinner-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 100px;
          height: 100px;
          border: 2px solid transparent;
          border-top: 2px solid rgba(255, 107, 53, 0.6);
          border-radius: 50%;
          animation: spin 2s linear infinite reverse;
          filter: blur(2px);
        }

        .message-container {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem 0;
        }

        .loading-message {
          font-size: 1.2rem;
          color: #ffffff;
          margin: 0;
          animation: slide-in 0.5s ease-out, fade-glow 1.5s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          font-weight: 500;
        }

        .progress-bar {
          width: 300px;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          margin: 2rem auto 0;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #ffa500, #ff6b35);
          background-size: 200% 100%;
          border-radius: 3px;
          animation: progress-flow 3s ease-in-out infinite, gradient-shift 2s ease-in-out infinite;
          box-shadow: 0 0 15px rgba(255, 107, 53, 0.6);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 107, 53, 0.5); }
          50% { text-shadow: 0 0 30px rgba(255, 107, 53, 0.8), 0 0 40px rgba(255, 107, 53, 0.3); }
        }

        @keyframes expand-contract {
          0%, 100% { width: 100px; opacity: 0.7; }
          50% { width: 150px; opacity: 1; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes slide-in {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-glow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes progress-flow {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .logo-text {
            font-size: 2.5rem;
          }
          
          .loading-message {
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .progress-bar {
            width: 250px;
          }
          
          .spinner {
            width: 60px;
            height: 60px;
          }
          
          .spinner-glow {
            width: 80px;
            height: 80px;
            top: -10px;
            left: -10px;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            font-size: 2rem;
          }
          
          .progress-bar {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;