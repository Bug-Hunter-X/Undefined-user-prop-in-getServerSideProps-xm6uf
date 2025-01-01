```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function MyComponent({ user }) {
  // ...
}

// This is the problem!
// If there is no user logged in, the user prop will be undefined.

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  return {
    props: {
      user: session?.user,
    },
  };
}
```