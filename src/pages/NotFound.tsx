import { Link } from "react-router-dom";
import { Kicker } from "../components/Editorial";

export default function NotFound() {
  return (
    <div className="read-max space-y-4">
      <Kicker>404</Kicker>
      <div className="text-[color:var(--fg)] text-xl font-semibold">Page not found.</div>
      <Link to="/" className="link text-[color:var(--accent)]">Back home</Link>
    </div>
  );
}
