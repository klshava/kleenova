# Kleenova - Premium Cleaning Services Website

A stunning, mobile-first website for Kleenova cleaning services in Western Australia.

## 🎨 Design Features

- **Color Scheme**: Water blue (#0EA5E9) and white
- **Typography**: Poppins (headings) + Inter (body)
- **Responsive**: Mobile-first design that works on all devices
- **Premium**: AI-generated images and professional layout

## 📄 Pages Included

1. **Home** - Hero section with services overview
2. **About Us** - Company story and values
3. **Services** - End of lease, commercial, and regular cleaning
4. **Why Choose Us** - Key differentiators
5. **Reviews** - Customer testimonials
6. **Booking** - Booking form with Google Calendar integration
7. **Contact** - Contact form and information
8. **FAQs** - Frequently asked questions
9. **Terms & Conditions** - Legal terms
10. **Privacy Policy** - Privacy information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (already included)
- pnpm (already installed)

### Installation

```bash
cd kleenova-website
pnpm install
```

### Development

```bash
pnpm dev
```

The website will be available at `http://localhost:3000`

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory.

## 📧 Contact Information

- **Phone**: 0480 536 701
- **Email**: ngonidzashetutayi@gmail.com
- **Location**: Western Australia
- **ABN**: 28 695 077 135

## 🔗 Social Media

- Facebook: [Your Facebook Link]
- Instagram: [Your Instagram Link]

## 📝 Customization

### Update Contact Information

Edit the following files to update contact details:
- `client/src/components/Navigation.tsx` - Phone number in nav
- `client/src/components/Footer.tsx` - Footer contact info
- `client/src/pages/Booking.tsx` - Booking page contact
- `client/src/pages/Contact.tsx` - Contact page details

### Update Social Media Links

Edit `client/src/components/Footer.tsx` and `client/src/pages/Contact.tsx` to update Facebook and Instagram links.

### Update Images

All images are hosted on a CDN. To replace images:
1. Generate new images or find alternatives
2. Update the image URLs in the respective page files

### Update Content

Edit the individual page files in `client/src/pages/` to update content.

## 🎯 Key Features

✅ Fully responsive design
✅ Professional booking system
✅ Contact forms with email integration
✅ FAQ section with expandable items
✅ Customer testimonials
✅ Mobile-optimized navigation
✅ Fast loading times
✅ SEO-friendly structure
✅ Accessibility compliant
✅ Premium animations and transitions

## 📦 Project Structure

```
kleenova-website/
├── client/
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── App.tsx       # Main app routing
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Global styles
│   ├── index.html        # HTML template
│   └── public/           # Static files
├── server/               # Server configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI components
- **Wouter** - Routing
- **Sonner** - Toast notifications
- **Lucide React** - Icons

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔒 Security

- All forms use secure submission
- Contact information is protected
- No sensitive data stored locally
- HTTPS ready

## 📄 License

This website is created for Kleenova cleaning services.

## 🤝 Support

For questions or issues, contact:
- Phone: 0480 536 701
- Email: ngonidzashetutayi@gmail.com

---

**Created with premium design and attention to detail for Kleenova.**
