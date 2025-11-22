# Portfolio

## Project Overview

This is a **modern portfolio website** showcasing my work, experience, and skills. It demonstrates a micro‑frontend architecture using **Module Federation** to compose multiple independent applications (main, minimal, and host) into a single seamless experience.

## Tech Stack

- **Framework**: Vite (React) – fast dev server and build tooling
- **Micro‑frontend**: `vite-plugin-federation` for Module Federation
- **Styling**: Vanilla CSS with modern design patterns (glassmorphism, brutalist grid, CSS variables, dark/light/system themes)
- **Animations**: `framer-motion` for smooth UI transitions and custom cursor effects
- **State Management**: React Context for theming and shared UI components
- **Package Management**: Yarn workspaces (monorepo) with shared packages (`@portfolio/data`, `@portfolio/shared`)
- **Version Control**: Git + GitHub (public repo)

## Features

- **Global Theme Support** – Light, Dark, and System preferences
- **Custom Cursor** – Interactive cursor with glow/minimal variants using `framer-motion`
- **Animated Loader** – Modern loading indicator for lazy‑loaded micro‑frontends
- **Responsive Layouts** – Adaptive designs for desktop and mobile
- **Bento‑grid Project Showcase** – Clean, card‑based project display
- **Timeline Experience Section** – Animated timeline of work history

---

Feel free to explore the code, run the project locally, and customize the design to suit your own portfolio needs.
