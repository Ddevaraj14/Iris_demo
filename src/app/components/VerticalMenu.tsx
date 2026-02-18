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
                text-right text-xs font-['Source_Sans_Pro',sans-serif] tracking-[0.16px]
                transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? 'text-[#f8f8f8] font-semibold text-sm opacity-100' 
                  : 'text-[#5e5e5e] opacity-0 group-hover:opacity-100'
                }
              `}
            >
              {section.label}
            </button>

            {/* Dot and Line Container */}
            <div className="flex flex-col items-center">
              {/* Dot */}
              <button
                onClick={() => onSectionClick(section.id)}
                className={`
                  rounded-full transition-all duration-300
                  ${isActive 
                    ? 'size-4 bg-[#e2e8f2] ring-4 ring-[#e2e8f2]/30' 
                    : 'size-3 bg-[#5e5e5e] hover:bg-[#8e8e8e]'
                  }
                `}
                aria-label={`Go to ${section.label}`}
              />

              {/* Connector Line */}
              {index < sections.length - 1 && (
                <div className="relative w-0.5 h-16 bg-[#3e3e3e] rounded-full overflow-hidden">
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