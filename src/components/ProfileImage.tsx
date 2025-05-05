
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
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
        alt="Jaynarayan Gehlot"
        className="rounded-full w-full h-full object-cover relative z-10"
      />
      <span className="absolute -bottom-2 -right-2 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-portfolio-accent text-white text-xs">
        8.42
      </span>
    </div>
  );
};

export default ProfileImage;
