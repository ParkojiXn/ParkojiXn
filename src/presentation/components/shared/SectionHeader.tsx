import React from 'react';

export interface SectionHeaderProps {
  overline: string;
  title: string;
  description?: string;
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  title,
  description,
  badge,
}) => {
  return (
    <div className="border-b-2 border-[#0A0A0A] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-overline text-[#EF4444] font-bold">
            {overline.startsWith('//') ? overline : `// ${overline}`}
          </span>
          {badge && (
            <>
              <span className="text-[#A3A3A3]">•</span>
              <span className="text-[10px] font-mono font-bold bg-[#0A0A0A] text-[#FAFAFA] px-2 py-0.5">
                {badge}
              </span>
            </>
          )}
        </div>
        <h2 className="text-headline text-[#0A0A0A]">{title}</h2>
      </div>

      {description && (
        <p className="text-sm text-[#525252] max-w-md font-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
