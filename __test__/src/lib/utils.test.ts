import { describe, expect, it } from 'vitest';

import { cn } from '@/lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('should combine simple class names', () => {
      const result = cn('class1', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('should handle empty inputs', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('should handle single class name', () => {
      const result = cn('single-class');
      expect(result).toBe('single-class');
    });

    it('should handle undefined and null values', () => {
      const result = cn('class1', undefined, 'class2', null);
      expect(result).toBe('class1 class2');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const isDisabled = false;
      const result = cn('base', isActive && 'active', isDisabled && 'disabled');
      expect(result).toBe('base active');
    });

    it('should handle arrays of classes', () => {
      const result = cn(['class1', 'class2'], 'class3');
      expect(result).toBe('class1 class2 class3');
    });

    it('should handle objects with truthy/falsy values', () => {
      const result = cn({
        class1: true,
        class2: false,
        class3: 1,
        class4: 0,
        class5: 'truthy',
        class6: '',
      });
      expect(result).toBe('class1 class3 class5');
    });

    it('should merge conflicting Tailwind classes', () => {
      const result = cn('px-2', 'px-4');
      expect(result).toBe('px-4');
    });

    it('should merge conflicting background classes', () => {
      const result = cn('bg-red-500', 'bg-blue-500');
      expect(result).toBe('bg-blue-500');
    });

    it('should handle complex Tailwind class merging', () => {
      const result = cn('text-sm font-medium text-gray-900', 'text-lg text-blue-500');
      expect(result).toBe('font-medium text-lg text-blue-500');
    });

    it('should handle mixed input types', () => {
      const result = cn(
        'base',
        ['array-class1', 'array-class2'],
        { 'object-class': true, 'false-class': false },
        'final-class',
      );
      expect(result).toBe('base array-class1 array-class2 object-class final-class');
    });

    it('should handle responsive and variant classes', () => {
      const result = cn('w-4 h-4', 'sm:w-6 sm:h-6', 'lg:w-8 lg:h-8');
      expect(result).toBe('w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8');
    });

    it('should handle hover and state modifiers', () => {
      const result = cn('bg-gray-100 hover:bg-gray-200', 'focus:bg-gray-300 active:bg-gray-400');
      expect(result).toBe('bg-gray-100 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400');
    });

    it('should handle spacing conflicts properly', () => {
      const result = cn('p-2 px-4', 'p-3');
      expect(result).toBe('p-3');
    });

    it('should handle empty strings and whitespace', () => {
      const result = cn('class1', '', '  ', 'class2');
      expect(result).toBe('class1 class2');
    });
  });
});
