/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Zap, 
  User, 
  Star, 
  ShieldCheck, 
  Truck, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

const TestimonialCard = ({ quote, author, factor }: { quote: string, author: string, factor?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
  >
    {factor && (
      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
        {factor}
      </span>
    )}
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-zinc-700 italic mb-4 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
        <User className="w-4 h-4 text-emerald-700" />
      </div>
      <span className="font-semibold text-zinc-900">— {author}</span>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Sell My Car For Cash NJ</span>
          </div>
          <a 
            href="tel:2015009917" 
            className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(201) 500-9917</span>
          </a>
        </div>
      </header>

      {/* 1. Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              Englewood's Local Choice
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Your Car is Worth <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">More</span> in Englewood.
            </h1>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm mb-8 max-w-2xl">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                Get the "Eli Guarantee"
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                The price we quote is the cash you get. No haggling. No fees. Just local service you can trust.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:2015009917"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-5 h-5 fill-white" />
                CALL (201) 500-9917
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Local Authority Section */}
      <section className="bg-white py-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">Englewood’s Own Car Buyers</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Located at 151 E Palisade Ave, we aren't a national app or a middleman.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-50 border border-black/5 hover:border-emerald-200 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Until 10 PM</h3>
              <p className="text-zinc-600 leading-relaxed">
                We work around your schedule. Whether it's early morning or late evening, we're ready when you are.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-50 border border-black/5 hover:border-emerald-200 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Same-Day Pickup</h3>
              <p className="text-zinc-600 leading-relaxed">
                From Jersey City to Englewood, we’re there in hours. No waiting days for a tow truck that never shows.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-50 border border-black/5 hover:border-emerald-200 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Payment</h3>
              <p className="text-zinc-600 leading-relaxed">
                Cash or check on the spot before we tow. We serve Bergen County with the speed and respect you expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Voice of the Customer Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">We don't claim to be the best.</h2>
              <p className="text-emerald-600 text-2xl font-bold italic">Our customers do.</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span className="font-bold">5/5 Based on 200+ Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              factor="The Integrity Factor"
              quote="Great service the price they give you is the price you get!!! Honest people. No change of price like others do for their advantage."
              author="Feliz Antonio"
            />
            <TestimonialCard 
              factor="The Speed Factor"
              quote="I live in Jersey City... they gave me a time between 8 and 12 and he was here before 12. Best service ever."
              author="Jose Egas"
            />
            <TestimonialCard 
              factor="The Eli & Tony Personal Touch"
              quote="Everything was quick. Tony was very nice!"
              author="Minji Kim"
            />
            <TestimonialCard 
              factor="The Eli & Tony Personal Touch"
              quote="Eli made the selling process so easy... I would definitely recommend!"
              author="Lisa B."
            />
          </div>
        </div>
      </section>

      {/* 4. Why We Are Different (The Comparison) */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">Why We Are Different</h2>
            <p className="text-zinc-500">See how we stack up against the big national apps.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 font-bold bg-emerald-600">Sell My Car For Cash NJ</th>
                  <th className="p-6 font-bold">The Big National Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr>
                  <td className="p-6 font-bold text-zinc-500">Offer Integrity</td>
                  <td className="p-6 font-bold text-emerald-700 bg-emerald-50/50">Guaranteed. We keep our word.</td>
                  <td className="p-6 text-zinc-600">Often drops after "inspection."</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-zinc-500">Speed</td>
                  <td className="p-6 font-bold text-emerald-700 bg-emerald-50/50">Same-day service in NJ.</td>
                  <td className="p-6 text-zinc-600">3–7 days for pickup.</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-zinc-500">Support</td>
                  <td className="p-6 font-bold text-emerald-700 bg-emerald-50/50">Speak directly to Eli or Tony.</td>
                  <td className="p-6 text-zinc-600">Wait on hold for a call center.</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-zinc-500">Towing</td>
                  <td className="p-6 font-bold text-emerald-700 bg-emerald-50/50">Always $0.</td>
                  <td className="p-6 text-zinc-600">Often hidden in the fine print.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Footer (The Closer) */}
      <footer className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-emerald-600 p-1.5 rounded-lg">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight">Sell My Car For Cash New Jersey</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">151 E Palisade Ave APT E6</p>
                    <p className="text-zinc-400">Englewood, NJ 07631</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-500 shrink-0" />
                  <a href="tel:2015009917" className="font-bold text-2xl hover:text-emerald-400 transition-colors">
                    (201) 500-9917
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-bold">Open Daily</p>
                    <p className="text-zinc-400">8:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Ready to sell your car?</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Don't settle for national app prices. Get the local Englewood advantage and the Eli Guarantee today.
              </p>
              <a 
                href="tel:2015009917"
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                CALL US NOW
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Sell My Car For Cash NJ. All rights reserved. Local service for Bergen County and beyond.
          </div>
        </div>
      </footer>
    </div>
  );
}
