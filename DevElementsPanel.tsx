import { useState, useEffect } from "react";
import { useDevMode } from "@/hooks/useDevMode";
import { 
  Box, 
  ChevronRight, 
  ChevronDown, 
  Layout, 
  Component, 
  PanelLeft, 
  MousePointer2,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ElementInfo {
  id: string;
  name: string;
  type: "layout" | "component" | "section";
  selector?: string;
  children?: ElementInfo[];
}

const UI_STRUCTURE: ElementInfo[] = [
  {
    id: "layout",
    name: "AppLayout",
    type: "layout",
    selector: ".min-h-screen",
    children: [
      {
        id: "sidebar",
        name: "Sidebar (Desktop)",
        type: "layout",
        selector: "aside.lg\\:flex",
        children: [
          { 
            id: "sidebar-brand", 
            name: "Brand Lockup", 
            type: "component", 
            selector: "aside.lg\\:flex > div:first-child",
            children: [
              { id: "sidebar-logo", name: "Header Icon (B)", type: "component", selector: "aside.lg\\:flex .h-9.w-9" }
            ]
          },
          { id: "sidebar-nav", name: "Primary Navigation", type: "component", selector: "aside.lg\\:flex nav" },
          { id: "sidebar-footer", name: "Sidebar Footer", type: "component", selector: "aside.lg\\:flex .border-t.border-white\\/8" },
        ]
      },
      {
        id: "header",
        name: "Header Bar",
        type: "layout",
        selector: "header",
        children: [
          { id: "mobile-menu", name: "Mobile Menu Trigger", type: "component", selector: "header button.lg\\:hidden" },
          { 
            id: "breadcrumb", 
            name: "Desktop Breadcrumb", 
            type: "component", 
            selector: "header .hidden.lg\\:block",
            children: [
              { id: "breadcrumb-text", name: "Breadcrumb Text", type: "component", selector: "header .font-ledger.text-\\[10px\\]" }
            ]
          },
          { id: "mobile-logo", name: "Mobile Logo", type: "component", selector: "header .lg\\:hidden:not(button)" },
          { 
            id: "header-actions", 
            name: "Header Actions", 
            type: "component", 
            selector: "header .flex.items-center.gap-2",
            children: [
              { id: "account-btn", name: "Account Button", type: "component", selector: "header a[href='/accounts']" },
              { id: "menu-btn", name: "Dropdown Menu", type: "component", selector: "header button[aria-label='Open menu']" }
            ]
          },
        ]
      },
      {
        id: "main",
        name: "Main Viewport",
        type: "layout",
        selector: "main",
        children: [
          { 
            id: "hero-center", 
            name: "Project Center (Hero)", 
            type: "section", 
            selector: "main section:nth-of-type(1)",
            children: [
              { id: "start-project-text", name: "Start A Project Label", type: "component", selector: "main section:nth-of-type(1) .font-ledger" },
              { id: "creation-buttons", name: "Creation Buttons", type: "component", selector: "main section:nth-of-type(1) .flex.flex-wrap" },
              { id: "project-types", name: "Project Types Grid", type: "component", selector: "main section:nth-of-type(1) .grid" }
            ]
          },
          { 
            id: "voice-section", 
            name: "Voice Control Section", 
            type: "section", 
            selector: "main section:nth-of-type(2)",
            children: [
              { id: "voice-mic", name: "Mic Interface", type: "component", selector: "main section:nth-of-type(2) button" }
            ]
          },
          { 
            id: "ai-section", 
            name: "AI Mode Section", 
            type: "section", 
            selector: "main section:nth-of-type(3)",
            children: [
              { id: "ai-features", name: "AI Feature Cards", type: "component", selector: "main section:nth-of-type(3) .grid" }
            ]
          },
          { 
            id: "ledger-section", 
            name: "Active Ledger Section", 
            type: "section", 
            selector: "main section:nth-of-type(4)",
            children: [
              { id: "ledger-grid", name: "Platform Cards Grid", type: "component", selector: "main section:nth-of-type(4) .grid" }
            ]
          }
        ]
      }
    ]
  }
];

export function DevElementsPanel() {
  const isDevMode = useDevMode();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ layout: true });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    if (!isDevMode) {
      setIsOpen(false);
      setHoveredElement(null);
    }
  }, [isDevMode]);

  useEffect(() => {
    if (hoveredElement) {
      const el = document.querySelector(hoveredElement);
      if (el) {
        el.classList.add("dev-highlight");
        return () => el.classList.remove("dev-highlight");
      }
    }
  }, [hoveredElement]);

  if (!isDevMode) return null;

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderElement = (item: ElementInfo, depth = 0) => {
    const isExpanded = expanded[item.id];
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="select-none">
        <div 
          className={cn(
            "flex items-center gap-2 py-1 px-2 cursor-pointer hover:bg-[#2c5b48]/10 transition-colors",
            hoveredElement === item.selector && "bg-[#2c5b48]/20"
          )}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => hasChildren ? toggleExpand(item.id) : null}
          onMouseEnter={() => item.selector && setHoveredElement(item.selector)}
          onMouseLeave={() => setHoveredElement(null)}
        >
          {hasChildren ? (
            isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
          ) : (
            <div className="w-3" />
          )}
          {item.type === "layout" && <Layout className="h-3 w-3 text-[#2c5b48]" />}
          {item.type === "component" && <Component className="h-3 w-3 text-[#c9a84c]" />}
          {item.type === "section" && <Box className="h-3 w-3 text-[#7a9a82]" />}
          <span className="text-[11px] font-ledger font-medium">{item.name}</span>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children!.map(child => renderElement(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .dev-highlight {
          outline: 2px solid #2c5b48 !important;
          outline-offset: -2px !important;
          position: relative;
        }
        .dev-highlight::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(44, 91, 72, 0.1);
          pointer-events: none;
          z-index: 50;
        }
      `}} />
      
      <div className="fixed bottom-6 right-6 z-[100]">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-[#1a2820] text-white px-4 py-2 shadow-xl hover:bg-[#2c5b48] transition-colors border border-[#c9a84c]/30"
          >
            <MousePointer2 className="h-4 w-4" />
            <span className="font-ledger text-[10px] font-bold uppercase tracking-[0.1em]">Elements</span>
          </button>
        ) : (
          <div className="w-64 bg-[#f4f0e7] border border-[#17231e]/20 shadow-2xl flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between bg-[#1a2820] text-white px-3 py-2">
              <div className="flex items-center gap-2">
                <Layout className="h-4 w-4 text-[#c9a84c]" />
                <span className="font-ledger text-[10px] font-bold uppercase tracking-[0.1em]">UI Elements</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-[#c9a84c]">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              {UI_STRUCTURE.map(item => renderElement(item))}
            </div>
            <div className="p-2 border-t border-[#17231e]/10 bg-[#e8e1d5]">
              <p className="text-[9px] text-[#6a736b] leading-tight">
                Hover over elements to highlight them in the UI. This breakdown shows the current layout structure.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
