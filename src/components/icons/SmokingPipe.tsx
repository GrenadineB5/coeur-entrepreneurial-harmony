import { SVGProps } from 'react';

export const SmokingPipe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Pipe bowl */}
    <path d="M6 12C6 9.79086 7.79086 8 10 8H12C14.2091 8 16 9.79086 16 12" />
    {/* Pipe stem */}
    <path d="M16 12H22" />
    {/* Smoke curls */}
    <path d="M4 8C4 8 5 7 5 6" />
    <path d="M2 10C2 10 3 9 3 8" />
    <path d="M6 6C6 6 7 5 7 4" />
  </svg>
);