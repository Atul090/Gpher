import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.youtube.com/hypeExchange">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.instagram.com/codethenis">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.twitter.com/codethenics">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;