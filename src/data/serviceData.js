// ================= servicesData.js (8 Services with Projects inside showcase.projects) =================

import {
  Laptop,
  ShoppingCart,
  Search,
  Wrench,
  BrainCircuit,
  Palette,
  Video,
  Globe,
  LineChart,
  Code,
  Database,
  Shield,
  Zap,
  BarChart,
  Target,
  Eye,
  Users,
  TrendingUp,
  Settings,
  Rocket,
  Sparkles,
  CheckCircle,
  Clock,
  Award,
  HeartHandshake,
} from "lucide-react";
import React from "react";
import { BsPalette2 } from "react-icons/bs";

import WebProject1 from "../assets/web-project-1.png";
import WebProject2 from "../assets/web-project-2.png";
import WebProject3 from "../assets/web-project-3.png";
import WebProject4 from "../assets/web-project-4.png";
import WebClient1 from "../assets/web-clint-1.webp";
import WebClient2 from "../assets/web-clint-2.png";
import WebClient3 from "../assets/web-clint-3.webp";
import WebClient4 from "../assets/web-clint-4.avif";
import ToolProject1 from "../assets/tool-project-1.png";
import ToolProject2 from "../assets/tool-project-2.png";
import ToolClient1 from "../assets/tool-clint-1.png";
import ToolClient2 from "../assets/tool-clint-2.webp";

export const servicesData = [
  // 1. Web Development
  {
    slug: "web-development",
    title: "Web Development",
    desc: "Modern responsive websites built for performance and growth.",
    icon: Laptop,
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    heroTitle: "Next-Generation Web Development",
    heroDesc:
      "We build fast, scalable, and future-ready web applications that drive business growth. Our expert team delivers cutting-edge solutions with modern frameworks.",
    sectionTitle: "Custom Web Development Solutions",
    sectionDesc:
      "We create modern, scalable, and high-performance websites using cutting-edge technologies.",
    sectionImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    tabs: [
      {
        title: "Frontend",
        content: {
          heading: "Modern Frontend Development",
          desc: "Responsive and fast user interfaces using modern frameworks.",
          points: [
            "React & Next.js",
            "Tailwind CSS",
            "Responsive Design",
            "Animations & UI Effects",
          ],
        },
      },
      {
        title: "Backend",
        content: {
          heading: "Powerful Backend Systems",
          desc: "Secure and scalable backend architecture for web apps.",
          points: [
            "Node.js APIs",
            "Authentication Systems",
            "Database Integration",
            "Server Optimization",
          ],
        },
      },
      {
        title: "Performance",
        content: {
          heading: "Website Optimization",
          desc: "Speed and SEO optimization for maximum performance.",
          points: [
            "SEO Friendly Structure",
            "Core Web Vitals",
            "Image Optimization",
            "Fast Loading Speed",
          ],
        },
      },
      {
        title: "Deployment",
        content: {
          heading: "Deployment & Hosting",
          desc: "Deploying websites securely on cloud infrastructure.",
          points: [
            "Vercel Deployment",
            "Cloud Hosting",
            "SSL Security",
            "Maintenance & Support",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Websites",
        desc: "Modern websites tailored to your business goals, brand identity, and target audience for maximum impact.",
        icon: Globe,
      },
      {
        title: "Frontend Apps",
        desc: "Interactive, lightning-fast UI experiences built with React & Next.js for seamless user journeys.",
        icon: Laptop,
      },
      {
        title: "Backend APIs",
        desc: "Secure, scalable API systems powering your web and mobile applications with 99.9% uptime.",
        icon: Database,
      },
      {
        title: "SEO Optimization",
        desc: "Technically optimized structure and content strategy to rank higher and attract organic traffic.",
        icon: Search,
      },
    ],
    capabilitiesTitle: "Web Development",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    processSubTitle: "Our Development Process",
    processTitle: "From Concept to Launch",
    processHighlight: "Excellence",
    processImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    processDesc:
      "We follow a systematic approach to deliver high-quality web solutions that exceed expectations.",
    processFeatures: [
      "Discovery & Planning",
      "Design & Prototyping",
      "Development & Testing",
      "Deployment & Support",
    ],
    showcase: {
      title: "Web Development Projects",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      projects: [
        {
          slug: "fundbox",
          title: "Fundbox – Capital Products for Small Businesses",
          desc: "Fundbox offers fast, easy access to business financing — including lines of credit and term loans up to $250,000 — to help small businesses manage cash flow and grow.",
          image: WebProject1,
          tech: [
            "Line of Credit",
            "Term Loans",
            "Stripe",
            "Intuit",
            "FreshBooks",
            "Zoho",
            "Wave",
          ],
          features: [
            "Up to $250,000 in Funding",
            "Apply in 3 Minutes or Less",
            "Fast Access to Funds",
            "Flexible Repayment Terms",
            "No Early Repayment Fees",
          ],
          overview:
            "Fundbox is a small business financing platform founded in 2013 that has connected 500,000+ businesses to over $6 billion in capital. It offers lines of credit and term loans with a simple 3-minute application, fast funding, and flexible repayment — integrated into everyday business tools like Stripe, Intuit, FreshBooks, and more.",
          results: [
            "500k+ Businesses Connected",
            "$6B+ Capital Unlocked",
            "4.8 Trustpilot Score",
          ],
        },
        {
          slug: "offdeal",
          title: "OffDeal – The Investment Bank for Small Businesses",
          desc: "AI-powered M&A platform to sell your business faster and for more.",
          image: WebProject2,
          tech: [
            "AI Buyer Matching",
            "M&A Advisory",
            "Competitive Auction",
            "Radical Ventures",
            "$12M Series A",
          ],
          features: [
            "15x More Buyers via AI Algorithm",
            "30% Higher Offers Through Auctions",
            "Initial Offers in Under 45 Days",
            "$0 Upfront Fees – Success-Based Only",
            "Dedicated M&A Advisor End-to-End",
          ],
          overview:
            "OffDeal is a modern AI-powered investment bank built for small businesses with $5M–$100M in revenue. Unlike traditional M&A firms, OffDeal uses AI to match sellers with 1,000+ strategic buyers on average, runs competitive auctions to drive up offers by 30%, and delivers initial offers in under 45 days — compared to 4 months the traditional way. Featured in CNBC, Financial Times, Forbes, and TechCrunch, OffDeal charges zero upfront fees and only succeeds when you do. They serve industries including Home Services, Business Services, Healthcare, Industrials, and Consumer brands.",
          results: [
            "1,000+ Buyer Matches on Average",
            "30% Higher Sale Price",
            "Offers in <45 Days",
          ],
        },
        {
          slug: "human-interest",
          title:
            "Human Interest – Full-Service 401(k) Provider for Small Businesses",
          desc: "Affordable, easy-to-manage 401(k) and 403(b) retirement plans for businesses of all sizes.",
          image: WebProject3,
          tech: [
            "401(k) Plans",
            "403(b) Plans",
            "Safe Harbor Plans",
            "Payroll Integration",
            "(k)ickstart®",
            "IRA Accounts",
          ],
          features: [
            "First 401(k) with 3% Cash Back on Contributions",
            "500+ Payroll Integrations (ADP, Gusto, QuickBooks & more)",
            "Full Compliance Testing & IRS Paperwork Handled",
            "Zero Transaction Fees & Low-Cost Funds",
            "Customizable Matching & Vesting at No Extra Cost",
          ],
          overview:
            "Human Interest is an affordable, full-service 401(k) and 403(b) provider founded in 2015 in San Francisco, on a mission to give employees in all lines of work access to retirement benefits. Trusted by 40,000+ businesses and covering 1,000,000+ employees, the platform handles everything — payroll sync, contribution processing, compliance testing, and IRS filings — so employers can focus on running their business. Human Interest offers Traditional and Roth 401(k)s, 403(b)s, Safe Harbor plans, Profit-Sharing plans, and IRAs. Their flagship (k)ickstart® program is the first 401(k) to offer 3% cash back on contributions for employees earning $60,000 or less, paired with a free 10-part financial education course.",
          results: [
            "40,000+ Businesses Trust Human Interest",
            "1,000,000+ Employees Covered",
            "500+ Payroll Integrations",
          ],
        },
        {
          slug: "weave",
          title:
            "Weave – All-in-One Communication Platform for Healthcare & Small Business",
          desc: "AI-powered phone, texting, payments, and scheduling platform that helps practices attract, engage, and retain patients.",
          image: WebProject4,
          tech: [
            "AI Receptionist",
            "VoIP Phone System",
            "Two-Way Texting",
            "Text-to-Pay",
            "Call Intelligence",
            "Digital Forms",
            "Online Scheduling",
          ],
          features: [
            "AI Receptionist – Books Appointments & Takes Payments Over Voice & Text",
            "Missed-Call Auto-Text to Capture Every Lead",
            "Automated Appointment Reminders & Recall Campaigns",
            "Text-to-Pay, Buy Now Pay Later & Online Bill Pay",
            "AI Call Intelligence – Sentiment Analysis & Revenue Opportunity Detection",
          ],
          overview:
            "Weave is an all-in-one communication and patient experience platform built for small businesses and healthcare practices — including dental, veterinary, optometry, and medical offices. It combines a world-class VoIP phone system with AI-powered texting, scheduling, payments, reviews, digital forms, email marketing, and call intelligence into a single unified platform. Weave's AI Receptionist answers calls, books appointments, takes payments, and responds to texts 24/7 — even when staff are unavailable. With over a decade of patient interaction data powering its AI models, Weave helps practices fill their schedules, reduce no-shows, get paid faster, and grow their online reputation — all from one dashboard.",
          results: [
            "3x Faster Task Completion with Built-in AI",
            "125+ New Patients/Month for Top Practices",
            "50% Cost Reduction vs Multiple Separate Tools",
          ],
        },
      ],
    },
    blogTitle: "Web Development Insights",
    blogDescription: "Latest trends and best practices in web development",
    blogPosts: [
      {
        title: "Why Next.js is the Future of React",
        category: "React",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
        description:
          "Discover why Next.js is becoming the go-to framework for modern web applications.",
        views: "2.5k",
        author: "Ali Raza",
      },
      {
        title: "Web Performance Optimization Guide",
        category: "Performance",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        description:
          "Learn how to optimize your website for lightning-fast performance.",
        views: "1.8k",
        author: "Sarah Khan",
      },
    ],
    testimonials: [
      {
        quote:
          "They built our web platform from scratch — fast, clean, and exactly what a growing startup needs. The attention to performance and scalability gave us a real edge from day one.",
        name: "Prashant Kumar",
        designation: "Founder & CEO @ Fundbox",
        src: WebClient1,
      },
      {
        quote:
          "Working with this team was a game changer. They delivered a sleek, high-performing web solution that perfectly matched the speed and precision we demand at OffDeal.",
        name: "Ori Eldarov",
        designation: "Co-Founder & CEO @ OffDeal",
        src: WebClient2,
      },
      {
        quote:
          "The team delivered a product that truly elevated our customer experience. Polished, reliable, and built with the kind of quality that reflects our brand values at Weave.",
        name: "Brett White",
        designation: "CEO & Board Director @ Getweave",
        src: WebClient3,
      },
      {
        quote:
          "They understood our mission to make complex systems simple. The platform they built is intuitive, scalable, and has helped us serve our customers at Human Interest even better.",
        name: "Jeff Schneble",
        designation: "CEO @ Human Interest",
        src: WebClient4,
      },
    ],
    faqs: [
      {
        question: "How long does a website take?",
        answer:
          "A standard business website usually takes 2–6 weeks depending on complexity and feature requirements.",
      },
      {
        question: "Do you provide SEO optimization?",
        answer:
          "Yes, all websites are optimized for SEO and speed by default — including meta tags, schema markup, image compression, and Core Web Vitals.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "We primarily use React, Next.js, Tailwind CSS for frontend, and Node.js with MongoDB or PostgreSQL for backend. We choose the best stack based on your project needs.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, we offer ongoing maintenance, bug fixes, and feature updates after launch to keep your site running smoothly.",
      },
    ],
    roadmap: {
      title: "Web Development Roadmap",
      description: "Our proven process for delivering exceptional websites",
      steps: [
        {
          title: "Discovery & Strategy",
          description:
            "We analyze your business goals, target audience, and competitors to create a comprehensive development roadmap.",
          icon: Target,
        },
        {
          title: "Design & Prototyping",
          description:
            "Create stunning UI/UX designs and interactive prototypes for your review before a single line of code is written.",
          icon: Palette,
        },
        {
          title: "Development",
          description:
            "Build your website using the latest technologies with clean, maintainable, and scalable code.",
          icon: Code,
        },
        {
          title: "Testing & QA",
          description:
            "Rigorous cross-browser and cross-device testing to ensure flawless performance before launch.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Web Project",
      description: "Follow these simple steps to get your website built",
      steps: [
        {
          title: "Book a Consultation",
          description:
            "Schedule a free 30-minute consultation to discuss your requirements and vision.",
        },
        {
          title: "Get a Custom Quote",
          description:
            "Receive a detailed proposal, timeline, and fixed-price quote for your project.",
        },
        {
          title: "Launch Your Website",
          description:
            "We build, test, and launch your website — then hand it over with full training.",
        },
      ],
      buttonText: "Start Your Project",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Build Your Dream Website?",
    ctaButton: "Get in Touch",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
  },

  // 2. E-Commerce Solutions
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce",
    desc: "Scalable online stores with modern shopping experiences.",
    icon: ShoppingCart,
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
    heroTitle: "High-Converting E-Commerce Stores",
    heroDesc:
      "Launch powerful online stores that drive sales and deliver exceptional shopping experiences. From Shopify to WooCommerce, we build e-commerce solutions that scale with your business.",
    sectionTitle: "Powerful E-Commerce Solutions",
    sectionDesc:
      "We create high-converting Shopify and WooCommerce stores with seamless payment integration, mobile-first design, and built-in marketing tools — everything you need to sell more online.",
    sectionImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070",
    tabs: [
      {
        title: "Store Setup",
        content: {
          heading: "E-Commerce Store Setup",
          desc: "Complete online store configuration from scratch — ready to sell on day one.",
          points: [
            "Shopify Stores",
            "WooCommerce Setup",
            "Product Management",
            "Store Branding",
          ],
        },
      },
      {
        title: "Payments",
        content: {
          heading: "Payment Integration",
          desc: "Secure, multi-currency payment gateways for smooth global transactions.",
          points: [
            "Stripe Integration",
            "PayPal Setup",
            "JazzCash Integration",
            "Easypaisa Support",
          ],
        },
      },
      {
        title: "Optimization",
        content: {
          heading: "Conversion Optimization",
          desc: "Data-driven UX improvements to turn more visitors into paying customers.",
          points: [
            "Fast Checkout",
            "Mobile Optimization",
            "SEO Optimization",
            "Cart Recovery",
          ],
        },
      },
      {
        title: "Marketing",
        content: {
          heading: "Store Growth & Marketing",
          desc: "End-to-end marketing systems designed to drive consistent revenue growth.",
          points: [
            "Meta Ads",
            "Google Shopping Ads",
            "Email Marketing",
            "Analytics Tracking",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Shopify Stores",
        desc: "Custom Shopify stores with premium themes, apps, and integrations built to convert visitors into buyers.",
        icon: ShoppingCart,
      },
      {
        title: "WooCommerce",
        desc: "Flexible WooCommerce stores on WordPress with full control over design, pricing, and functionality.",
        icon: Globe,
      },
      {
        title: "Payment Systems",
        desc: "Secure multi-gateway payment integrations including Stripe, PayPal, JazzCash, and Easypaisa.",
        icon: Shield,
      },
      {
        title: "Sales Optimization",
        desc: "CRO strategies, A/B testing, and abandoned cart recovery to maximize your revenue per visitor.",
        icon: TrendingUp,
      },
    ],
    capabilitiesTitle: "E-Commerce",
    capabilitiesHighlight: "Solutions",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070",
    processSubTitle: "Our E-Commerce Process",
    processTitle: "Build Your Online Empire",
    processHighlight: "Today",
    processImage:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2070",
    processDesc:
      "We create scalable online shopping experiences designed to maximize sales and conversions from day one.",
    processFeatures: [
      "Store Strategy & Planning",
      "Custom Design & UX",
      "Payment & Shipping Integration",
      "Launch, Marketing & Growth",
    ],
    showcase: {
      title: "E-Commerce Projects",
      bgImage:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
      projects: [
        {
          slug: "shopify-store",
          title: "Shopify Store Development",
          desc: "Complete Shopify store setup with custom themes, apps, and payment integrations built to drive sales.",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
          tech: ["Shopify", "Liquid", "Shopify Apps", "Stripe", "Meta Pixel"],
          features: [
            "Custom Theme Design",
            "Payment Gateway Setup",
            "Product & Inventory Management",
            "SEO Optimization",
            "Mobile-First Responsive Design",
          ],
          overview:
            "Launch a professional Shopify store that drives sales and provides a seamless shopping experience. We handle everything from theme customization and app integration to payment setup and launch — so you can focus on growing your business.",
          results: [
            "3x Faster Launch vs DIY",
            "Higher Conversion Rates",
            "Better User Experience",
          ],
        },
        {
          slug: "woocommerce-store",
          title: "WooCommerce Store",
          desc: "Custom WordPress-based e-commerce stores with WooCommerce — powerful, flexible, and fully yours.",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999",
          tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Elementor"],
          features: [
            "Custom Product Catalogs",
            "Secure Multi-gateway Checkout",
            "Inventory & Order Management",
            "Flexible Shipping Options",
            "Coupon & Discount System",
          ],
          overview:
            "Build a flexible and fully customizable WooCommerce store that grows with your business. Unlike hosted platforms, WooCommerce gives you complete control over your store's data, design, and functionality — with no transaction fees.",
          results: [
            "Full Ownership & Control",
            "Cost-Effective Long Term",
            "Easy Self-Management",
          ],
        },
        {
          slug: "ecommerce-dashboard",
          title: "E-Commerce Analytics Dashboard",
          desc: "Real-time sales, inventory, and customer analytics dashboard built specifically for online stores.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["React", "Node.js", "Chart.js", "MongoDB", "REST API"],
          features: [
            "Real-time Sales Analytics",
            "Inventory Level Tracking",
            "Customer Behavior Insights",
            "Order Management Overview",
            "Revenue & Profit Reports",
          ],
          overview:
            "Get complete, real-time visibility of your entire e-commerce operation in one centralized dashboard. Track sales trends, monitor inventory, analyze customer behavior, and make faster, smarter business decisions — all without switching between multiple tools.",
          results: [
            "Smarter Business Decisions",
            "Real-time Operational Insights",
            "30% Increase in Efficiency",
          ],
        },
      ],
    },
    blogTitle: "E-Commerce Insights",
    blogDescription:
      "Tips, strategies, and case studies for online store success",
    blogPosts: [
      {
        title: "7 Ways to Increase Your E-Commerce Conversion Rate",
        category: "Conversion",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
        description:
          "Learn proven, data-backed strategies to boost your e-commerce conversion rates without increasing ad spend.",
        views: "3.2k",
        author: "Usman Ali",
      },
      {
        title: "Shopify vs WooCommerce: Which Is Right for You?",
        category: "Platforms",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070",
        description:
          "A comprehensive comparison to help you choose the best platform for your online store in 2024.",
        views: "5.4k",
        author: "Sara Malik",
      },
    ],
    testimonials: [
      {
        quote:
          "They launched and automated our TikTok Shop USA operations with synchronized supplier inventory and high-converting SEO product listings. Our outdoor gear brand scaled faster than we imagined.",
        name: "Ryan Greenfield",
        designation: "Founder & CEO, Aspen Trail Gear",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "Their Shopify SEO restructuring completely transformed our organic traffic. They optimized over 150 product pages and helped our activewear collections rank across multiple search channels.",
        name: "Amanda Ross",
        designation: "Co-Founder, Sol Vibe Activewear",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "The custom Laravel retention dashboard and AI-powered email sequences recovered abandoned carts automatically and significantly improved our subscription retention rates.",
        name: "Tyler Vance",
        designation: "Brand Director, Midnight Roast Co.",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "They built a blazing-fast storefront and deployed an AI customer support assistant that recommends skincare routines in real-time. It completely upgraded our customer experience.",
        name: "Jessica Miller",
        designation: "Managing Director, Opal & Oak Skincare",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Which e-commerce platforms do you work with?",
        answer:
          "We specialize in Shopify, WooCommerce, and custom-built e-commerce solutions. We help you choose the right platform based on your budget, product type, and growth goals.",
      },
      {
        question: "How long does a store setup take?",
        answer:
          "A standard store with up to 50 products takes 3–5 weeks to launch. Larger stores or custom features may take 6–10 weeks.",
      },
      {
        question:
          "Can you migrate my existing store to Shopify or WooCommerce?",
        answer:
          "Yes, we handle full store migrations including products, customer data, orders, and SEO redirects with zero downtime.",
      },
      {
        question: "Do you set up local payment gateways for Pakistan?",
        answer:
          "Absolutely. We integrate JazzCash, Easypaisa, HBL Pay, and bank transfer options alongside international gateways like Stripe and PayPal.",
      },
    ],
    roadmap: {
      title: "E-Commerce Launch Roadmap",
      description:
        "Your clear path to a successful, revenue-generating online store",
      steps: [
        {
          title: "Product & Market Strategy",
          description:
            "Define your product catalog, target audience, pricing strategy, and platform selection before writing a single line of code.",
          icon: Target,
        },
        {
          title: "Store Design & UX",
          description:
            "Create a visually compelling, conversion-optimized store design that builds trust and encourages purchases.",
          icon: Palette,
        },
        {
          title: "Integration & Testing",
          description:
            "Set up payment gateways, shipping providers, tax rules, and thoroughly test every checkout flow.",
          icon: Settings,
        },
        {
          title: "Launch & Scale",
          description:
            "Go live, set up analytics tracking, and begin driving traffic through SEO, paid ads, and email campaigns.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Launch Your Store",
      description:
        "Start selling online — here's exactly how we make it happen",
      steps: [
        {
          title: "Free E-Commerce Consultation",
          description:
            "Tell us your products, budget, and goals — we'll recommend the best platform and strategy for you.",
        },
        {
          title: "Custom Store Build",
          description:
            "We design and develop your complete online store, set up payments, and load your products.",
        },
        {
          title: "Launch & Start Selling",
          description:
            "We launch your store, provide training, and set up marketing tools so you can start generating sales immediately.",
        },
      ],
      buttonText: "Start Your Store",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Start Selling Online?",
    ctaButton: "Get a Free Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070",
  },

  // 3. Digital Marketing
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "SEO, Google Ads & Meta Ads for business growth.",
    icon: Search,
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    heroTitle: "Data-Driven Digital Marketing",
    heroDesc:
      "Grow your business with strategic SEO, precision-targeted Meta Ads, and high-ROI Google advertising campaigns. Every strategy is backed by data, built for results.",
    sectionTitle: "Growth-Focused Digital Marketing",
    sectionDesc:
      "We don't just run ads — we build complete growth systems. From SEO foundations to paid advertising funnels, every campaign is engineered to increase traffic, generate quality leads, and maximize revenue.",
    sectionImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074",
    tabs: [
      {
        title: "SEO",
        content: {
          heading: "Search Engine Optimization",
          desc: "Rank higher on Google with proven, white-hat SEO strategies that drive long-term organic growth.",
          points: [
            "On-Page SEO",
            "Technical SEO Audits",
            "Keyword Research & Mapping",
            "Link Building & Authority",
          ],
        },
      },
      {
        title: "Meta Ads",
        content: {
          heading: "Facebook & Instagram Ads",
          desc: "Highly targeted ad campaigns across Meta platforms — designed for leads, sales, and brand growth.",
          points: [
            "Custom Audience Targeting",
            "Retargeting & Lookalike Ads",
            "Campaign Optimization",
            "Lead Generation Funnels",
          ],
        },
      },
      {
        title: "Google Ads",
        content: {
          heading: "Google Advertising",
          desc: "Capture high-intent buyers at the moment they search — with search, display, and shopping ads.",
          points: [
            "Search Ads",
            "Display & Remarketing Ads",
            "Google Shopping Ads",
            "Conversion Tracking & Optimization",
          ],
        },
      },
      {
        title: "Analytics",
        content: {
          heading: "Analytics & Performance Reporting",
          desc: "Full transparency on every campaign — know exactly where your money goes and what it returns.",
          points: [
            "Google Analytics 4 Setup",
            "ROI & ROAS Tracking",
            "Monthly Performance Reports",
            "Audience & Behavior Insights",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "SEO Services",
        desc: "Increase your organic search rankings and drive consistent, cost-free traffic from Google and Bing.",
        icon: Search,
      },
      {
        title: "Meta Ads",
        desc: "Facebook and Instagram advertising campaigns that reach your exact audience at the right moment.",
        icon: BarChart,
      },
      {
        title: "Google Ads",
        desc: "High-converting search and display ad campaigns with full conversion tracking and weekly optimization.",
        icon: Target,
      },
      {
        title: "Analytics & Reporting",
        desc: "Data-driven insights and clear monthly reports so you always know your marketing ROI.",
        icon: Eye,
      },
    ],
    capabilitiesTitle: "Marketing",
    capabilitiesHighlight: "Excellence",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    processSubTitle: "Our Marketing Process",
    processTitle: "Drive Growth Through",
    processHighlight: "Data",
    processImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
    processDesc:
      "We build data-driven marketing systems — not one-off campaigns. Every strategy is built to compound over time and deliver predictable, scalable growth.",
    processFeatures: [
      "Market & Competitor Research",
      "Custom Campaign Strategy",
      "Execution & A/B Testing",
      "Optimization & Scaling",
    ],
    showcase: {
      title: "Marketing Campaigns",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      projects: [
        {
          slug: "seo-services",
          title: "SEO Services",
          desc: "Comprehensive SEO packages designed to rank your website higher and drive sustainable organic traffic.",
          image:
            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070",
          tech: [
            "Ahrefs",
            "SEMrush",
            "Google Search Console",
            "Yoast SEO",
            "Screaming Frog",
          ],
          features: [
            "In-depth Keyword Research",
            "On-Page Optimization",
            "Technical SEO Audit & Fixes",
            "Authority Link Building",
            "Local SEO & Google Business Profile",
          ],
          overview:
            "Our SEO service goes beyond keywords — we build a complete organic growth engine. We audit your site's technical health, optimize every page, build high-authority backlinks, and publish SEO-driven content. Most clients see significant ranking improvements within 90 days.",
          results: [
            "First-Page Google Rankings",
            "3x More Organic Traffic",
            "Lower Customer Acquisition Cost",
          ],
        },
        {
          slug: "meta-ads",
          title: "Meta Ads Management",
          desc: "Precision-targeted Facebook and Instagram advertising campaigns built for leads, sales, and brand awareness.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: [
            "Meta Ads Manager",
            "Facebook Pixel",
            "Custom Audiences",
            "Advantage+",
          ],
          features: [
            "Audience Research & Targeting",
            "Retargeting & Lookalike Campaigns",
            "Lead Generation Ads",
            "Conversion-Optimized Campaigns",
            "Multi-Variant A/B Testing",
          ],
          overview:
            "We manage Meta ad campaigns from strategy through to optimization. Every campaign is built on deep audience research, compelling creatives, and continuous data-driven testing. We track every dollar and optimize for the lowest possible cost per result.",
          results: [
            "Lower Cost Per Lead",
            "Higher Conversion Rates",
            "Scalable Brand Awareness",
          ],
        },
        {
          slug: "google-ads",
          title: "Google Ads Management",
          desc: "Professional Google Ads campaign management that puts your business in front of high-intent buyers.",
          image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
          tech: [
            "Google Ads",
            "Google Analytics 4",
            "Keyword Planner",
            "Tag Manager",
          ],
          features: [
            "Search & Display Ads",
            "Google Shopping Campaigns",
            "YouTube Pre-Roll Ads",
            "Smart Remarketing Campaigns",
            "Negative Keyword Filtering",
          ],
          overview:
            "Get in front of customers who are actively searching for your product or service. Our Google Ads specialists build tightly structured campaigns with highly relevant ad copy, proper bid strategies, and continuous negative keyword refinement to minimize waste and maximize ROI.",
          results: [
            "Immediate Targeted Traffic",
            "High-Intent Qualified Leads",
            "Measurable & Transparent ROI",
          ],
        },
      ],
    },
    blogTitle: "Marketing Insights",
    blogDescription:
      "Latest digital marketing trends, strategies, and case studies",
    blogPosts: [
      {
        title: "SEO Trends to Watch in 2024",
        category: "SEO",
        readTime: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070",
        description:
          "Stay ahead of the curve with the latest SEO trends, algorithm updates, and ranking strategies for 2024.",
        views: "4.1k",
        author: "Bilal Ahmed",
      },
      {
        title: "Meta Ads vs Google Ads: Which Should You Run?",
        category: "Paid Ads",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074",
        description:
          "A clear breakdown to help you decide which paid advertising channel delivers better ROI for your business.",
        views: "3.7k",
        author: "Sara Malik",
      },
    ],
    testimonials: [
      {
        quote:
          "Our leads increased massively after running Google Ads with them.",
        name: "Bilal Ahmed",
        designation: "CEO @ Growthify",
        src: WebClient1,
      },
      {
        quote:
          "They managed our Meta funnels and built a behavioral email system that dramatically grew our subscription sign-ups.",
        name: "Marcus Hayes",
        designation: "E-Commerce Director, Alpha Grind Coffee Co.",
        src: WebClient2,
      },
      {
        quote:
          "Their hyper-targeted Google Search ads captured high-intent buyers perfectly. Our CRO improved significantly within the first month.",
        name: "Natalie Reyes",
        designation: "Head of Operations, SafeHaven Smart Home",
        src: WebClient3,
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term investment. Most clients see measurable improvements in rankings and traffic within 3–6 months. Competitive niches may take longer, but the results compound over time.",
      },
      {
        question: "What is the minimum ad budget you work with?",
        answer:
          "We recommend a minimum ad spend of $500/month for Meta Ads and $300/month for Google Ads to gather meaningful data. Our management fee is separate.",
      },
      {
        question: "Do you handle ad creatives and copywriting?",
        answer:
          "Yes. Our team handles ad copy, creative direction, and image/video assets for all campaigns. You only need to provide your product or service details.",
      },
      {
        question: "How do you report campaign performance?",
        answer:
          "You receive a detailed monthly performance report with all key metrics — impressions, clicks, conversions, cost per result, and ROI — plus a strategy review call.",
      },
    ],
    roadmap: {
      title: "Digital Marketing Roadmap",
      description: "Your clear path from zero to consistent digital growth",
      steps: [
        {
          title: "Audit & Analysis",
          description:
            "A thorough audit of your current website, SEO health, competitors, and existing marketing performance.",
          icon: Eye,
        },
        {
          title: "Strategy Development",
          description:
            "Build a custom, multi-channel marketing strategy tailored to your audience, goals, and budget.",
          icon: Target,
        },
        {
          title: "Campaign Execution",
          description:
            "Launch and actively manage SEO, paid ads, and content campaigns with continuous A/B testing.",
          icon: Rocket,
        },
        {
          title: "Reporting & Optimization",
          description:
            "Monthly reporting, data analysis, and ongoing optimization to improve results and scale winning campaigns.",
          icon: TrendingUp,
        },
      ],
    },
    nextSteps: {
      title: "Grow Your Business Online",
      description: "Start your digital growth journey in three simple steps",
      steps: [
        {
          title: "Free Marketing Audit",
          description:
            "We analyze your website, competitors, and current marketing to identify the biggest growth opportunities.",
        },
        {
          title: "Custom Growth Strategy",
          description:
            "Receive a tailored marketing plan with clear channels, timelines, budgets, and expected outcomes.",
        },
        {
          title: "Launch & Scale",
          description:
            "We execute the campaigns, track every metric, and continuously optimize to maximize your ROI.",
        },
      ],
      buttonText: "Get a Free Marketing Audit",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Grow Your Business?",
    ctaButton: "Get a Free Audit",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },

  // 4. Tool Development
  {
    slug: "tool-development",
    title: "Tool Development",
    desc: "Custom software tools and automation solutions.",
    icon: Wrench,
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    heroTitle: "Custom Tool Development",
    heroDesc:
      "Build powerful custom software tools and intelligent automation systems that eliminate manual work, reduce costs, and give your business a competitive edge.",
    sectionTitle: "Custom Tool Development Solutions",
    sectionDesc:
      "We build tailored software tools — from automation scripts and internal dashboards to full CRM systems and API integrations. If your team does it repeatedly, we can automate it.",
    sectionImage:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070",
    tabs: [
      {
        title: "Automation",
        content: {
          heading: "Business Process Automation",
          desc: "Eliminate repetitive tasks and streamline your workflows with intelligent custom automation tools.",
          points: [
            "Workflow & Process Automation",
            "Automated Data Processing",
            "Scheduled Report Generation",
            "Multi-step Task Scheduling",
          ],
        },
      },
      {
        title: "Dashboards",
        content: {
          heading: "Custom Analytics Dashboards",
          desc: "Real-time, role-based dashboards that give your team the data they need — exactly when they need it.",
          points: [
            "Custom KPI Dashboards",
            "Interactive Data Visualization",
            "Real-time Updates & Alerts",
            "Export & Reporting Features",
          ],
        },
      },
      {
        title: "APIs",
        content: {
          heading: "API Development & Integration",
          desc: "Build robust, documented APIs that power your applications and connect your tools seamlessly.",
          points: [
            "RESTful API Development",
            "GraphQL APIs",
            "Comprehensive API Documentation",
            "Rate Limiting & Security",
          ],
        },
      },
      {
        title: "Integration",
        content: {
          heading: "Third-Party System Integration",
          desc: "Connect your existing tools, platforms, and databases into one unified, automated ecosystem.",
          points: [
            "CRM & ERP Integration",
            "Payment Gateway Connections",
            "Email & SMS Service APIs",
            "Zapier & Make.com Workflows",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Tools",
        desc: "Purpose-built software tools designed specifically around your business processes and team workflows.",
        icon: Settings,
      },
      {
        title: "Automation Systems",
        desc: "End-to-end automation that handles data entry, report generation, notifications, and repetitive tasks 24/7.",
        icon: Zap,
      },
      {
        title: "Analytics Dashboards",
        desc: "Beautiful, real-time dashboards that consolidate your business data into clear, actionable insights.",
        icon: BarChart,
      },
      {
        title: "API & Integrations",
        desc: "Scalable API development and seamless third-party integrations that make all your tools work together.",
        icon: Database,
      },
    ],
    capabilitiesTitle: "Tool Development",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    processSubTitle: "Our Development Process",
    processTitle: "Build Powerful Tools",
    processHighlight: "That Work",
    processImage:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070",
    processDesc:
      "We don't build generic software — we build exactly the tool your business needs. Every project starts with deeply understanding your workflow, then engineering the most efficient solution.",
    processFeatures: [
      "Requirements Deep-Dive",
      "Architecture & System Design",
      "Agile Development & Testing",
      "Deployment, Training & Handover",
    ],
    showcase: {
      title: "Tool Development Projects",
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      projects: [
        {
          slug: "firmware-security-platform",
          title: "Firmware & Supply Chain Security Platform",
          desc: "Advanced enterprise-grade firmware security platform designed to detect vulnerabilities, monitor device integrity, and protect hardware supply chains.",
          image: ToolProject1,
          tech: [
            "React",
            "Python",
            "AI Detection",
            "Cloud Infrastructure",
            "REST API",
          ],
          features: [
            "Firmware Vulnerability Detection",
            "Real-time Device Monitoring",
            "Supply Chain Risk Analysis",
            "Threat Intelligence Dashboard",
            "Automated Security Reporting",
          ],
          overview:
            "We developed a powerful firmware and hardware security platform inspired by modern enterprise cybersecurity ecosystems. The system continuously scans connected devices, identifies hidden firmware vulnerabilities, monitors hardware integrity, and provides real-time threat intelligence dashboards for enterprise IT teams.",
          results: [
            "Improved Infrastructure Security",
            "Faster Threat Detection",
            "Enterprise-grade Compliance Visibility",
          ],
        },
        {
          slug: "ai-finance-audit-platform",
          title: "AI Finance Audit & Spend Management Platform",
          desc: "AI-powered financial auditing and spend management software that automates invoice reviews, fraud detection, and expense compliance.",
          image: ToolProject2,
          tech: ["Electron.js", "Python", "AI Models", "Node.js", "MongoDB"],
          features: [
            "Automated Invoice Auditing",
            "AI Fraud Detection Engine",
            "Expense Policy Compliance",
            "Real-time Financial Insights",
            "ERP & Accounting Integrations",
          ],
          overview:
            "This intelligent finance operations platform automates manual accounting workflows using AI. The software reviews invoices, flags suspicious transactions, validates policy compliance, and provides finance teams with real-time visibility into spending behavior across multiple departments and vendors.",
          results: [
            "Reduced Manual Audit Work",
            "Faster Financial Operations",
            "Improved Expense Accuracy",
          ],
        },
      ],
    },
    blogTitle: "Tool Development Insights",
    blogDescription:
      "Automation strategies and custom software development tips",
    blogPosts: [
      {
        title: "How Automation Can Save Your Business 20+ Hours Per Week",
        category: "Automation",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
        description:
          "Discover which business processes are easiest to automate and how much time and money you can realistically save.",
        views: "1.5k",
        author: "Imran Ali",
      },
      {
        title: "Why Your Business Needs a Custom CRM (Not a Generic One)",
        category: "CRM",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
        description:
          "Generic CRMs bloat your workflow with features you never use. Here's why a custom CRM pays for itself.",
        views: "2.1k",
        author: "Hassan Raza",
      },
    ],
    testimonials: [
      {
        quote:
          "They built a custom TikTok Creator Outreach Tool that auto-scans micro-influencers, sends DMs, and tracks affiliate revenue. Our influencer program now runs on autopilot.",
        name: "Derek Vance",
        designation: "Founder & Marketing Director, AeroFit Apparel",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "Their AI-powered SEO optimizer rewrites thousands of product titles and pushes updates to Shopify and Amazon in one click. Months of work done in minutes.",
        name: "Chloe Sterling",
        designation: "Chief Growth Officer, PureGlow Organics",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "They eliminated our expensive SaaS subscriptions by building a proprietary Laravel marketing dashboard with behavioral email sequences tied directly to our Meta ad pixel.",
        name: "Marcus Hayes",
        designation: "E-Commerce Director, Alpha Grind Coffee Co.",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "Their NLP lead qualification chatbot helped us filter high-value prospects instantly and route enterprise leads directly to our sales team while improving Google Ads ROI.",
        name: "Natalie Reyes",
        designation: "Head of Operations, SafeHaven Smart Home",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    faqs: [
      {
        question: "How long does custom tool development take?",
        answer:
          "Timeline depends on complexity. Simple automation scripts take 1–2 weeks. A full CRM or dashboard typically takes 4–8 weeks. We provide a clear timeline upfront after reviewing your requirements.",
      },
      {
        question: "Do you provide documentation and training?",
        answer:
          "Yes. Every tool we build comes with full documentation and a handover training session so your team can use and manage it confidently.",
      },
      {
        question: "Can you integrate with our existing software?",
        answer:
          "Absolutely. We integrate with thousands of tools via APIs — including Salesforce, HubSpot, QuickBooks, Shopify, Google Workspace, Slack, and more.",
      },
      {
        question: "Do you offer ongoing maintenance after delivery?",
        answer:
          "Yes. We offer flexible maintenance plans including bug fixes, feature additions, and performance monitoring so your tool stays reliable as your business grows.",
      },
    ],
    roadmap: {
      title: "Tool Development Roadmap",
      description:
        "From business problem to working software — our proven path",
      steps: [
        {
          title: "Discovery & Requirements",
          description:
            "We deep-dive into your workflows, pain points, and goals to define exactly what needs to be built.",
          icon: Target,
        },
        {
          title: "Architecture & Design",
          description:
            "Design the system architecture, database schema, and UI/UX before any code is written.",
          icon: Palette,
        },
        {
          title: "Development & Testing",
          description:
            "Build and rigorously test every feature with real-world data and edge case scenarios.",
          icon: Code,
        },
        {
          title: "Deployment & Training",
          description:
            "Deploy to production, provide full documentation, and train your team for a seamless handover.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Build Your Custom Tool",
      description:
        "Turn your biggest operational pain point into a solved problem",
      steps: [
        {
          title: "Share Your Requirements",
          description:
            "Tell us about your workflow challenges, the tasks you want to automate, or the tool you have in mind.",
        },
        {
          title: "Receive a Custom Proposal",
          description:
            "We deliver a detailed development plan, timeline, and fixed-price quote — no surprises.",
        },
        {
          title: "Launch & Use Your Tool",
          description:
            "We build, test, deploy, and hand over your custom tool with full documentation and training.",
        },
      ],
      buttonText: "Discuss Your Project",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Automate Your Business?",
    ctaButton: "Get a Free Consultation",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
  },

  // 5. AI & Machine Learning
  {
    slug: "python-ml-ai",
    title: "AI & Machine Learning",
    desc: "Python, ML and AI solutions for intelligent automation.",
    icon: BrainCircuit,
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    heroTitle: "AI & Machine Learning Solutions",
    heroDesc:
      "Leverage the power of Python, AI, and Machine Learning to automate complex processes, predict future trends, and gain insights your competitors can't see.",
    sectionTitle: "Intelligent AI & ML Solutions",
    sectionDesc:
      "We build custom AI and machine learning systems that learn from your data, automate intelligent decisions, and give your business capabilities that were previously only available to tech giants.",
    sectionImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    tabs: [
      {
        title: "Machine Learning",
        content: {
          heading: "Custom ML Model Development",
          desc: "Build predictive models trained on your own data to forecast outcomes and automate complex decisions.",
          points: [
            "Predictive Analytics & Forecasting",
            "Classification & Regression Models",
            "Anomaly Detection",
            "Model Training, Evaluation & Deployment",
          ],
        },
      },
      {
        title: "AI Automation",
        content: {
          heading: "Intelligent Process Automation",
          desc: "Replace rule-based automation with AI that understands context, learns over time, and handles exceptions.",
          points: [
            "Intelligent Workflow Automation",
            "AI-Powered Decision Making",
            "Pattern Recognition Systems",
            "Automated Data Extraction (ETL)",
          ],
        },
      },
      {
        title: "Data Science",
        content: {
          heading: "Data Analysis & Science",
          desc: "Turn raw, messy data into structured insights that drive better business decisions.",
          points: [
            "Exploratory Data Analysis (EDA)",
            "Statistical Modeling",
            "Data Cleaning & Pipeline Building",
            "Interactive Reporting",
          ],
        },
      },
      {
        title: "NLP",
        content: {
          heading: "Natural Language Processing",
          desc: "Build systems that understand, process, and generate human language at scale.",
          points: [
            "Sentiment & Intent Analysis",
            "AI Chatbots & Virtual Assistants",
            "Text Classification & Summarization",
            "Document Processing & OCR",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Machine Learning",
        desc: "Custom predictive models trained on your data — for sales forecasting, churn prediction, demand planning, and more.",
        icon: BrainCircuit,
      },
      {
        title: "AI Automation",
        desc: "Intelligent automation that goes beyond rules — systems that understand context and make smart decisions autonomously.",
        icon: Zap,
      },
      {
        title: "Data Science",
        desc: "End-to-end data pipelines, analysis, and visualization to uncover insights hidden in your business data.",
        icon: Database,
      },
      {
        title: "NLP & Chatbots",
        desc: "Natural language systems for support automation, document processing, sentiment analysis, and conversational AI.",
        icon: Search,
      },
    ],
    capabilitiesTitle: "AI & ML",
    capabilitiesHighlight: "Capabilities",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    processSubTitle: "Our AI Development Process",
    processTitle: "Intelligence That",
    processHighlight: "Transforms",
    processImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
    processDesc:
      "We follow a structured, research-backed process to build AI systems that are accurate, reliable, explainable, and production-ready.",
    processFeatures: [
      "Data Assessment & Collection",
      "Model Selection & Development",
      "Training, Evaluation & Testing",
      "Deployment, Monitoring & Retraining",
    ],
    showcase: {
      title: "AI & ML Projects",
      bgImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
      projects: [
        {
          slug: "predictive-analytics",
          title: "Predictive Analytics Engine",
          desc: "Machine learning models that forecast business trends, demand, and outcomes with high accuracy.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
          tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Plotly"],
          features: [
            "Sales & Revenue Forecasting",
            "Inventory Demand Prediction",
            "Customer Churn Prediction",
            "Risk Scoring Models",
            "Trend & Seasonality Analysis",
          ],
          overview:
            "Stop making decisions based on gut feeling. Our predictive analytics engines are trained on your historical business data to forecast sales, predict customer churn, optimize inventory, and identify risks before they become problems — giving you a 60-day strategic advantage.",
          results: [
            "60-Day Sales Forecasting",
            "32% Reduction in Inventory Overhead",
            "Measurable Competitive Advantage",
          ],
        },
        {
          slug: "chatbot-development",
          title: "AI Chatbot & Virtual Assistant",
          desc: "Intelligent, context-aware chatbots that handle customer support, lead qualification, and FAQs automatically.",
          image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070",
          tech: ["Python", "LangChain", "OpenAI GPT-4", "Rasa", "Dialogflow"],
          features: [
            "Natural Language Understanding",
            "24/7 Automated Support",
            "Multi-language Support",
            "Lead Capture & Qualification",
            "Seamless Human Handoff",
          ],
          overview:
            "Our AI chatbots go beyond scripted responses. Powered by large language models, they understand context, handle complex queries, remember conversation history, and escalate to human agents when needed. Most clients resolve 65–75% of support tickets automatically after deployment.",
          results: [
            "70% Support Tickets Auto-Resolved",
            "Response Time: 14 Hours → 45 Seconds",
            "Significant Support Cost Reduction",
          ],
        },
        {
          slug: "image-recognition",
          title: "Computer Vision & Image Recognition",
          desc: "Custom computer vision systems for object detection, image classification, OCR, and visual search.",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
          tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLO v8"],
          features: [
            "Real-time Object Detection",
            "Face & Identity Recognition",
            "Multi-class Image Classification",
            "Optical Character Recognition (OCR)",
            "Visual Product Search",
          ],
          overview:
            "Automate visual inspection, document processing, product recognition, and quality control with state-of-the-art computer vision. Our models are trained on your specific use case — whether you need to detect defects on a production line, extract text from documents, or identify products from images.",
          results: [
            "95%+ Model Accuracy",
            "Fully Automated Visual Processing",
            "Scalable to Millions of Images",
          ],
        },
      ],
    },
    blogTitle: "AI & ML Insights",
    blogDescription:
      "Latest developments in artificial intelligence and machine learning",
    blogPosts: [
      {
        title: "How AI is Transforming Small & Medium Businesses",
        category: "AI",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
        description:
          "Explore practical, affordable ways AI is giving smaller businesses capabilities that were once only available to enterprises.",
        views: "5.2k",
        author: "Dr. Sara Ahmed",
      },
      {
        title: "Predictive Analytics: A Practical Guide for Business Owners",
        category: "Machine Learning",
        readTime: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
        description:
          "What is predictive analytics, how does it work, and what kind of results can your business realistically expect?",
        views: "3.8k",
        author: "Imran Ali",
      },
    ],
    testimonials: [
      {
        quote:
          "Their predictive ML inventory engine transformed how we manage purchasing and warehouse forecasting. The AI accurately predicts demand trends weeks in advance and significantly reduced our operational waste.",
        name: "Derek Sterling",
        designation: "Chief Technology Officer, Apex Apparel Group",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "The NLP-powered recommendation engine completely changed our customer experience. Users now receive personalized supplement suggestions instantly through natural conversation flows.",
        name: "Dr. Elena Rostova",
        designation: "Founder, Vitality Bio-Nutrient Co.",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "Their AI-driven TikTok trend scraper helped us identify viral products before competitors even noticed them. It became the backbone of our multi-store dropshipping operation.",
        name: "Marcus Thorne",
        designation: "VP of Growth, Horizon Drop-Logistics",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "The AI intent-classification system automated most of our support operations and reduced response times from hours to seconds while routing complex cases perfectly.",
        name: "Sophia Chen",
        designation: "Operations Director, LuxeDecor Direct",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What kind of data do I need to start an AI/ML project?",
        answer:
          "It depends on the use case. Most ML models need at least 1,000–10,000 historical records. We can work with structured CSVs, databases, images, PDFs, or raw text. We'll assess your data readiness in a free consultation.",
      },
      {
        question: "How accurate will the AI model be?",
        answer:
          "Accuracy depends on data quality and quantity. With clean, sufficient data, we typically achieve 85–95% accuracy. We always provide clear performance metrics before deployment.",
      },
      {
        question: "Do I need a technical team to manage the AI system?",
        answer:
          "No. We build user-friendly interfaces around our AI systems so your team can use and monitor them without any technical knowledge.",
      },
      {
        question: "Can you integrate AI into our existing software?",
        answer:
          "Yes. We integrate AI models into your existing CRM, e-commerce platform, website, or internal tools via APIs — no need to rebuild your existing systems.",
      },
    ],
    roadmap: {
      title: "AI Implementation Roadmap",
      description:
        "A structured, low-risk path to deploying AI in your business",
      steps: [
        {
          title: "Data Assessment",
          description:
            "Evaluate the quality, quantity, and structure of your data to determine the best AI approach.",
          icon: Database,
        },
        {
          title: "Model Selection & Design",
          description:
            "Select the optimal ML architecture and design the system based on your specific use case and goals.",
          icon: BrainCircuit,
        },
        {
          title: "Development & Training",
          description:
            "Build, train, and rigorously evaluate the model using your data and industry benchmarks.",
          icon: Code,
        },
        {
          title: "Deployment & Monitoring",
          description:
            "Deploy to production with monitoring dashboards, alerting, and scheduled retraining pipelines.",
          icon: Settings,
        },
      ],
    },
    nextSteps: {
      title: "Start Your AI Journey",
      description: "Three steps to bringing AI into your business",
      steps: [
        {
          title: "Free AI Consultation",
          description:
            "Discuss your business challenges and explore which AI solutions will deliver the highest ROI for you.",
        },
        {
          title: "Feasibility & Data Review",
          description:
            "We analyze your data, define the use case, and present a clear development roadmap and success metrics.",
        },
        {
          title: "Build & Deploy AI",
          description:
            "We develop, test, and deploy your AI solution — then monitor it to ensure it keeps improving over time.",
        },
      ],
      buttonText: "Explore AI Solutions",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Give Your Business an AI Edge?",
    ctaButton: "Talk to an AI Expert",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
  },

  // 6. Graphic Design
  {
    slug: "graphic-design",
    title: "Graphic Design",
    desc: "Creative branding and visual design services.",
    icon: Palette,
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    heroTitle: "Creative Graphic Design That Sells",
    heroDesc:
      "Stand out with stunning visual designs that capture your brand identity, build trust with your audience, and convert attention into action.",
    sectionTitle: "Professional Graphic Design Services",
    sectionDesc:
      "From brand identities and logo suites to social media graphics and packaging design — we create visuals that are strategically beautiful and built to make a lasting impression.",
    sectionImage:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
    tabs: [
      {
        title: "Branding",
        content: {
          heading: "Brand Identity Design",
          desc: "Create a cohesive, memorable brand identity that communicates your values and attracts your ideal customers.",
          points: [
            "Logo Design & Icon System",
            "Brand Guidelines Document",
            "Color Psychology & Palette",
            "Typography System",
          ],
        },
      },
      {
        title: "Print Design",
        content: {
          heading: "Print & Packaging Design",
          desc: "Professional print materials that make powerful first impressions — both online and offline.",
          points: [
            "Brochures & Flyers",
            "Business Cards & Stationery",
            "Poster & Banner Design",
            "Product Packaging Mockups",
          ],
        },
      },
      {
        title: "Digital Design",
        content: {
          heading: "Digital & Social Media Graphics",
          desc: "Scroll-stopping digital visuals designed for every platform and every campaign.",
          points: [
            "Social Media Post Templates",
            "Web Banners & Display Ads",
            "Email Newsletter Templates",
            "Meta & TikTok Ad Creatives",
          ],
        },
      },
      {
        title: "Illustration",
        content: {
          heading: "Custom Illustration & Icons",
          desc: "Unique illustrations and icon sets that give your brand a distinctive visual voice.",
          points: [
            "Character & Mascot Design",
            "Custom Infographics",
            "Icon & UI Element Sets",
            "Editorial & Concept Art",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Brand Identity",
        desc: "Complete brand identity packages — logo, color palette, typography, and brand guidelines — built to last.",
        icon: Award,
      },
      {
        title: "Print & Packaging",
        desc: "Professional print design from business cards and brochures to product packaging and trade show materials.",
        icon: HeartHandshake,
      },
      {
        title: "Digital Graphics",
        desc: "Scroll-stopping social media graphics, display ads, and email templates optimized for engagement.",
        icon: Globe,
      },
      {
        title: "Custom Illustration",
        desc: "Unique hand-crafted illustrations, mascots, infographics, and icon sets that set your brand apart.",
        icon: Palette,
      },
    ],
    capabilitiesTitle: "Design",
    capabilitiesHighlight: "Services",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
    processSubTitle: "Our Design Process",
    processTitle: "Creativity That",
    processHighlight: "Inspires",
    processImage:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
    processDesc:
      "Great design isn't accidental — it's the result of a structured creative process that combines strategic thinking with artistic execution.",
    processFeatures: [
      "Brand Discovery & Research",
      "Concept Development & Mood Board",
      "Design Creation & Refinement",
      "Final Delivery & Brand Guidelines",
    ],
    showcase: {
      title: "Design Projects",
      bgImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
      projects: [
        {
          slug: "logo-design",
          title: "Logo & Brand Mark Design",
          desc: "Unique, versatile logo designs that represent your brand identity across every medium and scale.",
          image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
          tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
          features: [
            "3–5 Unique Initial Concepts",
            "Scalable Vector Files (AI, EPS, SVG)",
            "Full Color, Mono & Reversed Versions",
            "Unlimited Revision Rounds",
            "Complete Logo Usage Guidelines",
          ],
          overview:
            "Your logo is the foundation of your brand — it appears everywhere from your website and packaging to social media and business cards. We create logos that are simple enough to be instantly recognizable, versatile enough to work everywhere, and distinctive enough to stand out in your market.",
          results: [
            "Instant Brand Recognition",
            "Professional First Impressions",
            "Versatile Across All Media",
          ],
        },
        {
          slug: "social-media-graphics",
          title: "Social Media Graphics & Ad Creatives",
          desc: "Scroll-stopping graphics and ad creatives for Instagram, Facebook, TikTok, and LinkedIn.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: ["Adobe Photoshop", "Illustrator", "Figma", "Canva Pro"],
          features: [
            "Instagram Feed & Story Templates",
            "Facebook Cover & Ad Creatives",
            "LinkedIn Banner & Post Design",
            "TikTok Thumbnail & Overlay Design",
            "Reusable Brand-Consistent Templates",
          ],
          overview:
            "In a saturated social media landscape, only the most visually compelling content stops the scroll. We design strategic, brand-consistent graphics that are built for engagement — combining eye-catching visuals with clear messaging that drives clicks, follows, and conversions.",
          results: [
            "Higher Engagement & CTR",
            "Consistent Brand Presence",
            "Stronger Social Media Growth",
          ],
        },
        {
          slug: "brand-identity",
          title: "Complete Brand Identity System",
          desc: "A comprehensive brand identity package — everything you need to present your business professionally.",
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
          tech: ["Illustrator", "Photoshop", "InDesign", "Figma"],
          features: [
            "Primary & Secondary Logo Suite",
            "Full Color Palette with Usage Rules",
            "Typography Hierarchy System",
            "60+ Page Brand Guidelines Document",
            "Stationery & Business Card Design",
          ],
          overview:
            "A complete brand identity system gives your business the visual consistency and professionalism that builds trust. We deliver everything — logos, colors, fonts, patterns, icons, and a comprehensive brand guidelines document — so your entire team presents the brand consistently everywhere.",
          results: [
            "Consistent Brand Across All Channels",
            "Premium, Professional Image",
            "Clear Market Differentiation",
          ],
        },
      ],
    },
    blogTitle: "Design Insights",
    blogDescription:
      "Latest graphic design trends, tips, and branding strategies",
    blogPosts: [
      {
        title: "Graphic Design Trends Dominating 2024",
        category: "Trends",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
        description:
          "From maximalist typography to AI-generated textures — the design trends you need to know for 2024.",
        views: "2.8k",
        author: "Fatima Khan",
      },
      {
        title: "Why Your Brand Needs a Proper Brand Identity (Not Just a Logo)",
        category: "Branding",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080",
        description:
          "The difference between a logo and a brand identity — and why it matters for your business growth.",
        views: "3.4k",
        author: "Ali Raza",
      },
    ],
    testimonials: [
      {
        quote:
          "Their creative team completely refreshed our paid advertising visuals with scroll-stopping Meta and TikTok creatives. The new graphics dramatically improved our engagement and click-through rates.",
        name: "Austin Vance",
        designation: "Marketing Director, AeroFit Gear",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "They transformed our skincare brand into a premium luxury identity with stunning packaging, minimalist branding, and beautifully designed unboxing materials that elevated the entire customer experience.",
        name: "Chloe Bennett",
        designation: "Founder, Sol & Seed Botanicals",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "The custom UI/UX graphics and icon systems they designed made our subscription experience far more intuitive and visually polished. Our storefront finally feels like a premium coffee brand.",
        name: "Marcus Hayes",
        designation: "Operations Lead, Grindhouse Coffee Roasters",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "Their lookbook designs and Amazon A+ content gave our seasonal collections a high-end visual presence while significantly improving the professionalism of our marketplace listings.",
        name: "Natalie Reyes",
        designation: "Brand Manager, Home & Hearth Co.",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    faqs: [
      {
        question: "How many design concepts do you provide?",
        answer:
          "We provide 3–5 unique initial concepts for logo projects, and 2–3 directions for branding projects. You choose the direction you love and we refine from there.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "We offer unlimited revisions on all design projects until you are completely satisfied — your approval is our goal.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You receive all source files in AI, EPS, PSD, SVG, PNG (transparent), JPG, and PDF formats — everything you need for print and digital use.",
      },
      {
        question: "Do you create designs for social media ad campaigns?",
        answer:
          "Yes. We design high-converting ad creatives for Meta, TikTok, Google Display, LinkedIn, and all major platforms in correct dimensions for each placement.",
      },
    ],
    roadmap: {
      title: "Design Project Roadmap",
      description: "From blank canvas to stunning, delivered brand assets",
      steps: [
        {
          title: "Discovery & Brief",
          description:
            "We understand your brand, audience, competitors, and vision through a detailed creative brief.",
          icon: Target,
        },
        {
          title: "Mood Board & Direction",
          description:
            "Present visual mood boards to align on aesthetic direction before any design work begins.",
          icon: Palette,
        },
        {
          title: "Design & Refinement",
          description:
            "Create initial concepts, gather your feedback, and refine until every detail is perfect.",
          icon: Sparkles,
        },
        {
          title: "Final Delivery",
          description:
            "Deliver all final files in every format needed, with usage guidelines and full transfer of ownership.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Design Project",
      description: "Bring your brand vision to life in three steps",
      steps: [
        {
          title: "Share Your Vision",
          description:
            "Tell us about your brand, your target audience, and the feeling you want your design to convey.",
        },
        {
          title: "Receive Your Designs",
          description:
            "We present initial concepts and refine based on your feedback until the design is perfect.",
        },
        {
          title: "Get Your Files",
          description:
            "Receive all final design files in every format, ready to use across print and digital channels.",
        },
      ],
      buttonText: "Start Designing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Build a Brand That Stands Out?",
    ctaButton: "Get a Design Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064",
  },

  // 7. Video Editing
  {
    slug: "video-editing",
    title: "Video Editing",
    desc: "Professional video editing and post-production services.",
    icon: Video,
    heroImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroTitle: "Professional Video Editing & Post-Production",
    heroDesc:
      "Transform your raw footage into captivating, high-retention videos that tell your story, build your brand, and drive real engagement across every platform.",
    sectionTitle: "Professional Video Editing Services",
    sectionDesc:
      "From YouTube long-form content and viral TikTok Reels to corporate brand films and Meta ad creatives — we edit videos that hold attention, communicate clearly, and get results.",
    sectionImage:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tabs: [
      {
        title: "Video Editing",
        content: {
          heading: "Professional Video Editing",
          desc: "Full post-production editing that transforms raw footage into polished, compelling video content.",
          points: [
            "Precision Cutting & Trimming",
            "Cinematic Color Grading",
            "Audio Enhancement & Mixing",
            "Seamless Transitions",
          ],
        },
      },
      {
        title: "Motion Graphics",
        content: {
          heading: "Motion Graphics & Animation",
          desc: "Eye-catching animated elements that elevate your video production quality and brand presence.",
          points: [
            "Branded Title Sequences",
            "Lower Thirds & Overlays",
            "Explainer Video Animation",
            "Animated Logo Reveals",
          ],
        },
      },
      {
        title: "VFX",
        content: {
          heading: "Visual Effects (VFX)",
          desc: "Cinematic visual effects that add production value and wow-factor to your video content.",
          points: [
            "Green Screen Keying",
            "Compositing & Layer Work",
            "Particle & Special Effects",
            "3D Element Integration",
          ],
        },
      },
      {
        title: "Social Media",
        content: {
          heading: "Social Media Video Content",
          desc: "Short-form videos engineered for platform algorithms, scroll-stopping hooks, and viral potential.",
          points: [
            "Instagram Reels & Stories",
            "YouTube Shorts & Long-form",
            "TikTok Content with Hooks",
            "Facebook & Meta Ad Videos",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Full Video Editing",
        desc: "End-to-end post-production — cutting, color, audio mixing, and motion graphics — delivered on time.",
        icon: Video,
      },
      {
        title: "Motion Graphics",
        desc: "Custom animated titles, logo reveals, lower thirds, and explainer animations for maximum production value.",
        icon: Sparkles,
      },
      {
        title: "Visual Effects",
        desc: "Green screen compositing, particle effects, and 3D integration to add cinematic quality to your videos.",
        icon: Zap,
      },
      {
        title: "Social Media Content",
        desc: "Scroll-stopping short-form videos with strong hooks, captions, and music sync for all major platforms.",
        icon: Globe,
      },
    ],
    capabilitiesTitle: "Video",
    capabilitiesHighlight: "Production",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    processSubTitle: "Our Editing Process",
    processTitle: "Stories That",
    processHighlight: "Captivate",
    processImage:
      "https://images.unsplash.com/photo-1551302175-952301267d19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    processDesc:
      "We don't just cut footage — we craft narrative-driven videos with pacing, sound, and visuals working in harmony to hold viewer attention from first frame to last.",
    processFeatures: [
      "Raw Footage Review & Organization",
      "Assembly Edit & Structure",
      "Color Grade, Effects & Audio Mix",
      "Export, Captioning & Final Delivery",
    ],
    showcase: {
      title: "Video Projects",
      bgImage:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projects: [
        {
          slug: "youtube-editing",
          title: "YouTube Long-Form Video Editing",
          desc: "Professional editing for YouTube creators and brands — built for watch time, retention, and subscriber growth.",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070",
          tech: [
            "Adobe Premiere Pro",
            "After Effects",
            "DaVinci Resolve",
            "Audition",
          ],
          features: [
            "Custom Animated Intros & Outros",
            "B-Roll & Stock Footage Integration",
            "Royalty-Free Background Music",
            "Auto-Captions & Subtitle Styling",
            "Optimized End Screens & Cards",
          ],
          overview:
            "YouTube success is built on watch time and retention. We edit your raw footage into tightly paced, engaging videos that hook viewers in the first 30 seconds and keep them watching until the end. Every edit is made with YouTube's algorithm in mind — from chapter markers and timestamps to thumbnail-ready moments.",
          results: [
            "Higher Average View Duration",
            "Consistent Publishing Workflow",
            "Faster Channel Growth",
          ],
        },
        {
          slug: "social-media-videos",
          title: "Short-Form Social Media Video Editing",
          desc: "High-energy, algorithm-optimized short videos for TikTok, Instagram Reels, and YouTube Shorts.",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
          tech: ["Adobe Premiere Pro", "CapCut Pro", "After Effects"],
          features: [
            "Attention-Grabbing 3-Second Hooks",
            "Kinetic Cuts & Trendy Transitions",
            "Animated Captions & Text Overlays",
            "Music Sync & Sound Design",
            "Vertical Format (9:16) Optimization",
          ],
          overview:
            "Short-form content is the fastest way to grow — but only if the editing is right. We create short videos with proven viral mechanics: strong opening hooks, punchy pacing, strategic caption placement, and platform-specific optimizations. Most clients see significant engagement increases within the first batch of videos.",
          results: [
            "Viral-Ready Content Structure",
            "Higher Watch-Through & Shares",
            "Faster Brand & Audience Growth",
          ],
        },
        {
          slug: "corporate-video",
          title: "Corporate & Brand Video Editing",
          desc: "Polished, professional video editing for corporate communications, brand films, and product showcases.",
          image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070",
          tech: ["Adobe Premiere Pro", "After Effects", "Adobe Audition"],
          features: [
            "Professional Color Grading",
            "Branded Lower Thirds & Typography",
            "Company Logo Animation",
            "Clean, Precise Cut Editing",
            "Professional Voice-over Integration",
          ],
          overview:
            "Your brand video is often a prospect's first impression of your company. We edit corporate videos, product showcases, testimonial compilations, and brand films with the professionalism and polish that builds trust, communicates value, and inspires confidence in your brand.",
          results: [
            "Elevated Brand Perception",
            "Stronger Audience Trust",
            "Higher-Converting Sales Videos",
          ],
        },
      ],
    },
    blogTitle: "Video Production Insights",
    blogDescription:
      "Tips, trends, and strategies for video content creators and brands",
    blogPosts: [
      {
        title: "Video Marketing Trends That Will Define 2024",
        category: "Trends",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "From AI-assisted editing to interactive shoppable videos — the trends reshaping video marketing this year.",
        views: "3.1k",
        author: "Omar Hussain",
      },
      {
        title: "How to Hook Viewers in the First 3 Seconds (The Science)",
        category: "Short-Form Video",
        readTime: 5,
        imageUrl:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074",
        description:
          "The data-backed techniques top creators use to capture attention instantly and maximize watch time.",
        views: "4.5k",
        author: "Fatima Khan",
      },
    ],
    testimonials: [
      {
        quote:
          "Their video editing team transformed our raw supplier footage into high-performing TikTok Shop ads with strong 3-second hooks, dynamic captions, and viral pacing that finally stopped the scroll and increased product clicks.",
        name: "Ryan Greenfield",
        designation: "Founder & CEO, Aspen Trail Gear",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "They completely rebuilt our Meta ad creatives from basic UGC into high-retention video ads with multiple hook variations, cinematic grading, and smooth transitions that significantly improved our CAC and viewer retention.",
        name: "Amanda Ross",
        designation: "Co-Founder, Sol Vibe Activewear",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "Their cinematic editing and ASMR-style brand videos captured the true sensory feel of our coffee. The result was a premium storytelling experience that elevated our subscription marketing campaigns across platforms.",
        name: "Tyler Vance",
        designation: "Brand Director, Midnight Roast Co.",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        quote:
          "They produced clean explainer videos, before-and-after case studies, and AI-guided consultation clips that dramatically improved user understanding and reduced drop-off on our skincare platform.",
        name: "Jessica Miller",
        designation: "Managing Director, Opal & Oak Skincare",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    faqs: [
      {
        question: "What video formats and resolutions do you work with?",
        answer:
          "We work with all major formats including MP4, MOV, MXF, and RAW footage from any camera. We deliver in up to 4K resolution for YouTube and 1080p for social media.",
      },
      {
        question: "How long does video editing take?",
        answer:
          "A YouTube video (10–20 minutes) typically takes 3–5 business days. Short-form videos take 1–2 days each. Turnaround depends on complexity and revisions.",
      },
      {
        question: "Do you add subtitles and captions?",
        answer:
          "Yes. We add auto-generated, manually reviewed captions for all videos. For social media, we style them with branded animations and color-coded highlights.",
      },
      {
        question: "Can you help with ongoing monthly video content?",
        answer:
          "Absolutely. We offer monthly retainer packages for consistent content creators and brands needing regular video editing on a reliable schedule.",
      },
    ],
    roadmap: {
      title: "Video Production Roadmap",
      description: "From raw footage to final, platform-ready video",
      steps: [
        {
          title: "Footage Review",
          description:
            "Review and organize all raw footage, assets, voiceovers, and reference videos before editing begins.",
          icon: Eye,
        },
        {
          title: "Assembly Edit",
          description:
            "Build the narrative structure — selecting the best takes and assembling the full timeline.",
          icon: Video,
        },
        {
          title: "Polish & Enhance",
          description:
            "Add color grading, motion graphics, music, effects, captions, and sound design.",
          icon: Sparkles,
        },
        {
          title: "Review & Deliver",
          description:
            "Incorporate your feedback, export final files in all required formats, and deliver on time.",
          icon: CheckCircle,
        },
      ],
    },
    nextSteps: {
      title: "Start Your Video Project",
      description:
        "Great video content starts with great editing — here's how we begin",
      steps: [
        {
          title: "Send Your Raw Footage",
          description:
            "Share your raw video files, reference videos, brand assets, and any editing notes via Google Drive or WeTransfer.",
        },
        {
          title: "We Edit & Enhance",
          description:
            "Our editors craft your video with cuts, color, audio, graphics, and captions — then send a draft for review.",
        },
        {
          title: "Receive Your Final Video",
          description:
            "After your approval, we export and deliver final files in all required formats, optimized for every platform.",
        },
      ],
      buttonText: "Start Editing",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Transform Your Video Content?",
    ctaButton: "Get a Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // 8. WordPress Website
  {
    slug: "wordpress-website",
    title: "WordPress Website",
    desc: "Custom WordPress development and design services.",
    icon: Globe,
    heroImage:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    heroTitle: "Custom WordPress Development",
    heroDesc:
      "Get a beautiful, blazing-fast, and fully secure WordPress website that's easy for your team to manage and built to grow with your business.",
    sectionTitle: "Professional WordPress Development Solutions",
    sectionDesc:
      "We build custom WordPress websites that combine exceptional design with powerful functionality. From custom theme development and plugin creation to speed optimization and ongoing maintenance — we handle everything.",
    sectionImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
    tabs: [
      {
        title: "Custom Themes",
        content: {
          heading: "Custom WordPress Theme Development",
          desc: "Pixel-perfect, custom-coded WordPress themes that are unique to your brand — not recycled templates.",
          points: [
            "100% Custom Design & Code",
            "Fully Responsive Layouts",
            "Optimized, Clean PHP Code",
            "Brand Identity Integration",
          ],
        },
      },
      {
        title: "Plugins",
        content: {
          heading: "Custom Plugin Development",
          desc: "Add any functionality you need with custom-built WordPress plugins — no bloated third-party plugins.",
          points: [
            "Custom Feature Plugins",
            "WooCommerce Extensions",
            "Third-Party API Integrations",
            "Performance-First Development",
          ],
        },
      },
      {
        title: "Maintenance",
        content: {
          heading: "WordPress Site Maintenance",
          desc: "Proactive WordPress maintenance that keeps your site secure, updated, and performing at its best.",
          points: [
            "Core, Theme & Plugin Updates",
            "Automated Daily Backups",
            "Security Scanning & Hardening",
            "Uptime Monitoring & Bug Fixes",
          ],
        },
      },
      {
        title: "Speed",
        content: {
          heading: "WordPress Speed Optimization",
          desc: "Dramatically improve your WordPress site speed for better user experience, SEO, and conversion rates.",
          points: [
            "Advanced Caching (Redis, WP Rocket)",
            "Image Compression & WebP Conversion",
            "CSS/JS Minification & Deferral",
            "Global CDN Setup",
          ],
        },
      },
    ],
    capabilities: [
      {
        title: "Custom Themes",
        desc: "Unique, custom-coded WordPress themes designed for your brand — fast, clean, and built to last.",
        icon: Palette,
      },
      {
        title: "Plugin Development",
        desc: "Custom plugins that add exactly the features you need without the bloat of off-the-shelf solutions.",
        icon: Settings,
      },
      {
        title: "Ongoing Maintenance",
        desc: "Proactive security monitoring, updates, backups, and support to keep your WordPress site healthy.",
        icon: HeartHandshake,
      },
      {
        title: "Speed Optimization",
        desc: "Expert optimization to achieve sub-2-second load times and top Core Web Vitals scores.",
        icon: Zap,
      },
    ],
    capabilitiesTitle: "WordPress",
    capabilitiesHighlight: "Expertise",
    capabilitiesBg:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
    processSubTitle: "Our WordPress Process",
    processTitle: "Build Your WordPress",
    processHighlight: "Vision",
    processImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
    processDesc:
      "We create WordPress websites that are beautiful, functional, blazing fast, and — most importantly — easy for you and your team to manage without technical skills.",
    processFeatures: [
      "Discovery & Planning",
      "Custom Design & Development",
      "Content Integration & Testing",
      "Launch, Training & Support",
    ],
    showcase: {
      title: "WordPress Projects",
      bgImage:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
      projects: [
        {
          slug: "custom-wordpress-theme",
          title: "Custom WordPress Theme Development",
          desc: "Completely custom-coded WordPress themes that are unique to your brand, optimized for speed, and easy to manage.",
          image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
          tech: ["PHP", "WordPress", "CSS3", "JavaScript", "ACF Pro", "Timber"],
          features: [
            "100% Custom Design — No Templates",
            "Fully Responsive on All Devices",
            "SEO-Optimized HTML Structure",
            "Sub-2-Second Load Time",
            "Easy Content Management (Gutenberg / ACF)",
          ],
          overview:
            "Template-based WordPress sites look like everyone else's — and your business deserves better. We hand-code custom WordPress themes from the ground up, precisely matching your brand identity. Every line of code is clean, optimized, and built with performance and maintainability as core priorities.",
          results: [
            "Completely Unique Brand Identity",
            "Faster Page Speed & Core Web Vitals",
            "Easy Team Self-Management",
          ],
        },
        {
          slug: "wordpress-maintenance",
          title: "WordPress Maintenance & Security",
          desc: "Comprehensive WordPress care plans — security monitoring, backups, updates, and performance checks.",
          image:
            "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=2069",
          tech: [
            "WordPress",
            "Wordfence",
            "UpdraftPlus",
            "WP Rocket",
            "ManageWP",
          ],
          features: [
            "Daily Automated Off-site Backups",
            "Real-time Security Threat Monitoring",
            "Weekly Core, Theme & Plugin Updates",
            "Monthly Performance Audits",
            "Priority Support & Bug Fixes",
          ],
          overview:
            "A neglected WordPress site is a vulnerable one — outdated plugins are the #1 source of WordPress hacks. Our maintenance plans keep your site updated, backed up, and secure 24/7, so you never have to worry about your website going down or getting compromised.",
          results: [
            "Zero Unplanned Downtime",
            "Complete Security Protection",
            "Always-Up-to-Date Performance",
          ],
        },
        {
          slug: "elementor-design",
          title: "Elementor Pro Website Design",
          desc: "Professional, fast-loading WordPress websites built with Elementor Pro — fully editable by your team.",
          image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
          tech: [
            "WordPress",
            "Elementor Pro",
            "Elementor Theme Builder",
            "CSS",
          ],
          features: [
            "Custom Elementor Page Designs",
            "Dynamic Content & Custom Post Types",
            "Advanced Popup & Form Builder",
            "WooCommerce Integration",
            "Team Self-Editing Without a Developer",
          ],
          overview:
            "Elementor Pro gives your team the power to update and edit the website themselves without touching code — while still looking like it was built by a professional developer. We build the site, then hand you the keys with full training so you're never dependent on us for small changes.",
          results: [
            "Beautiful Professional Design",
            "Full Team Editing Independence",
            "Faster Content Updates",
          ],
        },
      ],
    },
    blogTitle: "WordPress Insights",
    blogDescription:
      "WordPress tips, tutorials, and best practices for business owners",
    blogPosts: [
      {
        title:
          "The Essential WordPress Plugins Every Business Site Needs in 2024",
        category: "WordPress",
        readTime: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064",
        description:
          "Cut through the noise — these are the only WordPress plugins you actually need for security, SEO, speed, and forms.",
        views: "4.5k",
        author: "Hassan Raza",
      },
      {
        title:
          "Custom WordPress Theme vs Page Builder: Which Should You Choose?",
        category: "Development",
        readTime: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
        description:
          "The honest comparison between custom theme development and Elementor — with real performance data.",
        views: "3.2k",
        author: "Ali Raza",
      },
    ],
    testimonials: [
      {
        quote: "Our new WordPress site is fast, beautiful, and easy to manage.",
        name: "Hassan Raza",
        designation: "Business Owner",
        src: WebClient1,
      },
      {
        quote:
          "They redesigned our WordPress store from scratch. The speed improvement and clean design completely changed how customers interact with us.",
        name: "Marcus Hayes",
        designation: "Operations Lead, Grindhouse Coffee Roasters",
        src: WebClient2,
      },
      {
        quote:
          "Professional, fast, and easy to update. Our team manages the site with zero technical knowledge thanks to their Elementor build.",
        name: "Natalie Reyes",
        designation: "Brand Manager, Home & Hearth Co.",
        src: WebClient3,
      },
    ],
    faqs: [
      {
        question:
          "Can you redesign my existing WordPress site without losing my content?",
        answer:
          "Yes. We handle full WordPress redesigns while preserving all your existing content, SEO rankings, and URL structure. No data loss, no broken links.",
      },
      {
        question:
          "Do you provide training so we can manage the site ourselves?",
        answer:
          "Absolutely. After launch, we provide a recorded video tutorial and a live training session so your team can confidently add pages, update content, and manage media without needing a developer.",
      },
      {
        question: "How do you handle WordPress security?",
        answer:
          "All our WordPress builds include hardened security configurations, brute-force protection, SSL setup, and firewall rules. For maintenance clients, we also include real-time malware scanning.",
      },
      {
        question: "What if I need new features added after launch?",
        answer:
          "No problem. We're always available for post-launch additions — new pages, new functionality, plugin integrations, or WooCommerce expansions. We can work on a project basis or a monthly retainer.",
      },
    ],
    roadmap: {
      title: "WordPress Development Roadmap",
      description:
        "A clear, structured path from your vision to a live website",
      steps: [
        {
          title: "Discovery & Planning",
          description:
            "Define your site structure, features, integrations, and content strategy before design begins.",
          icon: Target,
        },
        {
          title: "Design & Development",
          description:
            "Create custom designs, develop the WordPress theme or Elementor build, and integrate all functionality.",
          icon: BsPalette2,
        },
        {
          title: "Content & Testing",
          description:
            "Load all content, run cross-browser/device testing, and perform speed and SEO checks before launch.",
          icon: Code,
        },
        {
          title: "Launch & Training",
          description:
            "Deploy to live hosting, submit to Google, and deliver a full training session to your team.",
          icon: Rocket,
        },
      ],
    },
    nextSteps: {
      title: "Start Your WordPress Project",
      description: "Your dream website is three steps away",
      steps: [
        {
          title: "Share Your Vision",
          description:
            "Tell us about your business, your design preferences, and the features you need in your website.",
        },
        {
          title: "We Design & Build",
          description:
            "We create your custom WordPress website and keep you involved at every stage of the process.",
        },
        {
          title: "Launch & Grow",
          description:
            "We go live, hand over the keys with full training, and you start growing your online presence.",
        },
      ],
      buttonText: "Start Your Website",
      buttonLink: "/contact",
    },
    ctaTitle: "Ready to Launch Your WordPress Website?",
    ctaButton: "Get a Free Quote",
    ctaLink: "/contact",
    ctaBg:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072",
  },
];
