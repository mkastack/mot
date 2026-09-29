import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateIn from "../components/AnimateIn";
import Link from "next/link";
import { MessageSquare, Zap, HardDrive, RefreshCw, Mail, FileText, Globe, Box, Users, Calendar, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Braxvio connects with the tools your team already uses — from Slack to Google Workspace, Zapier to your own API.",
};

const CATEGORIES = [
  {
    label: "Communication",
    icon: <MessageSquare className="w-5 h-5 text-[#0066FF]" />,
    tools: [
      { name: "Slack", desc: "Send Braxvio summaries and task alerts directly to Slack channels." },
      { name: "Email", desc: "Forward any email into Braxvio as a captured item, task or project." },
      { name: "Microsoft Teams", desc: "Sync meetings, decisions and follow-ups into your Braxvio workspace." },
    ],
  },
  {
    label: "Productivity",
    icon: <Zap className="w-5 h-5 text-[#00A3FF]" />,
    tools: [
      { name: "Notion", desc: "Bi-directional sync with your Notion databases and project spaces." },
      { name: "Google Workspace", desc: "Link Docs, Sheets, Calendar events and Gmail threads seamlessly." },
      { name: "Microsoft 365", desc: "Connect Word, Excel and Outlook into your Braxvio workflow." },
    ],
  },
  {
    label: "Storage",
    icon: <HardDrive className="w-5 h-5 text-[#0066FF]" />,
    tools: [
      { name: "Google Drive", desc: "Attach Drive files to any capture, task or plan with one click." },
      { name: "Dropbox", desc: "Surface relevant Dropbox assets alongside your Braxvio projects." },
      { name: "OneDrive", desc: "Keep your Microsoft storage connected to every Braxvio workflow." },
    ],
  },
  {
    label: "Automation",
    icon: <RefreshCw className="w-5 h-5 text-[#00A3FF]" />,
    tools: [
      { name: "Zapier", desc: "Connect Braxvio to 5,000+ apps with no-code Zapier workflows." },
      { name: "Webhooks", desc: "Send real-time events from Braxvio to any external endpoint." },
      { name: "REST API", desc: "Full programmatic access — read, write and automate everything." },
    ],
  },
];

const NETWORK_NODES = [
  { label: "Slack", icon: <MessageSquare className="w-5 h-5 text-[#4A154B]" />, x: "10%", y: "20%", color: "#4A154B" },
  { label: "Gmail", icon: <Mail className="w-5 h-5 text-[#EA4335]" />, x: "25%", y: "5%", color: "#EA4335" },
  { label: "Notion", icon: <FileText className="w-5 h-5 text-[#1C1C1C]" />, x: "68%", y: "8%", color: "#1C1C1C" },
  { label: "Google", icon: <Globe className="w-5 h-5 text-[#4285F4]" />, x: "82%", y: "25%", color: "#4285F4" },
  { label: "Zapier", icon: <Zap className="w-5 h-5 text-[#FF4A00]" />, x: "88%", y: "60%", color: "#FF4A00" },
  { label: "Dropbox", icon: <Box className="w-5 h-5 text-[#0061FF]" />, x: "70%", y: "82%", color: "#0061FF" },
  { label: "Teams", icon: <Users className="w-5 h-5 text-[#6264A7]" />, x: "30%", y: "85%", color: "#6264A7" },
  { label: "Calendar", icon: <Calendar className="w-5 h-5 text-[#0F9D58]" />, x: "8%", y: "65%", color: "#0F9D58" },
];

const CODE_LINES = [
  { num: "1", content: <><span className="code-keyword">const</span> <span className="code-value">braxvio</span> = <span className="code-keyword">require</span>(<span className="code-string">'@braxvio/sdk'</span>);</> },
  { num: "2", content: <span className="code-comment">// Capture intelligence via API</span> },
  { num: "3", content: null },
  { num: "4", content: <><span className="code-keyword">const</span> <span className="code-value">capture</span> = <span className="code-keyword">await</span> braxvio.</> },
  { num: "5", content: <>&nbsp;&nbsp;<span className="code-value">intelligence</span>.<span className="code-value">capture</span>{"({"}</> },
  { num: "6", content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">content</span>: <span className="code-string">"Market opportunity in Lagos"</span>,</> },
  { num: "7", content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">type</span>: <span className="code-string">"insight"</span>,</> },
  { num: "8", content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">priority</span>: <span className="code-string">"high"</span>,</> },
  { num: "9", content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">project</span>: <span className="code-string">"expansion-2025"</span></> },
  { num: "10", content: <>{"  })"}</> },
  { num: "11", content: null },
  { num: "12", content: <><span className="code-comment">// Returns: {`{ id, status, tags, linked_tasks }`}</span></> },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO — network visual */}
        <section className="pt-28 pb-0 px-6 bg-[#F5F0EB] overflow-hidden">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center pb-16">
              <AnimateIn type="left">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-6" style={{ fontFamily: "var(--font-inter)" }}>Integrations</p>
                <h1 className="text-[50px] sm:text-[68px] font-extrabold leading-[1.04] text-[#0F0E0C] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Everything<br /><em className="italic">connected.</em>
                </h1>
                <p className="text-[15px] text-[#6B6560] leading-7 max-w-md mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                  Braxvio works alongside the tools you already use. No migration. No friction. Just seamless intelligence across your entire workflow.
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link href="/pricing" className="flex items-center gap-2 px-6 py-3 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-[13px] font-medium hover:bg-[#2A2825] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                    Explore integrations
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                  <a href="#api" className="text-[13px] text-[#6B6560] hover:text-[#0F0E0C] transition-colors flex items-center gap-1.5" style={{ fontFamily: "var(--font-inter)" }}>
                    View API docs →
                  </a>
                </div>
                <div className="flex items-center gap-6 mt-10 pt-8 border-t border-black/[0.07]">
                  <div>
                    <p className="text-[28px] font-bold text-[#0F0E0C]" style={{ fontFamily: "var(--font-playfair), serif" }}>40+</p>
                    <p className="text-[12px] text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>Integrations</p>
                  </div>
                  <div className="w-px h-10 bg-black/[0.08]" />
                  <div>
                    <p className="text-[28px] font-bold text-[#0F0E0C]" style={{ fontFamily: "var(--font-playfair), serif" }}>REST</p>
                    <p className="text-[12px] text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>Full API</p>
                  </div>
                  <div className="w-px h-10 bg-black/[0.08]" />
                  <div>
                    <p className="text-[28px] font-bold text-[#0F0E0C]" style={{ fontFamily: "var(--font-playfair), serif" }}>Real-time</p>
                    <p className="text-[12px] text-[#6B6560]" style={{ fontFamily: "var(--font-inter)" }}>Webhooks</p>
                  </div>
                </div>
              </AnimateIn>

              {/* Network diagram */}
              <AnimateIn type="right" delay={100}>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0F0E0C] border-4 border-[#C8A97E]/20 flex items-center justify-center z-10 shadow-xl">
                    <span className="text-[#F5F0EB] text-[11px] font-bold tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>BRX</span>
                  </div>
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    {NETWORK_NODES.map((node, i) => {
                      const nx = parseFloat(node.x) / 100 * 400;
                      const ny = parseFloat(node.y) / 100 * 400;
                      return (
                        <line
                          key={i}
                          x1="200" y1="200"
                          x2={nx} y2={ny}
                          stroke="rgba(200,169,126,0.2)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                        />
                      );
                    })}
                  </svg>
                  {/* Peripheral nodes */}
                  {NETWORK_NODES.map((node) => (
                    <div
                      key={node.label}
                      className="integration-node glass-card absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: node.x, top: node.y }}
                      title={node.label}
                    >
                      <span className="text-xl">{node.icon}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* INTEGRATION CATEGORIES */}
        <section className="py-24 px-6 bg-[#EDE7DF]">
          <div className="container-xl">
            <AnimateIn>
              <h2 className="text-[38px] sm:text-[50px] font-bold leading-[1.08] text-[#0F0E0C] mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Integration <em className="italic">ecosystem.</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] mb-14 max-w-lg" style={{ fontFamily: "var(--font-inter)" }}>
                Every category of your workflow, connected to Braxvio.
              </p>
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat, i) => (
                <AnimateIn key={i} delay={i * 80}>
                  <div className="glass-card p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-[13px] font-semibold text-[#0F0E0C] uppercase tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>{cat.label}</span>
                    </div>
                    <div className="space-y-4">
                      {cat.tools.map((tool) => (
                        <div key={tool.name} className="border-b border-black/[0.06] pb-4 last:border-0 last:pb-0">
                          <p className="text-[13px] font-semibold text-[#0F0E0C] mb-1" style={{ fontFamily: "var(--font-inter)" }}>{tool.name}</p>
                          <p className="text-[12px] text-[#6B6560] leading-5" style={{ fontFamily: "var(--font-inter)" }}>{tool.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* API SECTION */}
        <section id="api" className="py-28 px-6 bg-[#0F0E0C]">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateIn type="left">
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8A97E] mb-6" style={{ fontFamily: "var(--font-inter)" }}>Developer Platform</p>
                <h2 className="text-[40px] sm:text-[52px] font-bold leading-[1.08] text-[#F5F0EB] mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Build on top of<br /><em className="italic text-[#C8A97E]">your thinking.</em>
                </h2>
                <p className="text-[15px] text-[#6B6560] leading-7 mb-8 max-w-md" style={{ fontFamily: "var(--font-inter)" }}>
                  The Braxvio API gives developers full programmatic access to capture, organize and automate intelligence workflows. From simple webhooks to full enterprise automation pipelines.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Full REST API with OpenAPI spec", "Real-time webhooks for any event", "SDKs for Node.js, Python & Go", "Granular API key permissions", "99.9% uptime SLA"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E]/30 flex items-center justify-center shrink-0">
                        <svg width="7" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      <span className="text-[13px] text-[#9B9590]" style={{ fontFamily: "var(--font-inter)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" id="api-docs-link" className="inline-flex items-center gap-2 text-[13px] text-[#C8A97E] hover:text-[#D4B98E] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  Read API documentation
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </AnimateIn>

              {/* Code block */}
              <AnimateIn type="right" delay={100}>
                <div className="code-block p-6 text-[13px] font-mono leading-7 overflow-x-auto">
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                    <span className="ml-3 text-white/20 text-[11px]">braxvio-api.js</span>
                  </div>
                  {CODE_LINES.map((line) => (
                    <div key={line.num} className="flex">
                      <span className="code-line-num text-[12px]">{line.num}</span>
                      <span>{line.content}</span>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#F5F0EB] text-center">
          <div className="max-w-xl mx-auto">
            <AnimateIn>
              <h2 className="text-[40px] sm:text-[52px] font-bold leading-[1.08] text-[#0F0E0C] mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Connect the tools<br /><em className="italic">you already use.</em>
              </h2>
              <p className="text-[15px] text-[#6B6560] mb-8 leading-7" style={{ fontFamily: "var(--font-inter)" }}>
                Set up your first integration in minutes. No engineering required.
              </p>
              <Link href="/pricing" id="integrations-cta" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F0E0C] text-[#F5F0EB] rounded-full text-[15px] font-semibold hover:bg-[#2A2825] transition-all hover:scale-[1.02]" style={{ fontFamily: "var(--font-inter)" }}>
                Explore integrations
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
