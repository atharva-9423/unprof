/**
 * ConnectButton
 * Renders a link to the user's LinkedIn profile.
 */
function ConnectButton() {
  return (
    <a
      href="https://www.linkedin.com/in/atharva-phatangare"
      target="_blank"
      rel="noopener noreferrer"
      className="connect-btn"
      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      Connect
    </a>
  );
}

export default ConnectButton;