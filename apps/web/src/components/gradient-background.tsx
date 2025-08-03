"use client";

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AtmosphericGradient({ children, className = "" }: GradientBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Base dark background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        }}
      />
      
      {/* Salmon light from bottom right */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(250, 128, 114, 0.4) 0%, rgba(250, 128, 114, 0.2) 30%, rgba(250, 128, 114, 0.1) 60%, transparent 80%)',
        }}
      />
      
      {/* Dark curved shape */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
          clipPath: 'polygon(0 100%, 100% 100%, 100% 60%, 80% 50%, 60% 45%, 40% 45%, 20% 50%, 0 60%)',
        }}
      />
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function ComplementaryGradient({ children, className = "" }: GradientBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #533483 0%, #0f3460 25%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%)',
        }}
      />
      
      {/* Top left salmon glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(250, 128, 114, 0.3) 0%, rgba(250, 128, 114, 0.1) 40%, transparent 70%)',
        }}
      />
      
      {/* Bottom right dark accent */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 80%)',
        }}
      />
      
      {/* Subtle grain */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 