
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
        src="/lovable-uploads/bcc4ed5a-a7f0-4c6a-9f23-d9fdb0cf2ef2.png"
        alt="Jaynarayan Gehlot"
        className="rounded-full w-full h-full object-cover object-center relative z-10"
      />
    </div>
  );
};

export default ProfileImage;
