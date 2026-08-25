import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DomainsPage from "./pages/DomainsPage";
import AccountsPage from "./pages/AccountsPage";
import TrendsPage from "./pages/TrendsPage";
import NotesPage from "./pages/NotesPage";
import MonetizePage from "./pages/MonetizePage";
import SettingsPage from "./pages/SettingsPage";
import AiModePage from "./pages/AiModePage";
import VoiceControlPage from "./pages/VoiceControlPage";
import PhonePage from "./pages/PhonePage";
import BatteryPage from "./pages/BatteryPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ledger" component={Home} />
      <Route path="/domains" component={DomainsPage} />
      <Route path="/domains/zones" component={DomainsPage} />
      <Route path="/domains/records" component={DomainsPage} />
      <Route path="/domains/settings" component={DomainsPage} />
      <Route path="/domains/lookup" component={DomainsPage} />
      <Route path="/accounts" component={AccountsPage} />
      <Route path="/trends" component={TrendsPage} />
      <Route path="/notes" component={NotesPage} />
      <Route path="/monetize" component={MonetizePage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/ai-mode" component={AiModePage} />
      <Route path="/voice-control" component={VoiceControlPage} />
      <Route path="/phone" component={PhonePage} />
      <Route path="/settings/battery" component={BatteryPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
