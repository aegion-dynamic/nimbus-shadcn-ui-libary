// This file provides compatibility with Next.js
// It ensures all components are client-side only to avoid React Server Component conflicts

'use client';

/**
 * This is a dedicated entry point for Next.js applications
 * All components are exported with the 'use client' directive already applied
 * 
 * Components that use React Context:
 * - FormField/FormItem (form.tsx)
 * - ToggleGroup (toggle-group.tsx)
 * - Chart (chart.tsx)
 * - Carousel (carousel.tsx)
 * - FileUploader (file-upload.tsx)
 * - Sidebar (sidebar.tsx)
 * 
 * When using these components in a Next.js app, always import from '@/nimbus-shadcn/next'
 * to ensure proper client/server boundary handling
 */

// Re-export all components
export * from './index';
