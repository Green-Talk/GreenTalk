// Layout.tsx
import { Outlet, Link } from 'react-router-dom';
import { envconfig } from './environment';

export default function Layout() {
  return (
    <div>
        <p>This is from layout</p>
          <nav>
              <Link to={`${envconfig.baseurl}`}>Home</Link> | <Link to={`${envconfig.baseurl}about`}>About</Link>
      </nav>
      <main>
        <Outlet /> {/* Renders the child route's component */}
      </main>
    </div>
  );
}
