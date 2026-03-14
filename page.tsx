export default function Home() {
  return (
    <main
      style={
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: 1.5,
      }
    >
      <div
        style={
          display: "inline-block",
          background: "#e0f7ff",
          color: "#0f172a",
          padding: "8px 14px",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "14px",
        }
      >
        A calmer alternative to toxic social media
      </div>

      <h1 style={ fontSize: "44px", marginTop: "20px", marginBottom: "8px" }>
        TheGoodViews
      </h1>

      <h2 style={ fontSize: "28px", marginTop: 0, color: "#0369a1" }>
        Connection without conflict
      </h2>

      <p style={ fontSize: "18px", color: "#334155" }>
        TheGoodViews is a positive-only social platform built for people tired of toxic feeds.
        Share everyday wins, encouragement, and uplifting moments.
      </p>

      <p style={ fontSize: "18px", color: "#334155" }>
        No negativity. No profanity. No politics. Just a calmer place to connect.
      </p>

      <a
        href="https://thegoodviews-com.kit.com/50e4246852"
        style={
          display: "inline-block",
          marginTop: "20px",
          padding: "15px 25px",
          background: "#3cc6ff",
          color: "#ffffff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 700,
        }
      >
        Join Early Access
      </a>
    </main>
  );
}
