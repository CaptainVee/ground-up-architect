# Edoson Constructions & Water Resources - Website

## Project Overview

This is the official website for Edoson Constructions and Water Resources Limited, a professional construction, water resources, and engineering services company based in Enugu, Nigeria.

**Services:**
- Building Construction
- Structural Design
- Reconstruction
- Land Surveying
- Borehole Drilling
- Project Management

**Location**: 4 Victor Anukwu Close, Golf Estate, GRA Enugu
**Contact**: +234 8108730679 (Calls) | +234 7045677482 (WhatsApp) | edosonconstructions@gmail.com

## About Us

Edoson Constructions and Water Resources Limited is a trusted partner in construction and water resource management with a proven track record of delivering quality projects with professionalism and attention to detail.

## Development Setup

### Requirements
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation & Running

```sh
# Clone the repository
git clone <YOUR_REPOSITORY_URL>

# Navigate to the project directory
cd ground-up-architect

# Install dependencies
npm i
# or with bun
bun install

# Start development server with hot reload
npm run dev
# or with bun
bun run dev
```

The development server will typically run at `http://localhost:5173`

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Component library
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration (configure with your own credentials)

## Building for Production

```sh
npm run build
```

This will create an optimized production build in the `dist/` directory.

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/pages` - Page components
  - `/assets` - Images and static files
  - `/data` - Data files
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions
- `/public` - Public static assets

## Configuration

### EmailJS Setup

To enable email notifications, configure EmailJS:

1. Visit [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Get your Public Key, Service ID, and Template ID
3. Replace the constants in `src/components/ContactSection.tsx`:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
