import adaPortrait from "../../Ada-1945299396.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="rule-bottom">
      <div className="section-shell py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
          <div className="md:col-span-3">
            <p className="label-mono">&sect; 01 / About</p>
            <h2 className="display-serif text-[34px] md:text-[42px] mt-3">
              A small studio,
              <br />
              <em>on purpose.</em>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-5 space-y-5 text-[18px] leading-relaxed">
            <p>
              Lovelace is a boutique software studio based in
              Atlanta. We were founded by three Georgia Tech
              graduates who kept ending up on the same projects
              and decided to make it official: Kendra in design,
              Sean in engineering, Lawton on the business side.
            </p>
            <p>
              We are a studio, not an agency. That means the
              people you meet on the first call are the same
              people writing the code, drawing the screens, and
              shipping the work. No account managers. No
              handoffs. No offshore team you have never met.
            </p>
            <p>
              We take on a small number of engagements at a
              time. It is the only honest way we know how to
              work, and it is the reason our clients get our
              attention rather than our apologies.
            </p>
          </div>

          <aside className="md:col-span-3 md:col-start-10">
            <div className="label-mono mb-3">Fig. 02 / Namesake</div>
            <img
              src={adaPortrait}
              alt="Ada Lovelace, portrait"
              className="w-full border border-foreground/80 grayscale mb-2"
              loading="lazy"
            />
            <p className="text-[13px] text-muted-foreground leading-snug italic">
              Augusta Ada King, Countess of Lovelace
              (1815 to 1852). Portrait, c. 1840.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
