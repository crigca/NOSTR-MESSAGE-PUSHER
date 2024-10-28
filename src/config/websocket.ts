import WebSocket from 'ws';

// Configura WebSocket globalmente para nostr-tools
(global as any).WebSocket = WebSocket;
