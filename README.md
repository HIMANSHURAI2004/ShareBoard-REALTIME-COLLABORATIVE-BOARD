# ShareBoard 🖌️

**ShareBoard** is a powerful real-time collaborative whiteboard built with **Next.js 14**,**Clerk**, **Convex**, and **Liveblocks**. It enables teams to brainstorm, sketch, and collaborate seamlessly.

## 🚀 Features

- 🛠️ **Whiteboard from scratch** – Draw, write, and collaborate in real-time.
- 🧰 **Rich Toolbar** – Includes text, shapes, sticky notes, and a freehand pencil tool.
- 🪄 **Layering Functionality** – Arrange elements with ease.
- 🎨 **Coloring System** – Customize elements with different colors.
- ↩️ **Undo & Redo** – Never lose progress.
- ⌨️ **Keyboard Shortcuts** – Boost efficiency with quick commands.
- 🤝 **Real-time Collaboration** – Work together using **Liveblocks**.
- 💾 **Real-time Database** – Powered by **Convex** for instant updates.
- 🔐 **Authentication & Organization Management** – Secure access with **Clerk** for auth, orgs, and invites.
- ⭐ **Favoriting Functionality** – Save important whiteboards.
- 🌐 **Built with Next.js 14** – Modern and optimized framework.
- 💅 **Styled with TailwindCSS & ShadcnUI** – Clean and elegant UI.

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/shareboard.git
cd shareboard
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add the following variables:
```plaintext
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

LIVEBLOCKS_SECRET_KEY=
```

### 4️⃣ Start the Backend
Run the Convex backend:
```sh
npx convex dev
```

### 5️⃣ Run the Next.js App
```sh
npm run dev
```
Then open your browser and go to http://localhost:3000.

### 📌 Tech Stack
- Frontend: Next.js 14, TailwindCSS, ShadcnUI
- Backend: Convex (real-time database)
- Collaboration: Liveblocks (real-time sync)
- Authentication: Clerk (user management, orgs, invites)
