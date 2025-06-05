# TaskHub

A modern task management application built with Next.js, helping you organize and track your tasks efficiently.

## Features

- 📝 Create, edit, and delete tasks
- 🏷️ Organize tasks with categories and tags
- 📅 Set due dates and reminders
- 📱 Responsive design for all devices
- 🌙 Dark/Light mode support
- 🔒 User authentication and data persistence
- 🌐 Multilingual support with next-intl (default locale without prefix)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- TypeScript for type safety
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) for components
- [Zustand](https://zustand-demo.pmnd.rs/) for state management

## Getting Started

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

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font for better typography.

## Project Structure

```
TaskHub/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/          # Utility functions and configurations
│   └── store/        # State management
├── public/           # Static assets
└── ...config files
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
