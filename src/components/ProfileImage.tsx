
import React from 'react';

interface ProfileImageProps {
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/lovable-uploads/c37825dd-1961-41ad-8f4c-775b0c204d45.png"
        alt="Jaynarayan Gehlot"
        className="rounded-full w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
