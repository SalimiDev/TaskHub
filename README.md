# TaskHub

A modern task management application boilerplate built with Next.js 15, TypeScript, and internationalization support.

## 🚧 Current Status

This project is currently in **initial setup phase**. The foundation has been laid with:

- ✅ Next.js 15 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS for styling
- ✅ Internationalization (i18n) with next-intl
- ✅ Project structure and folder organization
- ✅ Development tooling (ESLint, Prettier, Husky)
- ✅ English and Persian (Farsi) language support

## 🎯 Planned Features

- 📝 Create, edit, and delete tasks
- 🏷️ Organize tasks with categories and tags
- 📅 Set due dates and reminders
- 📱 Responsive design for all devices
- 🌙 Dark/Light mode support
- 🔒 User authentication and data persistence
- 🌐 Multilingual support (EN/FA)

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Development Tools:** ESLint, Prettier, Husky, lint-staged
- **Package Manager:** pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SalimiDev/TaskHub.git
cd TaskHub
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
TaskHub/
├── docs/                 # Documentation files
│   └── i18n-guide.md    # Internationalization guide
├── messages/            # i18n message files
│   ├── en.json         # English translations
│   └── fa.json         # Persian translations
├── public/             # Static assets
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── [locale]/  # Internationalized routes
│   │   │   ├── (auth)/      # Authentication routes (planned)
│   │   │   ├── (protected)/ # Protected routes (planned)
│   │   │   └── (todoList)/  # Task management routes (planned)
│   │   └── api/       # API routes (planned)
│   ├── components/    # React components
│   │   ├── layout/    # Layout components (planned)
│   │   └── ui/        # UI components (planned)
│   ├── configs/       # Configuration files (planned)
│   ├── data/          # Data layer (planned)
│   ├── hooks/         # Custom React hooks (planned)
│   ├── lib/          # Utility libraries
│   │   ├── constants/ # Application constants (planned)
│   │   ├── i18n/     # Internationalization utilities ✅
│   │   ├── utils/    # Utility functions (planned)
│   │   └── validators/ # Form validation schemas (planned)
│   ├── providers/    # React context providers
│   ├── store/        # State management (planned)
│   └── types/        # TypeScript type definitions (planned)
├── components.json    # shadcn/ui configuration
└── ...config files
```

## 🌐 Internationalization

The project supports multiple languages:

- **English (en)** - Default language
- **Persian/Farsi (fa)** - RTL support ready

### Available Routes

- `/en` - English version
- `/fa` - Persian version

For detailed i18n documentation, see [docs/i18n-guide.md](docs/i18n-guide.md).

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🚧 Development Roadmap

### Phase 1: Foundation (✅ Completed)

- [x] Project setup and configuration
- [x] Internationalization setup
- [x] Development tooling

### Phase 2: UI Components (In Progress)

- [ ] Design system with shadcn/ui
- [ ] Layout components
- [ ] Form components
- [ ] Navigation components

### Phase 3: Core Features (Planned)

- [ ] Task management functionality
- [ ] User authentication
- [ ] State management
- [ ] API integration

### Phase 4: Advanced Features (Planned)

- [ ] Dark/Light mode
- [ ] Data persistence
- [ ] Categories and tags
- [ ] Due dates and reminders

## 📚 Documentation

- [Internationalization Guide](docs/i18n-guide.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

## 🤝 Contributing

This project is in early development. Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Add appropriate documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note:** This is a work-in-progress project. Many features are planned but not yet implemented. Check the project structure above to see what's currently available vs. what's planned.
