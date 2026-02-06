# AI Co-Founder UI Design - Frontend

A modern, interactive web application built with React and TypeScript that provides an intelligent business idea validation and analysis platform powered by AI agents.

## 🎯 Project Overview

The AI Co-Founder frontend is a user-friendly interface that allows entrepreneurs and innovators to:
- Input and validate their business ideas
- Receive AI-powered analysis on market viability
- Understand user personas and market dynamics
- Analyze competitive landscapes
- Develop business revenue models
- Plan minimum viable products (MVPs)
- Get comprehensive insights and recommendations

## 🛠️ Tech Stack

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **State Management:** React Hooks
- **Icons:** Lucide React, Material UI Icons
- **Forms:** React Hook Form
- **Charts:** Recharts
- **Drag & Drop:** React DnD
- **Animations:** Motion
- **Toast Notifications:** Sonner
- **Theme Management:** Next Themes

## 📦 Prerequisites

- Node.js 16+ and npm/yarn
- The AI Co-Founder Backend API running (check backend README)

## 🚀 Getting Started

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd "AI Co-Founder UI Design"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 📁 Project Structure

```
src/
├── main.tsx              # Application entry point
├── app/
│   ├── App.tsx          # Main application component
│   ├── components/      # Reusable UI components
│   │   ├── ActionBar.tsx
│   │   ├── AiPanel.tsx
│   │   ├── Dashboard.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Header.tsx
│   │   ├── IdeaInput.tsx
│   │   ├── InsightModule.tsx
│   │   ├── SideNavigation.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── steps/       # Analysis step components
│   │   │   ├── OverviewStep.tsx
│   │   │   ├── MarketStep.tsx
│   │   │   ├── UsersStep.tsx
│   │   │   ├── CompetitionStep.tsx
│   │   │   ├── RevenueStep.tsx
│   │   │   └── MvpStep.tsx
│   │   └── ui/          # Radix UI based components
├── styles/              # Global styles and theme
│   ├── index.css
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
```

## 🎨 Key Components

- **Header:** Navigation and branding
- **SideNavigation:** Navigation between different sections
- **IdeaInput:** Component for users to input their business idea
- **Dashboard:** Main view displaying analysis results
- **AiPanel:** Display AI insights and analysis
- **Steps Components:** Individual analysis views for different business aspects
  - OverviewStep: Idea overview and key metrics
  - MarketStep: Market analysis and opportunities
  - UsersStep: User personas and market segments
  - CompetitionStep: Competitive analysis
  - RevenueStep: Revenue model and financial projections
  - MvpStep: MVP planning and implementation roadmap

## 🔄 Integration with Backend

The frontend communicates with the backend API at `http://localhost:8000` (or configured endpoint):

- **POST `/validate-idea`** - Sends the business idea and receives comprehensive analysis from AI agents

## 🎯 Features

- ✅ Interactive business idea input
- ✅ Real-time AI-powered analysis
- ✅ Multi-step analysis workflow
- ✅ Business-specific insights (market, users, competition, revenue, MVP)
- ✅ Responsive design for all devices
- ✅ Dark/Light theme support
- ✅ Toast notifications for user feedback
- ✅ Beautiful UI with Radix UI components
- ✅ Drag-and-drop support for content organization

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌍 Environment Variables

Create a `.env` file if needed for API configuration (url, etc.)

## 📚 Component Guidelines

Refer to [Guidelines.md](./guidelines/Guidelines.md) for component usage and best practices.

## 📄 Additional Documentation

- [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) - Third-party libraries and credits
- [Guidelines.md](./guidelines/Guidelines.md) - Development guidelines



  