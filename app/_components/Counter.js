"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There is {users.length} users.</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
