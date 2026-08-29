import { BookUser, MapPin, Phone as PhoneIcon } from "lucide-react";
import { Link } from "wouter";
import { AppLayout } from "@/components/AppLayout";
import { trpc } from "@/lib/trpc";

export default function PhonePage() {
  const contacts = trpc.phone.contacts.useQuery();
  return <AppLayout title="Phone" subtitle="Calls, texts, contacts, and geographic contact mapping.">
    <div className="max-w-5xl space-y-6">
      <header className="flex flex-col gap-4 border-b border-[#17231e]/10 pb-5 sm:flex-row sm:items-end sm:justify-between"><div><div className="mb-2 flex items-center gap-3"><div className="grid h-10 w-10 place-items-center bg-[#2c5b48] text-white"><PhoneIcon className="h-5 w-5" /></div><h1 className="font-display text-4xl text-[#19211e]">Phone</h1></div><p className="text-sm text-[#5b655e]">Manage workspace contacts and view their stored addresses on the 3D Earth.</p></div><Link href="/phone/earth" className="inline-flex items-center gap-2 bg-[#2c5b48] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#214837]"><MapPin className="h-4 w-4" />Contact Earth</Link></header>
      <section className="border border-[#17231e]/10 bg-[#f9f5ec]"><div className="flex items-center gap-2 border-b border-[#17231e]/10 px-5 py-3"><BookUser className="h-4 w-4 text-[#2c5b48]"/><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Workspace contacts</p></div>{contacts.isLoading?<p className="p-6 text-sm text-[#6a736b]">Loading contacts…</p>:contacts.isError?<p className="p-6 text-sm text-[#7b302d]">Could not load contacts.</p>:!contacts.data?.length?<p className="p-6 text-sm text-[#6a736b]">No contacts in this workspace.</p>:<div className="divide-y divide-[#17231e]/8">{contacts.data.map(contact=><div key={contact.id} className="flex items-center justify-between gap-4 px-5 py-4"><div className="min-w-0"><p className="truncate text-sm font-semibold text-[#19211e]">{contact.name}</p><p className="text-xs text-[#6a736b]">{contact.phoneNumber}</p>{(contact.address||contact.notes)&&<p className="mt-1 truncate text-[10px] text-[#8a6e1e]">{contact.address||contact.notes}</p>}</div>{(contact.address||contact.notes?.match(/(?:address|location)\s*:/i))&&<Link href="/phone/earth" className="shrink-0 text-xs font-semibold text-[#2c5b48]">View on Earth</Link>}</div>)}</div>}</section>
    </div>
  </AppLayout>;
}
