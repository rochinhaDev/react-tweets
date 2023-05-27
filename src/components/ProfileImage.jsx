function ProfileImage(props) {
  console.log(props);
  return <img src={props.profile} className="profile" alt="profile" />;
}
export default ProfileImage;
