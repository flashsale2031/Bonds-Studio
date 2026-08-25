import { Construction, Globe2 } from "lucide-react";

export const BONDS_ESTATES_MESSAGE = "This website is property of Bonds Estates and it's currently under construction.";
export const BONDS_MALL_LOGO_URL = "/manus-storage/bonds-mall-logo_e8e7fc95.png";

type PublicLandingProps = {
  domain?: string;
};

export default function PublicLanding({ domain }: PublicLandingProps) {
  const normalizedDomain = domain?.trim().toLowerCase() || "your domain";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-pink-200/10 blur-3xl" />
      <section className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-14">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-black/60 p-4 shadow-lg shadow-cyan-300/10 sm:h-32 sm:w-32">
          <img src={BONDS_MALL_LOGO_URL} alt="Bonds Mall" className="h-full w-full object-contain" />
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
          <Globe2 className="h-3.5 w-3.5" />
          <span>{normalizedDomain}</span>
        </div>
        <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">{BONDS_ESTATES_MESSAGE}</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          Our team is preparing something new. Please check back soon for updates.
        </p>
        <div className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full border border-pink-200/20 bg-pink-200/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-pink-100/80">
          <Construction className="h-3.5 w-3.5" />
          <span>Site under construction</span>
        </div>
      </section>
    </main>
  );
}
