"use client";

import { useState } from "react";
import { streamComponent } from "./actions";

export default function Page() {
  const [component, setComponent] = useState<React.ReactNode>();

  return (
    <div>
      <button
        onClick={async () => {
          const comp = await streamComponent();
          setComponent(comp);
        }}
      >
        Stream Component
      </button>
      <div>{component}</div>
    </div>
  );
}
