import React from "react";

import ProfileHeader from "../components/profile_header";
import ProfileContent from "../components/profile_content";
import ProfileImage from "../components/profile_image";

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileImage />
      <ProfileContent />
    </div>
  );
}
