const Profile = ({ user }) => (
  <div className="form-container">
    <p>{user ? user.user_metadata.full_name : 'No name'}</p>
  </div>
);
export default Profile;
