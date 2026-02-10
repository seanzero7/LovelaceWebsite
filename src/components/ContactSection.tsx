import { useState } from "react";
import { Mail, MapPin, Send, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projectTypes = [
  "Social Platform",
  "Utility App",
  "Business Software",
  "Other",
];

const founders = [
  { name: "Kendra Garcia", linkedin: "#" },
  { name: "Sean Hall", linkedin: "#" },
  { name: "Lawton Ward", linkedin: "#" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    if (form.message.length > 1000) errs.message = "Message must be under 1000 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    setForm({ name: "", email: "", company: "", projectType: "", message: "" });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Let's Build Something Meaningful Together
          </h2>
          <div className="ornamental-divider max-w-xs mx-auto">
            <span className="text-accent">✦</span>
          </div>
        </div>

        <div
          ref={formRef}
          className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 ease-out delay-200 ${
            formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Have a project in mind? We'd love to hear about it. Whether you're a startup or an
              established business, we're here to help bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  hello@lovelacellc.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  Atlanta, Georgia (Georgia Tech Alumni)
                </span>
              </div>
            </div>

            {/* Founder LinkedIn Links */}
            <div>
              <h4 className="text-primary-foreground/50 text-xs uppercase tracking-[0.15em] font-semibold mb-3">
                Connect with Us
              </h4>
              <div className="space-y-2">
                {founders.map((f) => (
                  <a
                    key={f.name}
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    {f.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  type="email"
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  maxLength={255}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                maxLength={100}
              />
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-primary-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
              >
                <option value="" className="text-foreground">Project Type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="text-foreground">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project *"
                rows={5}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/15 rounded px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                maxLength={1000}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 rounded font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
