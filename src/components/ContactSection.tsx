import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Custom Software / Platform",
  "UX Design",
  "Backend Architecture",
  "AI Integration & Consulting",
  "Other / Not sure yet",
];

const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/e9e0a59223ff65527b15864e594fc4e1";
const CONTACT_CC = ["lawton.ward45@gmail.com", "garcia.kendra73@gmail.com"].join(",");

const ContactSection = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!form.email.trim()) errs.email = "We'll need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "That doesn't look like a valid email.";
    if (!form.message.trim()) errs.message = "A message would help.";
    if (form.message.length > 1000) errs.message = "Please keep it under 1000 characters.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          projectType: form.projectType,
          message: form.message,
          _subject: `New Lovelace website inquiry from ${form.name}`,
          _cc: CONTACT_CC,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSent(true);
      setForm({ name: "", email: "", company: "", projectType: "", message: "" });
      setErrors({});
    } catch {
      toast({
        title: "Message didn't go through",
        description: "Email lovelacetechnologiesgt@gmail.com directly and we'll get back to you.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const inputClass =
    "w-full bg-background border border-foreground/60 px-3 py-3 text-[16px] font-serif focus:outline-none focus:border-accent focus:ring-0";

  return (
    <section id="contact" className="rule-bottom bg-foreground text-background">
      <div className="section-shell py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-16">
          <div className="md:col-span-3">
            <p className="label-mono" style={{ color: "hsl(var(--background) / 0.6)" }}>
              &sect; 04 / Contact
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-serif text-[44px] md:text-[64px] leading-[1.02] max-w-3xl">
              Tell us about
              <br />
              <em>the project.</em>
            </h2>
            <p className="mt-6 text-[18px] max-w-xl opacity-80">
              The quickest way to reach us is by email. We read
              everything that comes in and usually respond
              within a day or two.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 border-t border-background/30 pt-12">
          <div className="md:col-span-4 space-y-6 text-[16px]">
            <div>
              <p className="label-mono mb-1" style={{ color: "hsl(var(--background) / 0.6)" }}>Email</p>
              <a
                href="mailto:lovelacetechnologiesgt@gmail.com"
                className="text-background hover:text-accent break-all"
              >
                lovelacetechnologiesgt@gmail.com
              </a>
            </div>
            <div>
              <p className="label-mono mb-1" style={{ color: "hsl(var(--background) / 0.6)" }}>Studio</p>
              <p>Atlanta, Georgia</p>
            </div>
            <div>
              <p className="label-mono mb-1" style={{ color: "hsl(var(--background) / 0.6)" }}>Response time</p>
              <p>Typically within one business day.</p>
            </div>
            <div className="pt-4 text-[14px] opacity-70 italic">
              Prefer a form? On your right. We don&rsquo;t love
              forms either, but it keeps things tidy.
            </div>
          </div>

          {sent ? (
            <div className="md:col-span-8 border border-background/40 p-8 bg-background/5">
              <p className="label-mono mb-3" style={{ color: "hsl(var(--background) / 0.6)" }}>Received</p>
              <p className="display-serif text-[28px] mb-3">Thanks, got it.</p>
              <p className="text-[16px] opacity-85">
                One of us will write back soon. If it is urgent,
                email us directly at{" "}
                <a href="mailto:lovelacetechnologiesgt@gmail.com" className="text-accent">
                  lovelacetechnologiesgt@gmail.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="md:col-span-8 space-y-5 text-background">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="label-mono block mb-2" style={{ color: "hsl(var(--background) / 0.6)" }} htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass + " text-foreground"}
                    maxLength={100}
                  />
                  {errors.name && <p className="text-accent text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="label-mono block mb-2" style={{ color: "hsl(var(--background) / 0.6)" }} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass + " text-foreground"}
                    maxLength={255}
                  />
                  {errors.email && <p className="text-accent text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="label-mono block mb-2" style={{ color: "hsl(var(--background) / 0.6)" }} htmlFor="company">
                    Company <span className="normal-case italic opacity-70">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass + " text-foreground"}
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="label-mono block mb-2" style={{ color: "hsl(var(--background) / 0.6)" }} htmlFor="projectType">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={inputClass + " text-foreground"}
                  >
                    <option value="">Pick one</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="label-mono block mb-2" style={{ color: "hsl(var(--background) / 0.6)" }} htmlFor="message">
                  Tell us about it
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={inputClass + " text-foreground resize-y"}
                  maxLength={1000}
                />
                {errors.message && <p className="text-accent text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent text-background px-7 py-3 text-[14px] tracking-wide hover:bg-background hover:text-foreground border border-accent hover:border-background disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
