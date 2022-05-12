import type { NextPage } from 'next'
import * as React from 'react'
import { useRouter } from 'next/router';

const Push: NextPage = () => {
  const [remaining, countdown] = React.useReducer(n => n - 1, 3);
  const router = useRouter();
  const dest = useDestQuery();

  React.useEffect(() => {
    const intervalId = setInterval(() => countdown(), 1000);
    return () => clearInterval(intervalId);
  }, [dest, router, countdown]);

  if (remaining === 0) {
    router.push(dest);
    return null;
  }

  return (
    <main>
      <h1>
        You&apos;ll be automatically redirected to `{dest}` in {remaining} second{remaining > 1 ? 's' : ''}.
      </h1>
    </main>
  )
}

function useDestQuery() {
  const { query } = useRouter();
  const { dest } = query;
  if (Array.isArray(dest)) {
    return dest.length ? dest[0] : '/';
  }
  return dest ?? '/';
}

export default Push;
