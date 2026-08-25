/**
 * Browser Selector Component — Bonds Studio Master UI
 * Allows users to select which browser they're using for account login.
 * Supports Chrome, Firefox, Safari, Edge, Opera, and custom browser entries.
 */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Chrome, Flame, Globe } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type BrowserType = "chrome" | "firefox" | "safari" | "edge" | "opera" | "custom";
export interface BrowserInfo {
  type: BrowserType;
  name: string;
  profile?: string;
  identityId?: string;
}

const BROWSER_OPTIONS: Array<{ value: BrowserType; label: string; icon: React.ReactNode }> = [
  { value: "chrome",  label: "Google Chrome",    icon: <Chrome className="h-4 w-4" /> },
  { value: "firefox", label: "Mozilla Firefox",  icon: <Flame  className="h-4 w-4" /> },
  { value: "safari",  label: "Safari",           icon: <Globe  className="h-4 w-4" /> },
  { value: "edge",    label: "Microsoft Edge",   icon: <Globe  className="h-4 w-4" /> },
  { value: "opera",   label: "Opera",            icon: <Globe  className="h-4 w-4" /> },
  { value: "custom",  label: "Custom Browser",   icon: <Globe  className="h-4 w-4" /> },
];

interface BrowserSelectorProps {
  value: BrowserInfo;
  onChange: (browser: BrowserInfo) => void;
}

export function BrowserSelector({ value, onChange }: BrowserSelectorProps) {
  const [showCustom, setShowCustom] = useState(value.type === "custom");
  const [customName, setCustomName] = useState(value.type === "custom" ? value.name : "");
  const [profile, setProfile] = useState(value.profile || "");

  function handleBrowserChange(browserType: string) {
    const type = browserType as BrowserType;
    if (type === "custom") {
      setShowCustom(true);
      onChange({ type, name: customName || "Custom Browser", profile });
    } else {
      setShowCustom(false);
      const opt = BROWSER_OPTIONS.find((b) => b.value === type);
      onChange({ type, name: opt?.label || "Browser", profile });
    }
  }

  return (
    <div className="space-y-3">
      <Label className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#536057]">
        Browser for login
      </Label>
      <Select value={value.type} onValueChange={handleBrowserChange}>
        <SelectTrigger className="h-10 rounded-none border-[#17231e]/20 bg-[#fbf8f1]">
          <SelectValue placeholder="Select a browser" />
        </SelectTrigger>
        <SelectContent className="rounded-none border-[#17231e]/20 bg-[#f9f5ec]">
          {BROWSER_OPTIONS.map((browser) => (
            <SelectItem key={browser.value} value={browser.value} className="cursor-pointer">
              <div className="flex items-center gap-2">
                {browser.icon}
                <span>{browser.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {showCustom && (
        <div className="space-y-2 border-l-2 border-[#2c5b48] bg-[#e6ede6] px-3 py-2">
          <Label htmlFor="custom-browser-name" className="font-ledger text-[9px] font-bold uppercase tracking-[0.14em]">
            Browser name
          </Label>
          <Input
            id="custom-browser-name"
            value={customName}
            onChange={(e) => {
              setCustomName(e.target.value);
              if (value.type === "custom") onChange({ type: "custom", name: e.target.value || "Custom Browser", profile });
            }}
            placeholder="e.g., Brave, Vivaldi"
            className="mt-1 h-9 rounded-none border-[#17231e]/20 bg-[#fbf8f1] text-sm"
          />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="browser-profile" className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#536057]">
          Profile / Account name <span className="text-[#8a918c] font-normal">(optional)</span>
        </Label>
        <Input
          id="browser-profile"
          value={profile}
          onChange={(e) => {
            setProfile(e.target.value);
            onChange({ ...value, profile: e.target.value });
          }}
          placeholder="e.g., Work Profile, Personal"
          className="h-10 rounded-none border-[#17231e]/20 bg-[#fbf8f1]"
        />
        <p className="text-xs text-[#68756c]">Helps identify which browser profile this account is in</p>
      {value.identityId && (
        <div className="border border-[#17231e]/10 bg-[#f0ece3] px-3 py-2">
          <p className="font-ledger text-[9px] font-bold uppercase tracking-[0.14em] text-[#6a736b]">Unique browser identity</p>
          <p className="mt-1 break-all font-mono text-[9px] text-[#2c5b48]">{value.identityId}</p>
        </div>
      )}
      </div>
    </div>
  );
}
