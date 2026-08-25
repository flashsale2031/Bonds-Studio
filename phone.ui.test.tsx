// @vitest-environment jsdom
import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const placeCall = vi.fn();
const sendText = vi.fn();
const createContact = vi.fn();
const updateContact = vi.fn();
const deleteContact = vi.fn();

vi.mock("@/components/AppLayout", () => ({ AppLayout: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }));
vi.mock("@/lib/trpc", () => ({
  trpc: {
    useUtils: () => ({ phone: { contacts: { invalidate: vi.fn() }, calls: { invalidate: vi.fn() }, messages: { invalidate: vi.fn() } } }),
    phone: {
      status: { useQuery: () => ({ data: { configured: false, voiceConfigured: false, smsConfigured: false, webUiUrl: null }, isLoading: false, isError: false }) },
      contacts: { useQuery: () => ({ data: [{ id: 7, ownerId: 0, guestKey: "ui-guest", name: "Alice Example", phoneNumber: "+15551234567", email: null, notes: null, favorite: 0, createdAt: new Date(), updatedAt: new Date() }], isLoading: false, isError: false }) },
      calls: { useQuery: () => ({ data: [], isLoading: false, isError: false }) },
      messages: { useQuery: () => ({ data: [], isLoading: false, isError: false }) },
      placeCall: { useMutation: () => ({ mutate: placeCall, isPending: false }) },
      sendText: { useMutation: () => ({ mutate: sendText, isPending: false }) },
      createContact: { useMutation: () => ({ mutate: createContact, isPending: false }) },
      updateContact: { useMutation: () => ({ mutate: updateContact, isPending: false }) },
      deleteContact: { useMutation: () => ({ mutate: deleteContact, isPending: false }) },
    },
  },
}));

import PhonePage from "../client/src/pages/PhonePage";

afterEach(() => { cleanup(); vi.clearAllMocks(); });

describe("Phone UI", () => {
  it("navigates from Contacts to Dialer, accepts keypad input, and submits a call", () => {
    render(<PhonePage />);
    fireEvent.click(screen.getByRole("tab", { name: /contacts/i }));
    fireEvent.click(screen.getByRole("button", { name: /alice example/i }));
    expect((screen.getByLabelText(/destination number/i) as HTMLInputElement).value).toBe("+15551234567");
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    expect((screen.getByLabelText(/destination number/i) as HTMLInputElement).value).toBe("+155512345671");
    fireEvent.click(screen.getByRole("button", { name: /^call$/i }));
    expect(placeCall).toHaveBeenCalledWith({ phoneNumber: "+155512345671", contactId: undefined });
  });

  it("opens the Call Log tab and renders its empty state", () => {
    render(<PhonePage />);
    fireEvent.click(screen.getByRole("tab", { name: /call log/i }));
    expect(screen.queryByText(/no calls recorded in this workspace/i)).not.toBeNull();
    expect(screen.queryByText(/no text messages recorded in this workspace/i)).not.toBeNull();
  });
});
