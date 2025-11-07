
import React from 'react';
import type { NavLink, Feature, Review, GalleryImage } from './types';

// Icons for features
const BookOpenIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const GlobeAltIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12h18M3 12a9 9 0 009 9m-9-9a9 9 0 019-9" />
  </svg>
);

const UserGroupIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#apply', label: 'Apply' },
];

export const FEATURES: Feature[] = [
  {
    icon: <BookOpenIcon className="h-10 w-10 text-blue-500" />,
    title: 'World-Class Curriculum',
    description: 'Our curriculum is designed by industry experts to provide you with the most relevant and up-to-date knowledge.',
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10 text-blue-500" />,
    title: 'Flexible Online Learning',
    description: 'Learn at your own pace, from anywhere in the world. Our platform is accessible 24/7 on any device.',
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-blue-500" />,
    title: 'Vibrant Community',
    description: 'Connect with fellow students and mentors in our active online community and collaborative projects.',
  },
];

export const REVIEWS: Review[] = [
  {
    quote: 'Nova Academy completely transformed my career path. The instructors are incredibly supportive and the hands-on projects were invaluable.',
    author: 'Sarah Johnson',
    role: 'Web Development Graduate',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: 'The flexible schedule allowed me to continue working full-time while pursuing my passion for data science. I can\'t recommend it enough!',
    author: 'Michael Chen',
    role: 'Data Science Graduate',
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: 'I was a complete beginner, but the structured curriculum and amazing community made learning to code feel accessible and fun.',
    author: 'Emily Rodriguez',
    role: 'UX/UI Design Graduate',
    avatarUrl: 'https://picsum.photos/id/1013/100/100',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/id/237/800/600', alt: 'Student collaborating on a project', aspect: 'aspect-[4/3]' },
  { id: 2, src: 'https://picsum.photos/id/106/600/800', alt: 'Online lecture in progress', aspect: 'aspect-[3/4]' },
  { id: 3, src: 'https://picsum.photos/id/433/800/600', alt: 'Student studying at a cafe', aspect: 'aspect-[4/3]' },
  { id: 4, src: 'https://picsum.photos/id/1/800/800', alt: 'A moment of inspiration', aspect: 'aspect-[1/1]' },
  { id: 5, src: 'https://picsum.photos/id/160/800/600', alt: 'Team meeting online', aspect: 'aspect-[4/3]' },
  { id: 6, src: 'https://picsum.photos/id/343/600/800', alt: 'Coding on a laptop', aspect: 'aspect-[3/4]' },
];
