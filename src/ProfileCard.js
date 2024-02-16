import "./ProfileCard.css";

import Avatar from "./Avatar";
import UserProfile from "./UserProfile";

function ProfileCard({ user }) {
  const name = `${user.first_name} ${user.last_name}`;

  return (
    <section className="profile-card">
      <Avatar name={name} url={user.avatar} />
      <UserProfile name={name} email={user.email} />
    </section>
  );
}

export default ProfileCard;