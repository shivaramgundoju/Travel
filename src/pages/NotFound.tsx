import { usePageMeta } from "../lib/hooks";
import { Button } from "../components/Button";

export function NotFound() {
  usePageMeta("Page Not Found | Yatraa", "The page you're looking for has wandered off — let's get you back to exploring India.");

  return (
    <section className="notfound">
      <p className="notfound-code">404</p>
      <h1 className="notfound-title">This trail doesn't exist… yet.</h1>
      <p className="text-size-medium" style={{ color: "rgba(255,255,255,.6)", maxWidth: 420 }}>
        The page you're after has gone exploring without us. Let's get you back to the places that do exist —
        and they're beautiful.
      </p>
      <div style={{ display: "flex", gap: "var(--space-s)", flexWrap: "wrap", justifyContent: "center" }}>
        <Button to="/" variant="primary" stagger>
          Back to Home
        </Button>
        <Button to="/destinations" variant="outline">
          Explore Destinations
        </Button>
      </div>
    </section>
  );
}