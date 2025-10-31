"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, CheckCircle, Grid3X3, HelpCircle, Mail, MessageSquare, Shield, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="SmokeSelect"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Smoking Experience"
          description="Discover our carefully curated selection of high-quality tobacco products, crafted for discerning smokers who appreciate excellence."
          tag="Premium Quality"
          tagIcon={Star}
          buttons={[
            { text: "Browse Products", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/31009957/pexels-photo-31009957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium smoking products collection"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Products"
          description="Explore our premium selection of smoking products"
          tag="Best Sellers"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              name: "Classic Gold Premium",
              price: "$12.99",
              imageSrc: "https://images.pexels.com/photos/10121235/pexels-photo-10121235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic Gold Premium cigarettes",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Silver Elite Collection",
              price: "$15.99",
              imageSrc: "https://images.pexels.com/photos/6316740/pexels-photo-6316740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Silver Elite Collection cigarettes",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Platinum Reserve",
              price: "$18.99",
              imageSrc: "https://images.pexels.com/photos/9267861/pexels-photo-9267861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Platinum Reserve cigarettes",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose SmokeSelect"
          description="Discover what makes our products stand out from the competition"
          tag="Quality Promise"
          tagIcon={Shield}
          features={[
            {
              title: "Premium Quality",
              description: "Only the finest tobacco leaves, carefully selected and processed to ensure exceptional quality and taste",
              icon: Award,
              button: { text: "Learn More", href: "about" }
            },
            {
              title: "Wide Selection",
              description: "From classic blends to modern varieties, find the perfect match for your smoking preferences",
              icon: Grid3X3,
              button: { text: "View Products", href: "products" }
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="For over two decades, we've been committed to providing smokers with the highest quality tobacco products and exceptional service."
          tag="About Us"
          tagIcon={Users}
          bulletPoints={[
            {
              title: "Established Excellence",
              description: "Over 20 years of experience in the tobacco industry",
              icon: Calendar
            },
            {
              title: "Quality Assurance",
              description: "Rigorous quality control ensures every product meets our high standards",
              icon: CheckCircle
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3975062/pexels-photo-3975062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Tobacco manufacturing process"
          imagePosition="right"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from satisfied smokers who trust our products"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Thompson",
              role: "Regular Customer",
              company: "Tobacco Enthusiast",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Thompson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Premium Client",
              company: "Quality Seeker",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Loyal Customer",
              company: "Connoisseur",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Chen"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              role: "Satisfied Buyer",
              company: "Regular Smoker",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes your products premium quality?",
              content: "We source only the finest tobacco leaves and use traditional processing methods to ensure exceptional quality and taste in every product."
            },
            {
              id: "2",
              title: "Do you offer different strength options?",
              content: "Yes, we offer a variety of strength options from mild to full-bodied to suit different preferences and smoking experiences."
            },
            {
              id: "3",
              title: "How do you ensure product freshness?",
              content: "Our products are stored in climate-controlled environments and packaged using advanced sealing techniques to maintain optimal freshness."
            },
            {
              id: "4",
              title: "What is your return policy?",
              content: "We offer a satisfaction guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated"
          description="Subscribe to receive the latest news about our products, special offers, and smoking industry updates."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing communications. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SmokeSelect"
          columns={[
            {
              items: [
                { label: "Products", href: "products" },
                { label: "Features", href: "features" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonials" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}