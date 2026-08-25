/**
 * Browser Launch Button — Bonds Studio Master UI
 * Opens a platform URL in the selected browser and persists the session.
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { type BrowserInfo } from "./BrowserSelector";
import { cn } from "@/lib/utils";

interface BrowserLaunchButtonProps {
  platformId: string;
  platformName: string;
  platformUrl: string;
  browser: BrowserInfo;
  onLaunch?: () => void;
  className?: string;
}

export function BrowserLaunchButton({
  platformName,
  platformUrl,
  browser,
  onLaunch,
  className,
}: BrowserLaunchButtonProps) {
  const [launching, setLaunching] = useState(false);

  function handleLaunch() {
    setLaunching(true);
    const win = window.open(platformUrl, "_blank");
    if (!win) toast.error("Popup blocked. Please allow popups for this site.");
    else toast.success(`Opening ${platformName} in ${browser.name}`);
    onLaunch?.();
    setTimeout(() => setLaunching(false), 800);
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleLaunch}
      disabled={launching}
      className={cn(
        "h-10 rounded-none border-[#17231e]/20 bg-transparent text-[#2c5b48] hover:bg-[#e6ede6] hover:text-[#183e2d]",
        className,
      )}
    >
      {launching ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        <ExternalLink className="h-4 w-4" />
      )}
      Open Login
    </Button>
  );
}
