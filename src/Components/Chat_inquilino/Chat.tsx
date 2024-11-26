import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASNYw6IZqJJ06f_GBT1yPuLXRxpb56zVI",
  authDomain: "chat-react-4408b.firebaseapp.com",
  projectId: "chat-react-4408b",
  storageBucket: "chat-react-4408b.firebasestorage.app",
  messagingSenderId: "131059244825",
  appId: "1:131059244825:web:33731315ada3f16e21af88",
  measurementId: "G-HF2MN63YY8",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Tipos personalizados para mensajes
interface Message {
  id: string;
  text: string;
  displayName: string;
}

// Componente de Chat
const Chat: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // Usuario autenticado
  const [message, setMessage] = useState<string>(''); // Mensaje actual
  const [messages, setMessages] = useState<Message[]>([]); // Lista de mensajes locales

  // Función para iniciar sesión con Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Manejo de inicio de sesión
  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) setUser(user);
  };

  // Enviar mensaje (solo localmente)
  const sendMessage = () => {
    if (!user) return; // Asegurarse de que el usuario esté autenticado
    if (message.trim() === '') return;

    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9), // Generar un ID único
      text: message,
      displayName: user.displayName || "Usuario",
    };

    setMessages([...messages, newMessage]); // Agregar el mensaje a la lista local
    setMessage(''); // Limpiar el input
  };

  return (
    <div style={{ padding: '20px' }}>
      {!user ? (
        <button onClick={handleLogin}>Iniciar Sesión con Google</button>
      ) : (
        <>
          <div>
            <h3>Bienvenido, {user.displayName}</h3>
            <button onClick={() => {
              auth.signOut();
              setUser(null);
            }}>
              Cerrar Sesión
            </button>
          </div>
          <div style={{
            height: '300px',
            overflowY: 'scroll',
            border: '1px solid #ccc',
            margin: '10px 0',
            padding: '10px',
          }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ marginBottom: '10px' }}>
                <strong>{msg.displayName}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              style={{ width: '80%', marginRight: '10px' }}
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
