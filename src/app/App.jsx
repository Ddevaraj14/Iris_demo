import { useEffect, useRef, useState } from 'react';
import { VerticalMenu } from './components/VerticalMenu';
import { AudioControl } from './components/AudioControl';
import { AudioIndicator } from './components/AudioIndicator';
import { IntroSection } from './components/sections/IntroSection';
import { ValuePropositionSection } from './components/sections/ValuePropositionSection';
import { FullAddressabilitySection } from './components/sections/FullAddressabilitySection';
import { AgnosticPlatformSection } from './components/sections/AgnosticPlatformSection';
import { CampaignManagementSection } from './components/sections/CampaignManagementSection';
import { YieldOptimizationSection } from './components/sections/YieldOptimizationSection';
import { AudienceIntelligenceSection } from './components/sections/AudienceIntelligenceSection';
import { PremiumProgrammaticSection } from './components/sections/PremiumProgrammaticSection';
import { FlexibleDeliverySection } from './components/sections/FlexibleDeliverySection';
import { AudioProvider, useAudio } from './contexts/AudioContext';

export const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'value-proposition', label: 'Value Proposition' },
  { id: 'full-addressability', label: 'Full Addressability' },
  { id: 'agnostic-platform', label: 'Agnostic platform' },
  { id: 'campaign-management', label: 'Streamlined Campaign Management' },
  { id: 'yield-optimization', label: 'Yield Optimization' },
  { id: 'audience-intelligence', label: 'Audience intelligence and forecasting' },
  { id: 'premium-programmatic', label: 'Premium Programmatic' },
  { id: 'flexible-delivery', label: 'Flexible AD delivery' },
];

function AppContent() {
  const [activeSection, setActiveSection] = useState('intro');
  const sectionsRef = useRef({});
  const containerRef = useRef(null);
  const isManualScrollRef = useRef(false);
  const { playAudio, stopAudio, onAudioEnd, removeAudioEndCallback, isMuted } = useAudio();

  // Auto-scroll to next section when audio ends
  useEffect(() => {
    const scrollToNextSection = () => {
      if (isMuted) return; // Don't auto-scroll if muted

      const currentIndex = sections.findIndex(s => s.id === activeSection);
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < sections.length) {
        const nextSectionId = sections[nextIndex].id;
        const element = sectionsRef.current[nextSectionId];
        
        if (element) {
          isManualScrollRef.current = true;
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          
          // Reset manual scroll flag after animation
          setTimeout(() => {
            isManualScrollRef.current = false;
          }, 3000);
        }
      }
    };

    onAudioEnd(scrollToNextSection);

    return () => {
      removeAudioEndCallback();
    };
  }, [activeSection, isMuted, onAudioEnd, removeAudioEndCallback]);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const newSectionId = entry.target.id;
          setActiveSection(newSectionId);
          
          // Stop previous audio and play new section's audio
          stopAudio();
          if (!isMuted) {
            // Small delay to ensure section is fully visible
            setTimeout(() => {
              playAudio(newSectionId);
            }, 300);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [playAudio, stopAudio, isMuted]);

  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId];
    if (element && containerRef.current) {
      isManualScrollRef.current = true;
      stopAudio(); // Stop current audio when manually navigating
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'  });
      
      // Reset manual scroll flag after animation
      setTimeout(() => {
        isManualScrollRef.current = false;
      }, 3000);
    }
  };

  return (
    <div ref={containerRef} className="bg-black text-white size-full overflow-y-auto overflow-x-hidden relative snap-y snap-mandatory scroll-smooth">
      {/* Audio Indicator */}
      <AudioIndicator />
      
      {/* Audio Control */}
      <AudioControl />

      {/* Vertical Menu */}
      <VerticalMenu 
        sections={sections} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Sections */}
      <section 
        id="intro" 
        ref={(el) => { if (el) sectionsRef.current['intro'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <IntroSection />
      </section>

      <section 
        id="value-proposition" 
        ref={(el) => { if (el) sectionsRef.current['value-proposition'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <ValuePropositionSection />
      </section>

      <section 
        id="full-addressability" 
        ref={(el) => { if (el) sectionsRef.current['full-addressability'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <FullAddressabilitySection />
      </section>

      <section 
        id="agnostic-platform" 
        ref={(el) => { if (el) sectionsRef.current['agnostic-platform'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <AgnosticPlatformSection />
      </section>

      <section 
        id="campaign-management" 
        ref={(el) => { if (el) sectionsRef.current['campaign-management'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <CampaignManagementSection />
      </section>

      <section 
        id="yield-optimization" 
        ref={(el) => { if (el) sectionsRef.current['yield-optimization'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <YieldOptimizationSection />
      </section>

      <section 
        id="audience-intelligence" 
        ref={(el) => { if (el) sectionsRef.current['audience-intelligence'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <AudienceIntelligenceSection />
      </section>

      <section 
        id="premium-programmatic" 
        ref={(el) => { if (el) sectionsRef.current['premium-programmatic'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <PremiumProgrammaticSection />
      </section>

      <section 
        id="flexible-delivery" 
        ref={(el) => { if (el) sectionsRef.current['flexible-delivery'] = el; }}
        className="w-screen h-screen snap-start snap-always relative"
      >
        <FlexibleDeliverySection />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}