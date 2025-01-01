```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default function MyComponent({ user }) {
  // Check if the user prop is defined before accessing its properties
  const userName = user?.name ?? 'Guest';

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      {/* ... */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  return {
    props: {
      user: session?.user,
    },
  };
}
```