import * as secp256k1 from '@noble/secp256k1';
import { getEventHash } from 'nostr-tools';
import { bytesToHex } from '@noble/hashes/utils';
import { sha256 } from '@noble/hashes/sha256';
import { hmac } from '@noble/hashes/hmac';

// Configurar sha256Sync y hmacSha256Sync para secp256k1
secp256k1.utils.sha256Sync = (...msgs) => {
    const hash = sha256.create();
    msgs.forEach(msg => hash.update(msg));
    return hash.digest();
};

secp256k1.utils.hmacSha256Sync = (key, ...msgs) => {
    const h = hmac.create(sha256, key);
    msgs.forEach(msg => h.update(msg));
    return h.digest();
};

// Función para firmar un evento y generar el ID y la firma
export async function signEvent(event: any, privateKey: Uint8Array): Promise<void> {
    event.id = getEventHash(event);
    const messageHash = new Uint8Array(Buffer.from(event.id, 'hex'));

    // Firma el mensaje usando schnorr.signSync
    const signature = secp256k1.schnorr.signSync(messageHash, privateKey);

    // Convertir la firma a formato hexadecimal
    event.sig = bytesToHex(signature);
}
