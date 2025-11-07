import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Review {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  aspect: string;
}