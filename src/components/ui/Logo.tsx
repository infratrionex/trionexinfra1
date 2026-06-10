import { cn } from "../../lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      className={cn("w-10 h-10", className)} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Structural Arc */}
      <path 
        d="M 60 10 A 50 50 0 1 0 80 100" 
        stroke="#1e293b" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
      
      {/* Crane Jib */}
      <path d="M 50 25 L 105 15 L 105 18 L 62 28 Z" fill="#1e293b" />
      
      {/* Crane Tie */}
      <path d="M 60 10 L 105 15" stroke="#1e293b" strokeWidth="1.5" />
      
      {/* Crane Hook */}
      <path d="M 90 17 L 90 40" stroke="#1e293b" strokeWidth="1.5" />
      <path d="M 88 40 L 92 40 L 90 44 Z" fill="#1e293b" />
      
      {/* Building 1 (Left - Dark) */}
      <path d="M 36 55 L 48 45 L 48 98 L 36 98 Z" fill="#1e293b" />
      
      {/* Building 2 (Center - Gold) */}
      <path d="M 48 35 L 66 25 L 66 98 L 48 98 Z" fill="#f59e0b" />
      
      {/* Building 3 (Right - Dark) */}
      <path d="M 66 60 L 80 50 L 80 98 L 66 98 Z" fill="#1e293b" />
      
      {/* Tree */}
      <circle cx="90" cy="78" r="6" fill="#1e293b" />
      <circle cx="86" cy="82" r="5" fill="#1e293b" />
      <circle cx="94" cy="82" r="5" fill="#1e293b" />
      <rect x="88.5" y="86" width="3" height="12" fill="#1e293b" />
      
      {/* Ground */}
      <path d="M 30 98 L 100 98" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
