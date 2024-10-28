import { publishEvent } from './services/nostrClient';
import dotenv from 'dotenv';
import WebSocket from 'ws';
import { decodePrivateKey, generatePublicKey } from './utils/keys';

// Configuración de WebSocket para nostr-tools
(global as any).WebSocket = WebSocket;

// Cargar variables de entorno
dotenv.config();

// Decodificar clave privada desde `.env`
const privateKeyBech32 = process.env.PRIVATE_KEY || '';
const privateKey = decodePrivateKey(privateKeyBech32);
const publicKey = generatePublicKey(privateKey);

// Crear un evento para enviar
const event = {
    kind: 1,
    pubkey: publicKey,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: "¡Hola NOSTR!!!!",
    id: '',
    sig: ''
};

// Ejecuta la función para publicar el mensaje
(async () => {
    await publishEvent(event, privateKey);
})();
