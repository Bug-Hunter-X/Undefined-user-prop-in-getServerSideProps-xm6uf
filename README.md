# Next.js getServerSideProps undefined user prop

This repository demonstrates a common error encountered when using `getServerSideProps` in Next.js with the `next-auth` package. The issue arises when the user prop is undefined because the user is not logged in. This causes errors in components that rely on the user prop.

## Problem

The `getServerSideProps` function fetches the user session. However, if there is no logged-in user, the `user` prop passed to the component will be undefined. This will cause errors if the component tries to access properties of an undefined object, such as `user.name`.

## Solution

To fix this issue, the component must first check if the user prop is defined before attempting to access its properties. This can be done using optional chaining (`?.`) or nullish coalescing (`??`).

## How to reproduce

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Try to access a page that uses `getServerSideProps`.
5. Observe the error if no user is logged in.
6. Apply the solution and observe the effect.
