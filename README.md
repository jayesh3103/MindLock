# MindLock – Encrypted Cognitive Memory for AI Companions

## 🏆 CyborgDB Hackathon 2025

**Challenge:** [CyborgDB Hackathon 2025](https://www.hackerearth.com/challenges/hackathon/cyborg/)  
**Theme:** Health Care

---

## 💡 About the Idea

**MindLock** is an AI-based personal companion designed to remember previous conversations securely using **CyborgDB** — a database that stores all memories in an encrypted format.

The goal is to create a safe AI mental health assistant that supports users emotionally while keeping their private data fully protected.

Unlike normal chatbots that store data in plain text or open embeddings, MindLock keeps every memory encrypted. This means even if someone gains database access, they cannot read or reconstruct the user’s information.

When a user returns for another chat, MindLock retrieves the encrypted “memory”, decrypts it **locally on the user’s device**, and responds with empathy based on previous interactions — without ever exposing private content.

---

## 🚀 Features to Build

1.  **Encrypted Memory Storage**: All user chats are converted into embeddings and stored safely in CyborgDB.
2.  **Local Decryption**: Decryption happens only on the user’s device, ensuring full confidentiality.
3.  **Emotion-Aware AI**: The AI understands and tracks the user’s emotional tone across conversations.
4.  **Therapy Continuity**: It remembers past advice and feelings, giving consistent, human-like support.
5.  **Crisis Detection**: Identifies severe distress and can alert verified professionals (with user consent).

### ✨ Good-to-Have Features

- **Offline Mode**: Works in low or no internet areas using locally cached encrypted data.
- **Personal Encryption Key**: Each user controls their own encryption key for maximum privacy.
- **Voice & Language Support**: Multi-lingual and speech-based interaction for accessibility.

---

## ⚠️ Constraints

- Encryption can slightly increase storage size and processing time.
- Local decryption requires minimal computational power from the user’s device.
- Needs proper mental health expert validation for accuracy and ethics.

## 🐛 Known Issues

- Cannot yet process visual data (like facial emotions) in real time.
- Early prototypes may have limited language understanding for regional dialects.
- Requires periodic model fine-tuning for emotionally sensitive responses.

---

## 🛠️ How to Run This Project

This project is built with **Next.js**. Follow the steps below to set it up on your local machine.

### Prerequisites

- **Node.js**: Version 18.17 or later (Recommended: LTS).
- **npm**: Comes with Node.js.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd MindLock
```

### 2. Install Dependencies

Run the following command to install all necessary packages:

```bash
npm install
```

### 3. Run the Development Server

#### 🪟 Windows

1.  Open **Command Prompt** or **PowerShell**.
2.  Navigate to the project directory.
3.  Run:
    ```bash
    npm run dev
    ```
4.  Open your browser and visit `http://localhost:3000`.

#### 🍎 macOS

1.  Open **Terminal**.
2.  Navigate to the project directory.
3.  Run:
    ```bash
    npm run dev
    ```
4.  Open your browser and visit `http://localhost:3000`.

#### 🐧 Linux

1.  Open your **Terminal**.
2.  Navigate to the project directory.
3.  Run:
    ```bash
    npm run dev
    ```
4.  Open your browser and visit `http://localhost:3000`.

### 4. Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
npm start
```

---

## 📄 License

[MIT License](LICENSE)
