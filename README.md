# 🎉 Emoji Party - Real-time SSE Server

A **Node.js Server-Sent Events (SSE)** implementation powering a real-time emoji party application. Users can join instantly, pick emojis, and throw them onto a shared canvas where everyone sees the action in real-time.

🌐 **Live App**: [https://playemoji.netlify.app/](https://playemoji.netlify.app/)

## 📖 About Server-Sent Events (SSE)

Server-Sent Events enable **one-way communication** from server to client over HTTP. Perfect for real-time updates where you only need to push data from server to client.

**Primary Use Cases:**
- Real-time notifications & live feeds
- Data streaming (stock prices, sports scores)
- Progress monitoring & activity feeds
- Live dashboards & analytics

## 📚 Learn More About SSE

- [Server-Sent Events Data Streaming - Shopify Engineering](https://shopify.engineering/server-sent-events-data-streaming)
- [Server-Sent Events Guide - Ably](https://ably.com/topic/server-sent-events)
- [Scaling Stateful Connections to Millions - Sahaj AI](https://www.sahaj.ai/scaling-stateful-connections-to-millions/)


## 🧩 How It Works

1. **Client Connection**: Frontend establishes SSE connection to `/events/emoji-stream`
2. **Emoji Action**: User throws emoji → Frontend sends POST to `/api/emoji-throw`
3. **Broadcast**: Server validates data and broadcasts to all connected SSE clients
4. **Real-time Update**: All clients receive the emoji data instantly via SSE
5. **Heartbeat**: Server sends periodic heartbeats to maintain connections



## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React/JS)                     │
│                https://playemoji.netlify.app/               │
└─────────────────────┬───────────────────────────────────────┘
                     │
                     │ HTTP Requests & SSE Connection
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   Express Server                            │
│                    (server.js)                             │
├─────────────────────┬───────────────────────────────────────┤
│                     │                                       │
│  ┌─────────────────▼──────────────────┐                    │
│  │         API Routes                  │                    │
│  │      (/api/emoji-throw)            │                    │
│  │     (apiRoutes.js)                 │                    │
│  └─────────────────┬──────────────────┘                    │
│                     │                                       │
│                     ▼                                       │
│  ┌──────────────────────────────────────┐                  │
│  │       API Controllers               │                  │
│  │    (apiControllers.js)              │                  │
│  │   - Process emoji data              │                  │
│  │   - Validate requests               │                  │
│  └─────────────────┬────────────────────┘                  │
│                     │                                       │
│                     ▼                                       │
│  ┌──────────────────────────────────────┐                  │
│  │        SSE Manager                   │                  │
│  │      (sseManager.js)                 │                  │
│  │   - Manage client connections       │                  │
│  │   - Broadcast to all clients        │                  │
│  │   - Handle heartbeats               │                  │
│  └─────────────────┬────────────────────┘                  │
│                     │                                       │
│                     ▼                                       │
│  ┌──────────────────────────────────────┐                  │
│  │         SSE Routes                   │                  │
│  │     (/events/emoji-stream)           │                  │
│  │      (sseRoutes.js)                  │                  │
│  │   - Establish SSE connections       │                  │
│  │   - Send real-time updates          │                  │
│  └──────────────────────────────────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

## 🗂️ Project Structure

```
server_sent_events/
├── server.js              # Main server entry point
├── package.json           # Dependencies and scripts
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   └── apiControllers.js  # API request handlers
├── routes/
│   └── apiRoutes.js       # API route definitions
├── sse/
│   ├── sseManager.js      # SSE connection management
│   └── sseRoutes.js       # SSE endpoint definitions
├── utils/
│   └── globalUtils.js     # Utility functions
└── db/
    └── triggers.sql       # Database triggers
```

## 🎯 Built For

This project was created as a **learning experiment** to understand and demonstrate Server-Sent Events implementation in Node.js. It serves as a practical example of real-time communication patterns.

## 🔄 SSE vs WebSockets

| Feature | SSE | WebSocket |
|---------|-----|-----------|
| **Communication** | Unidirectional (Server → Client) | Bidirectional |
| **Protocol** | HTTP/HTTPS | WebSocket Protocol |
| **Reconnection** | Automatic | Manual implementation needed |
| **Browser Support** | Excellent (HTML5 standard) | Good |
| **Complexity** | Simple | More complex |
| **Use Cases** | Live feeds, notifications, real-time updates | Chat, gaming, collaborative apps |


## 🚀 Clone and Run

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/brajmohanT/sse_server.git
   cd sse_server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=9001
   FRONT_END_URL=http://localhost:3000
   ```

4. **Run the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Server will be running at**
   ```
   http://localhost:9001
   ```

---

**Author**: Brajmohan  
**License**: ISC
