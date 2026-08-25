// @vitest-environment jsdom
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

class ResizeObserverStub { observe() {} unobserve() {} disconnect() {} }
Object.defineProperty(globalThis, "ResizeObserver", { value: ResizeObserverStub, configurable: true });
Object.defineProperty(window, "matchMedia", { value: () => ({ matches: false, media: "", onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } }), configurable: true });

vi.mock("@/components/AppLayout", () => ({ AppLayout: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }));
vi.mock("../client/src/pages/Home", () => ({ default: () => <div data-testid="mock-home" /> }));
vi.mock("../client/src/pages/DomainsPage", () => ({ default: () => <div data-testid="mock-domains" /> }));
vi.mock("../client/src/pages/AccountsPage", () => ({ default: () => <div data-testid="mock-accounts" /> }));
vi.mock("../client/src/pages/TrendsPage", () => ({ default: () => <div data-testid="mock-trends" /> }));
vi.mock("../client/src/pages/NotesPage", () => ({ default: () => <div data-testid="mock-notes" /> }));
vi.mock("../client/src/pages/MonetizePage", () => ({ default: () => <div data-testid="mock-monetize" /> }));
vi.mock("../client/src/pages/AiModePage", () => ({ default: () => <div data-testid="mock-ai-mode" /> }));
vi.mock("../client/src/pages/VoiceControlPage", () => ({ default: () => <div data-testid="mock-voice-control" /> }));
vi.mock("../client/src/pages/PhonePage", () => ({ default: () => <div data-testid="mock-phone" /> }));
vi.mock("../client/src/pages/NotFound", () => ({ default: () => <div data-testid="mock-not-found" /> }));

import BatteryPage from "../client/src/pages/BatteryPage";
import SettingsPage from "../client/src/pages/SettingsPage";
import App from "../client/src/App";

afterEach(() => { cleanup(); localStorage.clear(); });

describe("Battery UI", () => {
  it("navigates from System Settings through the real app router to Battery", () => {
    window.history.pushState({}, "", "/settings");
    render(<App />);
    fireEvent.click(screen.getByRole("link", { name: "Open" }));
    expect(window.location.pathname).toBe("/settings/battery");
    expect(screen.getByText(/photovoltaic charging model/i)).not.toBeNull();
  });

  it("opens Battery from the real System Settings link destination", () => {
    render(<SettingsPage />);
    const batteryLink = screen.getByRole("link", { name: "Open" });
    expect(batteryLink.getAttribute("href")).toBe("/settings/battery");
    fireEvent.click(batteryLink);
    expect(batteryLink.getAttribute("href")).toBe("/settings/battery");
    cleanup();
    render(<BatteryPage />);
    expect(screen.getByText(/photovoltaic charging model/i)).not.toBeNull();
  });

  it("switches between Charging Mode and Battery Saver and toggles saver state", () => {
    render(<BatteryPage />);
    expect(screen.getByText(/photovoltaic charging model/i)).not.toBeNull();
    fireEvent.click(screen.getByRole("tab", { name: /battery saver/i }));
    expect(screen.getByText(/battery saver mode/i)).not.toBeNull();
    const toggle = screen.getByRole("switch", { name: /enable battery saver mode/i });
    expect(toggle.getAttribute("data-state")).toBe("unchecked");
    fireEvent.click(toggle);
    expect(toggle.getAttribute("data-state")).toBe("checked");
    fireEvent.click(screen.getByRole("tab", { name: /charging mode/i }));
    expect(screen.getByText(/photovoltaic charging model/i)).not.toBeNull();
  });
});
