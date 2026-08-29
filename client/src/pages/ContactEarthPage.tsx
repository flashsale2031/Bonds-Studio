import { Link } from "wouter";
import { ArrowLeft, MapPin } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { trpc } from "@/lib/trpc";
import ContactEarthGlobe from "../ContactEarthGlobe";

export default function ContactEarthPage() {
  const contacts = trpc.phone.contacts.useQuery();
  return <AppLayout title="Contact Earth" subtitle="3D geographic view of addresses stored in Phone contacts.">
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center bg-[#2c5b48] text-white"><MapPin className="h-4 w-4" /></div><div><h1 className="font-display text-3xl text-[#19211e]">Contact Earth</h1><p className="text-xs text-[#6a736b]">Address pins stay associated with the Phone contact IDs.</p></div></div><Link href="/phone" className="inline-flex items-center gap-2 border border-[#17231e]/15 px-3 py-2 text-xs font-semibold text-[#2c5b48]"><ArrowLeft className="h-3.5 w-3.5" />Phone contacts</Link></div>
      {contacts.isLoading ? <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-8 text-sm text-[#6a736b]">Loading Phone contacts…</div> : contacts.isError ? <div className="border border-[#a4423c]/20 bg-[#eadbd6] p-8 text-sm text-[#7b302d]">Could not load Phone contacts.</div> : <ContactEarthGlobe contacts={contacts.data || []} />}
    </div>
  </AppLayout>;
}
