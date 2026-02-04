# On It - Job Application & Networking Tracker (Frontend)

<div align="center">
  <img src="./public/logo.png" alt="On It Logo" width="120" />
  
  <p>A modern job search management platform for tracking applications, networking, and referrals</p>

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)

</div>

---

## 📖 About The Project

**On It** is a comprehensive job application tracker designed specifically for the North American job market, where networking and referrals are crucial to landing opportunities.

Instead of juggling Excel spreadsheets, scattered notes, and multiple calendars, job seekers can now:

- 📊 Visualize their application pipeline with an intuitive Kanban board
- 👥 Manage professional contacts and track referral relationships
- ☕ Log coffee chats and networking meetings with follow-up reminders
- 📈 Gain insights through analytics on application success rates

This repository contains the **frontend application** built with Next.js 16 and modern React patterns.

### Why "On It"?

The name reflects the proactive mindset every job seeker needs: staying organized, following up promptly, and being "on it" throughout the entire job search journey.

---

## ✨ Features

### Current (Phase 1 - MVP)

- [x] 🎨 **Modern UI/UX** - Clean, professional design with Figma
- [x] 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- [x] 🎯 **Kanban Board** - Drag-and-drop job applications across stages
- [x] 👤 **Contact Management** - Organize your professional network
- [x] 🔗 **Referral Tracking** - Link contacts to job applications
- [x] ☕ **Coffee Chat Log** - Record networking meetings and set follow-ups
- [x] 📅 **Interview Timeline** - Track multiple interview rounds

### Upcoming (Phase 2)

- [ ] 📧 **Gmail Integration** - Auto-detect applications from emails
- [ ] 📆 **Calendar View** - See all events in one place
- [ ] 📊 **Analytics Dashboard** - Track success metrics and trends
- [ ] 🔔 **Email Notifications** - Reminders for interviews and follow-ups
- [ ] 🌙 **Dark Mode** - Easy on the eyes during late-night job searches

---

## 🛠️ Tech Stack

### Core

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library with Server Components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling

- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable component library

### State & Data

- **[Apollo Client](https://www.apollographql.com/docs/react/)** - GraphQL client (coming soon)
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### UI Components

- **[@dnd-kit](https://dndkit.com/)** - Drag and drop for Kanban
- **[Recharts](https://recharts.org/)** - Data visualization
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[date-fns](https://date-fns.org/)** - Date utilities

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/on-it-frontend.git
cd on-it-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# API Configuration (for Phase 2)
NEXT_PUBLIC_API_URL=http://localhost:4000/graphql

# Gmail OAuth (for Phase 2)
NEXT_PUBLIC_GMAIL_CLIENT_ID=your-client-id
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📁 Project Structure

```
on-it-frontend/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/         # Main application
│   │   ├── layout.tsx       # Sidebar + Header layout
│   │   ├── page.tsx         # Dashboard (Kanban)
│   │   ├── jobs/            # Jobs list view
│   │   ├── contacts/        # Contacts management
│   │   ├── coffee-chats/    # Coffee chat timeline
│   │   ├── calendar/        # Calendar view
│   │   ├── analytics/       # Analytics dashboard
│   │   └── settings/        # User settings
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── MainLayout.tsx
│   ├── kanban/              # Kanban board components
│   │   ├── KanbanBoard.tsx
│   │   ├── KanbanColumn.tsx
│   │   └── JobCard.tsx
│   ├── contacts/            # Contact components
│   ├── coffee-chats/        # Coffee chat components
│   └── shared/              # Shared components
├── lib/
│   ├── apollo-client.ts     # Apollo Client setup (Phase 2)
│   ├── dummy-data.ts        # Mock data for development
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── public/
│   └── company-logos/       # Company logo assets
└── generated/               # Auto-generated GraphQL types (Phase 2)
```

---

## 🎨 Design System

### Color Palette

```css
Primary:   #3B82F6 (Blue)
Secondary: #8B5CF6 (Purple)
Success:   #10B981 (Green)
Warning:   #F59E0B (Amber)
Error:     #EF4444 (Red)
Background: #F9FAFB (Light Gray)
```

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, 24px-32px
- **Body:** Regular, 14px-16px
- **Captions:** Regular, 12px

### Spacing

- Uses 8px grid system
- Component padding: 16px-24px
- Element margins: 8px-16px

---

## 📊 Current Status

**Phase 1 - MVP (In Progress)**

| Feature            | Status         | Notes                           |
| ------------------ | -------------- | ------------------------------- |
| UI/UX Design       | ✅ Complete    | Figma mockups ready             |
| Project Setup      | ✅ Complete    | Next.js + TypeScript + Tailwind |
| Kanban Board       | 🚧 In Progress | Basic layout done               |
| Contact Management | ⏳ Pending     | -                               |
| Coffee Chat Log    | ⏳ Pending     | -                               |
| Responsive Design  | ⏳ Pending     | -                               |
| Authentication UI  | ⏳ Pending     | -                               |

---

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# (Phase 2) Generate GraphQL types
npm run codegen

# (Phase 2) Watch GraphQL schema changes
npm run codegen:watch
```

### Code Style

- **ESLint** - Code linting
- **Prettier** - Code formatting (configured in ESLint)
- **TypeScript** - Strict type checking enabled

---

## 🔗 Related Repositories

- **Backend API:** [on-it-backend](https://github.com/yourusername/on-it-backend) _(Coming Soon)_
  - NestJS + GraphQL + PostgreSQL
  - Handles authentication, data persistence, and business logic

---

## 🗺️ Roadmap

### Phase 1: MVP (Weeks 1-3) 🚧

- [x] Project initialization
- [x] Design system setup
- [ ] Kanban board with drag & drop
- [ ] Contact management
- [ ] Referral tracking
- [ ] Coffee chat log
- [ ] Responsive design
- [ ] Authentication UI

### Phase 2: Backend Integration (Week 4)

- [ ] Apollo Client setup
- [ ] GraphQL code generation
- [ ] Connect to backend API
- [ ] Replace dummy data with real API calls
- [ ] Error handling & loading states

### Phase 3: Advanced Features (Week 5)

- [ ] Gmail integration
- [ ] Calendar view
- [ ] Analytics dashboard
- [ ] Email notifications

### Phase 4: Polish & Deploy (Week 6)

- [ ] E2E testing with Playwright
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Deploy to Vercel

---

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**

- Portfolio: [yourwebsite.com](https://bitna-dev.vercel.app/)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/bitna-dev)
- GitHub: [@yourusername](https://github.com/bitna-dev)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Inspired by personal job search experiences in the Canadian tech market
- Design created with Figma and AI-powered design tools
- Built to showcase modern Next.js, TypeScript, and GraphQL expertise
- Special thanks to the open-source community for amazing tools

---

## 📸 Screenshots

> Screenshots will be added as features are completed

### Dashboard (Coming Soon)

### Contacts (Coming Soon)

---

<div align="center">
  <p>⭐ If you find this project helpful, please consider giving it a star!</p>
  <p>Made with ❤️ and ☕ during my job search journey</p>
</div>
