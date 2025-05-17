# Global Auto Imports - Classic Car Import Platform

A modern web platform that helps Australian users discover and import rare and classic cars from global auction sites. Built with Next.js 14, this application provides a seamless experience for searching, viewing, and requesting import quotes for classic vehicles.

## 🌟 Key Features

- **Global Car Search**: Search across multiple auction sites including Bring a Trailer, ClassicCars.com, and Cars & Bids
- **Real-time Price Conversion**: View estimated landed costs in AUD with automatic currency conversion
- **Quote Request System**: Easy-to-use form for requesting import quotes
- **Responsive Design**: Fully mobile-friendly interface
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Language**: TypeScript
- **Image Optimization**: Next.js Image Component

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vehicle-import.git
cd vehicle-import
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── components/     # Reusable UI components
│   │   ├── CarCard.tsx
│   │   └── QuoteForm.tsx
│   ├── services/      # Business logic and API services
│   │   └── carService.ts
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── styles/
│   └── globals.css    # Global styles
```

## 🛠 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔜 Future Enhancements

- Integration with real auction site APIs
- User authentication and saved searches
- Advanced filtering and sorting options
- Real-time price updates
- Integration with shipping providers
- Admin dashboard for quote management
- Email notifications system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All the auction sites for inspiration 