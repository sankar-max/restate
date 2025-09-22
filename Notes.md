# React Native + Tailwind CSS Setup (NativeWind)

This guide provides a professional and minimal setup to use **Tailwind CSS** in a **React Native** project using [NativeWind](https://www.nativewind.dev/).

---

## 🚀 Prerequisites

Before you begin, make sure you have:

- A React Native project (Expo or React Native CLI)
- Node.js and npm installed

---

## 📦 Step 1: Install NativeWind

Install `nativewind` and its peer dependencies:

```bash
npm install nativewind

// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("nativewind/babel"),
};

module.exports = config;

npx tailwindcss init


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

🧾 Step 4 (Optional): Web Support with Global CSS

Create a global.css file:

/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
