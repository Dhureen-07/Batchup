import React from 'react';

export type ViewState = 'onboarding' | 'dashboard' | 'notes' | 'mentors' | 'career' | 'build' | 'prototype' | 'planner' | 'profile' | 'settings';

export interface NavItem {
  id: ViewState;
  icon: React.ElementType;
  label: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  tags: string[];
}

export interface NoteItem {
  id: string;
  title: string;
  code: string;
  rating: number;
  tags: string[];
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  text: string;
  timestamp: Date;
}
