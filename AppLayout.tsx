/**
 * AppLayout — Bonds Studio Master UI
 * Verdant Studio design: dark forest sidebar + parchment main area.
 * Every nav item routes to a real page. Header menu fully connected.
 */
import React from "react";
import { Link, useLocation } from "wouter";
import {
  LayoutDashboard, WalletCards, LineChart, ClipboardList,
  DollarSign, Settings, Zap, Mic, User, Menu, X, ChevronRight,
  ShieldCheck, Globe2, Phone, BatteryCharging,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DevElementsPanel } from "./DevElementsPanel";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Ledger",    href: "/" },
  { icon: WalletCards,     label: "Accounts",  href: "/accounts" },
  { icon: LineChart,       label: "Trends",    href: "/trends" },
  { icon: ClipboardList,   label: "Notes",     href: "/notes" },
  { icon: DollarSign,      label: "Monetize",  href: "/monetize" },
];

function NavItem({
  icon: Icon, label, href, active,
}: { icon: React.ElementType; label: string; href: string; active?: boolean }) {
  return (
    <Link href={href}>
      <span
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer select-none",
          active
            ? "bg-[#2c5b48] text-white font-semibold"
            : "text-[#c8d5c9] hover:bg-white/8 hover:text-white",
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {label}
      </span>
    </Link>
  );
}

function BrandLockup({ compact }: { compact?: boolean }) {
  if (compact) {
    return (
      <Link href="/">
        <span className="flex items-center gap-2 cursor-pointer">
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center bg-[#2c5b48] relative overflow-hidden">
            <span className="font-ledger text-sm font-bold text-[#c9a84c] leading-none select-none">B</span>
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c9a84c]/60" />
          </span>
          <span className="font-display text-lg text-[#19211e]">Bonds Studio</span>
        </span>
      </Link>
    );
  }
  return (
    <Link href="/">
      <span className="flex items-center gap-3 cursor-pointer">
        <div className="grid h-9 w-9 place-items-center bg-[#2c5b48] relative overflow-hidden">
          {/* Bracket-B brand motif */}
          <span className="font-ledger text-base font-bold text-[#c9a84c] leading-none select-none">B</span>
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#c9a84c]/60" />
        </div>
        <div>
          <p className="font-display text-base leading-none text-white">Bonds Studio</p>
          <p className="font-ledger mt-0.5 text-[9px] uppercase tracking-[0.18em] text-[#7a9a82]">Master Workspace</p>
        </div>
      </span>
    </Link>
  );
}

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function AppLayout({ children, title, subtitle }: AppLayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? location === "/" || location === "/ledger" : location.startsWith(href);

  return (
    <div className="min-h-screen bg-[#f4f0e7] text-[#19211e]">
      {/* Paper grain overlay */}
      <div className="paper-grain pointer-events-none fixed inset-0 z-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen">
        {/* ── Sidebar (desktop) ── */}
        <aside
          className="hidden w-[220px] shrink-0 flex-col lg:flex"
          style={{ background: "#1a2820" }}
        >
          <div className="px-5 py-6">
            <BrandLockup />
          </div>
          {/* Gold accent rule below brand */}
          <div className="mx-5 flex gap-0.5 mb-2">
            <div className="h-[2px] flex-1 bg-[#c9a84c]/40" />
            <div className="h-[2px] w-3 bg-[#2c5b48]" />
          </div>

          <nav className="mt-6 flex-1 space-y-0.5 px-3" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} {...item} active={isActive(item.href)} />
            ))}
          </nav>

          <div className="border-t border-white/8 px-3 py-4 space-y-0.5">
            <Link href="/ai-mode">
              <span className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer",
                isActive("/ai-mode") ? "bg-[#2c5b48] text-white font-semibold" : "text-[#c8d5c9] hover:bg-white/8 hover:text-white",
              )}>
                <Zap className="h-4 w-4 shrink-0" />
                AI Mode
              </span>
            </Link>
            <Link href="/voice-control">
              <span className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer",
                isActive("/voice-control") ? "bg-[#2c5b48] text-white font-semibold" : "text-[#c8d5c9] hover:bg-white/8 hover:text-white",
              )}>
                <Mic className="h-4 w-4 shrink-0" />
                Voice Control
              </span>
            </Link>
            <Link href="/phone">
              <span className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer",
                isActive("/phone") ? "bg-[#2c5b48] text-white font-semibold" : "text-[#c8d5c9] hover:bg-white/8 hover:text-white",
              )}>
                <Phone className="h-4 w-4 shrink-0" />
                Phone
              </span>
            </Link>
            <Link href="/settings">
              <span className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer",
                isActive("/settings") ? "bg-[#2c5b48] text-white font-semibold" : "text-[#c8d5c9] hover:bg-white/8 hover:text-white",
              )}>
                <Settings className="h-4 w-4 shrink-0" />
                Settings
              </span>
            </Link>
          </div>

          <div className="border-t border-white/8 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center bg-[#2c5b48] font-ledger text-[10px] font-bold text-white">
                BS
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">Local workspace</p>
                <p className="mt-0.5 text-xs text-[#7a9a82]">Stored in this browser</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ── Mobile sidebar overlay ── */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
            <aside className="relative w-[260px] flex flex-col h-full" style={{ background: "#1a2820" }}>
              <div className="flex items-center justify-between px-5 py-5">
                <BrandLockup />
                <button onClick={() => setMobileOpen(false)} className="text-[#c8d5c9] hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 space-y-0.5 px-3">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href} onClick={() => setMobileOpen(false)}>
                    <NavItem {...item} active={isActive(item.href)} />
                  </div>
                ))}
              </nav>
              <div className="border-t border-white/8 px-3 py-4 space-y-0.5">
                {[
                  { icon: Zap,      label: "AI Mode",       href: "/ai-mode" },
                  { icon: Mic,      label: "Voice Control", href: "/voice-control" },
                  { icon: Phone,    label: "Phone",         href: "/phone" },
                  { icon: Settings, label: "Settings",      href: "/settings" },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={href} onClick={() => setMobileOpen(false)}>
                    <Link href={href}>
                      <span className={cn(
                        "flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 cursor-pointer",
                        isActive(href) ? "bg-[#2c5b48] text-white font-semibold" : "text-[#c8d5c9] hover:bg-white/8 hover:text-white",
                      )}>
                        <Icon className="h-4 w-4 shrink-0" />
                        {label}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* ── Main content area ── */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#17231e]/10 bg-[#f4f0e7]/90 px-5 py-3.5 backdrop-blur-xl md:px-8 lg:px-10">
            {/* Mobile hamburger */}
            <button
              className="grid h-9 w-9 place-items-center text-[#19211e] lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop breadcrumb */}
            <div className="hidden lg:block">
              <p className="font-ledger text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c756e]">
                Bonds Studio
                {title && (
                  <>
                    <ChevronRight className="inline h-3 w-3 mx-1" />
                    {title}
                  </>
                )}
              </p>
              {subtitle && <p className="mt-0.5 text-sm text-[#536058]">{subtitle}</p>}
            </div>

            {/* Mobile logo */}
            <div className="lg:hidden">
              <BrandLockup compact />
            </div>

            {/* Header actions */}
            <div className="flex items-center gap-2">
              <Link href="/accounts">
                <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#2c5b48] border border-[#2c5b48]/30 hover:bg-[#2c5b48]/8 transition-colors cursor-pointer">
                  <User className="h-3.5 w-3.5" />
                  Account
                </span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="grid h-9 w-9 place-items-center border border-[#17231e]/20 bg-[#e8e1d5] text-[#19211e] transition hover:bg-[#ddd6c8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5b48]"
                    aria-label="Open menu"
                  >
                    <Menu className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-none border-[#17231e]/20 bg-[#f4f0e7]">
                  <DropdownMenuLabel className="font-ledger text-[10px] uppercase tracking-[0.15em] text-[#6c756e]">Workspace</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#17231e]/10" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/accounts"><span className="flex items-center gap-3 w-full"><User className="h-4 w-4" />Account</span></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/domains"><span className="flex items-center gap-3 w-full"><Globe2 className="h-4 w-4 text-[#2c5b48]" />Domains</span></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/ai-mode"><span className="flex items-center gap-3 w-full"><Zap className="h-4 w-4" />AI Mode</span></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/voice-control"><span className="flex items-center gap-3 w-full"><Mic className="h-4 w-4" />Voice Control</span></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/phone"><span className="flex items-center gap-3 w-full"><Phone className="h-4 w-4 text-[#2c5b48]" />Phone</span></Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#17231e]/10" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/monetize"><span className="flex items-center gap-3 w-full"><DollarSign className="h-4 w-4 text-[#2c5b48]" /><span className="font-semibold">Monetize</span></span></Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#17231e]/10" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/settings"><span className="flex items-center gap-3 w-full"><Settings className="h-4 w-4" />System Settings</span></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer focus:bg-[#e8e1d5]">
                      <Link href="/settings/battery"><span className="ml-7 flex items-center gap-3 w-full text-[#2c5b48]"><BatteryCharging className="h-4 w-4" />Battery</span></Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10 page-enter">
            {children}
          </main>
        </div>
      </div>
      <DevElementsPanel />
    </div>
  );
}
