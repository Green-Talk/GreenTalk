// Layout.tsx
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
        <p>This is from layout</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet /> {/* Renders the child route's component */}
      </main>
    </div>
  );
}
