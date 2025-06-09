
import React from 'react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/lovable-uploads/955d7a62-8efa-4c36-8ac1-bc7280a18089.png"
        alt="Jaynarayan Gehlot"
        className="rounded-full w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
