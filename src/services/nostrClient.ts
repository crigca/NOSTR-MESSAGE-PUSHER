import { SimplePool } from 'nostr-tools';
import { signEvent } from '../utils/sign';

// Función para publicar un evento a un relay de Nostr
export async function publishEvent(event: any, privateKey: Uint8Array): Promise<void> {
    await signEvent(event, privateKey);

    const pool = new SimplePool();
    const relay = await pool.ensureRelay('wss://relay.damus.io');

    try {
        relay.publish(event);
        console.log('Mensaje publicado en el relay:', event);
    } catch (error) {
        console.error('Error al publicar el mensaje:', error);
    }
}
