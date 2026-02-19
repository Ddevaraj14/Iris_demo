interface VerticalMenuProps {
  sections: Array<{ id: string; label: string }>;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function VerticalMenu({ sections, activeSection, onSectionClick }: VerticalMenuProps) {
  const activeIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        const isPassed = index < activeIndex;
        const isCurrent = index === activeIndex;
        
        return (
          <div key={section.id} className="flex items-center justify-end gap-3 group">
            {/* Label */}
            <button
              onClick={() => onSectionClick(section.id)}
              className={`
                relative -translate-y-8 text-right text-xs font-['Source_Sans_Pro',sans-serif] tracking-[0.16px]
                transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? 'text-[#f8f8f8] opacity-0 font-semibold text-sm hover:opacity-100' 
                  : 'text-[#5e5e5e] opacity-0 group-hover:opacity-100'
                }
              `}
            >
              {section.label}
            </button>

            {/* Dot and Line Container */}
            <div className="flex flex-col items-center">
              {/* Outer Ring (centered) */}
            <div className={`
                relative w-3 h-3 rounded-full border-2 border-white/20 
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-0
                opacity-70
                ${isActive ? 'w-4 h-4' : 'w-3 h-3'}
                transition-all duration-300
              `} />

              {/* Dot */}
              <button
                onClick={() => onSectionClick(section.id)}
                className={`
                  relative rounded-full transition-all duration-300 top-1/2 -translate-y-3
                  ${isActive 
                    ?'size-1.5 bg-[#e2e8f2] shadow-[0_0_8px_rgba(226,232,242,0.5)]' 
                    : 'size-1 hover:bg-[#8e8e8e] shadow-[0_0_4px_rgba(94,94,94,0.3)]'
                  }
                `}
                aria-label={`Go to ${section.label}`}
              />

              {/* Connector Line */}
              {index < sections.length - 1 && (
                <div className="relative translate-y-1 w-0.5 h-16 bg-[#3e3e3e] rounded-full overflow-hidden">
                  <div 
                    className={`
                      absolute top-0 left-0 w-full transition-all duration-700 ease-out bg-[#e2e8f2] rounded-full
                    `}
                    style={{
                      height: isPassed || isCurrent ? '100%' : '0%',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}