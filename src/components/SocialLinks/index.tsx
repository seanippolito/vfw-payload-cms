import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
    </div>
  );
};