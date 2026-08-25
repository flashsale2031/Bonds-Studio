import { useEffect, useState } from "react";

export function useDevMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(import.meta.env.DEV && window.localStorage.getItem("bonds-studio-dev-mode") === "true");
  }, []);

  return enabled;
}
