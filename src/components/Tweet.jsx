import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Action from "./Action";
function Tweet(props) {
  console.log(props.tweet);
  return (
    <div className="tweet">
      <ProfileImage profile={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">
              <User user={props.tweet.user.name} />
            </span>
          </span>
          <span className="timestamp">
            Nov 30, 2020 <Timestamp timestamp={props.tweet.timestamp} />
          </span>
        </div>

        <p className="message">
          <Message message={props.tweet.message} />
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
