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
    "w-full bg-transparent border-b-2 border-background/40 px-0 py-3 text-[18px] text-background placeholder:text-background/40 focus:outline-none focus:border-accent no-border";

  return (
    <section id="contact" className="border-b-2 border-foreground bg-foreground text-background">
      <div className="shell">
        {/* header */}
        <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-background/30">
          <div className="md:col-span-3">
            <p className="micro" style={{ color: "hsl(var(--background) / 0.7)" }}>
              04 / Index / Contact
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="micro text-right" style={{ color: "hsl(var(--background) / 0.5)" }}>p. 004</p>
          </div>
        </div>

        <div className="py-16 md:py-24">
          <h2 className="display-sans text-[56px] md:text-[120px] mb-10">
            let&rsquo;s talk.
            <br />
            <span className="text-accent">we mean it.</span>
          </h2>
          <p className="text-[18px] max-w-xl opacity-85 mb-12">
            If you have a project in mind, a problem you are
            stuck on, or just want to see if we are a fit, drop
            us a line. We read every inquiry ourselves and
            usually respond within a day.
          </p>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <div className="border border-background/30 p-6 md:p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <p className="micro" style={{ color: "hsl(var(--background) / 0.6)" }}>Channel / 01</p>
                  <p className="micro" style={{ color: "hsl(var(--background) / 0.4)" }}>Fastest</p>
                </div>
                <p className="display-sans text-[22px] mb-3 normal-case">Email us.</p>
                <a
                  href="mailto:lovelacetechnologiesgt@gmail.com"
                  className="text-[15px] break-all hover:text-accent"
                  style={{ borderColor: "hsl(var(--background) / 0.4)" }}
                >
                  lovelacetechnologiesgt@gmail.com
                </a>
              </div>

              <div className="border border-background/30 border-t-0 p-6 md:p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <p className="micro" style={{ color: "hsl(var(--background) / 0.6)" }}>Channel / 02</p>
                  <p className="micro" style={{ color: "hsl(var(--background) / 0.4)" }}>Formal</p>
                </div>
                <p className="display-sans text-[22px] mb-3 normal-case">Use the form.</p>
                <p className="text-[14px] opacity-70 leading-relaxed">
                  If your inquiry involves an RFP, NDA, or
                  anything that needs structure, the form
                  keeps it tidy on our end.
                </p>
              </div>

              <div className="border border-background/30 border-t-0 p-6 md:p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <p className="micro" style={{ color: "hsl(var(--background) / 0.6)" }}>Channel / 03</p>
                  <p className="micro" style={{ color: "hsl(var(--background) / 0.4)" }}>In person</p>
                </div>
                <p className="display-sans text-[22px] mb-3 normal-case">In Atlanta?</p>
                <p className="text-[14px] opacity-70 leading-relaxed">
                  We are happy to grab coffee. Email to set
                  it up.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              {sent ? (
                <div className="border border-background/30 p-8">
                  <p className="micro mb-4" style={{ color: "hsl(var(--background) / 0.6)" }}>Received</p>
                  <p className="display-sans text-[36px] mb-4">thanks, got it.</p>
                  <p className="text-[16px] opacity-85">
                    One of us will write back shortly. If it is
                    urgent, email us directly at{" "}
                    <a
                      href="mailto:lovelacetechnologiesgt@gmail.com"
                      className="text-accent"
                      style={{ borderColor: "hsl(var(--accent))" }}
                    >
                      lovelacetechnologiesgt@gmail.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="micro block mb-2"
                        style={{ color: "hsl(var(--background) / 0.6)" }}
                      >
                        01 / Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="First and last"
                        maxLength={100}
                      />
                      {errors.name && <p className="text-accent text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="micro block mb-2"
                        style={{ color: "hsl(var(--background) / 0.6)" }}
                      >
                        02 / Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@company.com"
                        maxLength={255}
                      />
                      {errors.email && <p className="text-accent text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="micro block mb-2"
                        style={{ color: "hsl(var(--background) / 0.6)" }}
                      >
                        03 / Company (optional)
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="If applicable"
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="micro block mb-2"
                        style={{ color: "hsl(var(--background) / 0.6)" }}
                      >
                        04 / Project type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" className="text-foreground">Pick one</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="text-foreground">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="micro block mb-2"
                      style={{ color: "hsl(var(--background) / 0.6)" }}
                    >
                      05 / Tell us about the project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      className={inputClass + " resize-y"}
                      placeholder="What are you trying to build, and what is in the way?"
                      maxLength={1000}
                    />
                    {errors.message && <p className="text-accent text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-background/30">
                    <p className="micro" style={{ color: "hsl(var(--background) / 0.5)" }}>
                      Typically replied within one business day
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-accent text-background px-7 py-4 micro hover:bg-background hover:text-foreground disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send inquiry →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
