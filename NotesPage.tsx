import { AppLayout } from "@/components/AppLayout";
import { useState, useEffect } from "react";
import { Plus, Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NOTES_KEY = "bonds-studio-notes-v1";
type Note = { id: string; title: string; body: string; createdAt: string; updatedAt: string };

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(NOTES_KEY);
      if (saved) setNotes(JSON.parse(saved));
    } catch {}
  }, []);

  function save(updated: Note[]) {
    setNotes(updated);
    window.localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
  }

  function newNote() {
    const note: Note = { id: crypto.randomUUID(), title: "New note", body: "", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    const updated = [note, ...notes];
    save(updated);
    setSelected(note.id);
    setEditTitle(note.title);
    setEditBody(note.body);
  }

  function selectNote(id: string) {
    const n = notes.find(n => n.id === id);
    if (!n) return;
    setSelected(id);
    setEditTitle(n.title);
    setEditBody(n.body);
  }

  function updateNote() {
    if (!selected) return;
    const updated = notes.map(n => n.id === selected ? { ...n, title: editTitle, body: editBody, updatedAt: new Date().toISOString() } : n);
    save(updated);
    toast.success("Note saved.");
  }

  function deleteNote(id: string) {
    const updated = notes.filter(n => n.id !== id);
    save(updated);
    if (selected === id) { setSelected(null); setEditTitle(""); setEditBody(""); }
    toast.success("Note deleted.");
  }

  const selectedNote = notes.find(n => n.id === selected);

  return (
    <AppLayout title="Notes" subtitle="Review notes and platform observations.">
      <div className="flex gap-6 h-[calc(100vh-160px)] min-h-[400px]">
        {/* Notes list */}
        <div className="w-64 shrink-0 flex flex-col border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center justify-between border-b border-[#17231e]/10 px-4 py-3">
            <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Notes</p>
            <Button onClick={newNote} size="sm" variant="ghost" className="h-7 w-7 p-0 hover:bg-[#e8e1d5]">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {notes.length === 0 ? (
              <div className="p-4 text-center">
                <FileText className="h-8 w-8 mx-auto text-[#b0bab2] mb-2" />
                <p className="text-xs text-[#6a736b]">No notes yet. Create one to get started.</p>
              </div>
            ) : (
              notes.map(n => (
                <button key={n.id} onClick={() => selectNote(n.id)}
                  className={`w-full text-left px-4 py-3 border-b border-[#17231e]/8 transition-colors ${selected === n.id ? "bg-[#2c5b48]/10 border-l-2 border-l-[#2c5b48]" : "hover:bg-[#f0ece3]"}`}>
                  <p className="text-sm font-semibold text-[#19211e] truncate">{n.title}</p>
                  <p className="font-ledger text-[9px] uppercase tracking-[0.1em] text-[#748076] mt-0.5">
                    {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(n.updatedAt))}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col border border-[#17231e]/10 bg-[#f9f5ec]">
          {selectedNote ? (
            <>
              <div className="flex items-center justify-between border-b border-[#17231e]/10 px-6 py-3">
                <Input value={editTitle} onChange={e => setEditTitle(e.target.value)}
                  className="h-8 border-none bg-transparent p-0 text-base font-semibold text-[#19211e] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" />
                <div className="flex gap-2">
                  <Button onClick={updateNote} size="sm" className="h-7 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837] text-xs">Save</Button>
                  <Button onClick={() => deleteNote(selectedNote.id)} size="sm" variant="ghost" className="h-7 w-7 p-0 hover:bg-[#eadbd6] hover:text-[#a4423c]">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <Textarea value={editBody} onChange={e => setEditBody(e.target.value)}
                placeholder="Write your review notes, observations, or reminders here..."
                className="flex-1 resize-none rounded-none border-none bg-transparent p-6 text-sm leading-7 text-[#19211e] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" />
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <FileText className="h-12 w-12 text-[#b0bab2] mb-4" />
              <p className="font-display text-2xl text-[#19211e]">Select a note</p>
              <p className="mt-2 text-sm text-[#5b655e]">Choose a note from the list or create a new one.</p>
              <Button onClick={newNote} className="mt-6 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837]">
                <Plus className="h-4 w-4 mr-2" />New note
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
