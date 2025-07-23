# ♟️ Chess — Real-Time Multiplayer Web App

## 🧠 Project Vision
This project is a full-stack real-time multiplayer chess game built from scratch using modern web technologies. The goal is to simulate a real development experience and deepen skills in TypeScript, WebSockets, full-stack architecture, and OOP.

The project is built in a monorepo and emphasizes real-world software engineering workflows (PRs, GitHub Projects, code reviews, etc.).

---

## 🛠️ Tech Stack

| Layer       | Technology                                  |
|-------------|---------------------------------------------|
| Frontend    | React + TypeScript                          |
| Backend     | Node.js + Express + TypeScript              |
| Real-Time   | Socket.IO (WebSockets).                     |
| Auth        | JWT                                         |
| Database    | PostgreSQL (via Docker)                     |
| Hosting     | Local-first (future: Railway, Render, etc.) |

---

## ✅ MVP Features

| Feature        | Details                                        |
|----------------|------------------------------------------------|
| Chess logic    | Self-coded rules, validation, and move history |
| Real-time game | Sockets used to sync player moves              |
| Matchmaking    | Join lobby, find a random player               |
| Timer          | Countdown per side, e.g., 5 minutes            |
| Chat           | Simple player-to-player messaging              |
| Login/sign up   | Basic account system using JWT                |
| Database       | Store users, matches, and results              |
| Deployment     | Stretch goal (e.g. Render, Railway, Fly.io)    |

---

## 🧱 Project Structure (Monorepo)

