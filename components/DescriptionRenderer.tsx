import React from 'react';

interface DescriptionRendererProps {
  description: string | string[];
  className?: string;
}

export function DescriptionRenderer({ description, className = '' }: DescriptionRendererProps) {
  if (typeof description === 'string') {
    return (
      <p className={`mb-4 mt-2 text-neutral-700 dark:text-neutral-400  ${className}`}>
        {description}
      </p>
    );
  }

  if (Array.isArray(description)) {
    return (
      <div className={`mb-4 mt-2  ${className}`}>
        <ul className="list-disc pl-5 space-y-2">
          {description.map((point, index) => (
            <li 
              key={index} 
              className="text-neutral-700 dark:text-neutral-400 leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
} 