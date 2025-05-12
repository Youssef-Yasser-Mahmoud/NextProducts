# NextShop - Modern E-commerce Platform

## Overview

NextShop is a modern e-commerce platform built with Next.js and styled with Tailwind CSS. It provides a responsive and user-friendly shopping experience with product browsing, detailed product views, and company information.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Product Catalog**: Browse through a collection of products with filtering options
- **Product Details**: View detailed information about each product including specifications, pricing, and availability
- **Dynamic Navigation**: User-friendly navigation with active link highlighting
- **About Page**: Company information, team members, and contact details
- **Modern UI**: Clean and intuitive interface with Tailwind CSS styling

## Technologies Used

- **Next.js 15.3.2**: React framework for production-grade applications
- **React 19**: JavaScript library for building user interfaces
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code quality tool
- **Turbopack**: Incremental bundler and build system

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/nextshop.git
cd nextshop
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── components/       # Reusable components
│   │   └── Nav.jsx       # Navigation component
│   ├── products/         # Product pages
│   │   ├── [productId]/  # Dynamic product detail page
│   │   └── page.js       # Products listing page
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   ├── not-found.js      # 404 page
│   └── page.js           # Home page
├── public/               # Static assets
├── .gitignore
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.mjs    # PostCSS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Usage

### Development

Start the development server with hot-reload:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

### Starting Production Server

Start the application in production mode:

```bash
npm run start
# or
yarn start
```

## Pages

- **Home**: Landing page with featured products and categories
- **Products**: Browse all available products
- **Product Detail**: View detailed information about a specific product
- **About**: Company information, team members, and contact form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
