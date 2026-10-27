import React from 'react';
import Hero from '@/components/home/Hero';
import ServiceGrid from '@/components/home/ServiceGrid';
import HowItWorks from '@/components/home/HowItWorks';
import ClosingBand from '@/components/home/ClosingBand';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceGrid />
      <HowItWorks />
      <ClosingBand />
    </div>
  );
}