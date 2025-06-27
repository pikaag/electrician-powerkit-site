export default function PowerKitSite() {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Electrician PowerKit</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
        Download your free electrician template kit.
      </p>
      <a
        href="/PowerKit.pdf"
        download
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "1rem 2rem",
          backgroundColor: "#3b82f6",
          color: "white",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Download Now
      </a>
    </div>
  );
}
