import { bech32 } from 'bech32';
import { getPublicKey } from 'nostr-tools';

// Función para decodificar una clave privada desde formato Bech32
export function decodePrivateKey(bech32Key: string): Uint8Array {
    const { words } = bech32.decode(bech32Key);
    const privateKey = bech32.fromWords(words);
    return new Uint8Array(privateKey);
}

// Función para generar la clave pública desde la clave privada
export function generatePublicKey(privateKey: Uint8Array): string {
    return getPublicKey(privateKey);
}
