
import React from 'react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-portfolio-accent rounded-full blur-md opacity-20 animate-pulse-slow"></div>
      <div className="absolute inset-0 border-2 border-portfolio-accent/30 rounded-full"></div>
      <img
        src="/lovable-uploads/10ff88d3-c9a6-40de-b1f2-22a107054902.png"
        alt="Jaynarayan Gehlot"
        className="rounded-full w-full h-full object-cover relative z-10"
      />
    </div>
  );
};

export default ProfileImage;
