function User(props) {
  console.log(props);
  return (
    <div>
      {props.user}
      {props.user.handle};
    </div>
  );
}
export default User;
