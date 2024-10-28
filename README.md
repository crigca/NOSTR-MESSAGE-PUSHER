NOSTR-MESSAGE-PUSHER

NOSTR-MESSAGE-PUSHER is a lightweight TypeScript project designed to simplify the process of sending messages to Nostr relays. This tool allows users to quickly create, sign, and publish text messages across any Nostr-compatible relay using their private keys. Ideal for automating message distribution and experimenting with the Nostr protocol.





🌟 Features

Publish messages to Nostr relays: Easily connect to any Nostr relay and push your content.

Secure message signing: Utilize your private key to securely sign messages.

Public key generation: Automatically generate a public key from your private key.

Simple modular code: Designed for easy customization and extension.

📜 Prerequisites

Make sure you have the following before getting started:

Node.js (version 14 or higher)

TypeScript installed globally:

npm install -g typescript

Access to a Nostr-compatible relay (e.g., wss://relay.damus.io, wss://relay.iris.to)

🔧 Installation

Clone the repository:

git clone git@github.com:crigca/NOSTR-MESSAGE-PUSHER.git

Navigate to the project directory:

cd NOSTR-MESSAGE-PUSHER

Install the dependencies:

npm install

⚙️ Setup

Add your private key:

Create a .env file in the src directory.

Add your private key in Bech32 format (starts with nsec1) like this:

PRIVATE_KEY=nsec1yourprivatekeyhere

Configure your relay (optional):

The project defaults to wss://relay.damus.io. To change it, modify the publishEvent function in src/services/nostrClient.ts:

const relay = await pool.ensureRelay('wss://your-relay-url');

🚀 Usage

Customize your message:

Edit the content of the message in src/index.ts:

const event = {
    kind: 1,
    pubkey: publicKey,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: "Your message here!",
    id: '',
    sig: ''
};

Run the script:

npx ts-node src/index.ts

Output:

Upon success, you will see a message indicating that the event was published:

Message published to relay: { ...event details... }

📂 Project Structure

NOSTR-MESSAGE-PUSHER/
│
├── src/
│   ├── config/              # Environment configurations
│   ├── services/            # Nostr client services
│   ├── utils/               # Utility functions (e.g., signing, key management)
│   └── index.ts             # Main entry point of the project
│
├── .env                     # Store your private key here
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation

🤝 Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the issues page for known issues or to open a new one.

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

📨 Contact

For questions or suggestions, please open an issue or contact:

Email: cristiancalvo80@gmail.com

GitHub: crigca


