
import React from 'react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/lovable-uploads/91f3ccb5-2e0b-4abd-a747-58e1a1ea0ac8.png"
        alt="Jaynarayan Gehlot"
        className="rounded-full w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
