const Footer = () => {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Designed & Built with ❤️ by Rashmi
        Phegade. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
