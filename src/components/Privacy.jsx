import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Shiftnex Media";
  }, []);

  return (
    <main className="bg-black min-h-screen px-4 sm:px-8 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[#d8c9c0] text-3xl sm:text-4xl font-display tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-white/40 text-sm mb-1">Shiftnex Media</p>
        <p className="text-white/40 text-sm mb-10">
          Last updated: 2026
        </p>

        <p className="text-white/70 leading-relaxed mb-6">
          This Privacy Policy explains how Shiftnex Media ("Shiftnex," "we,"
          "us," or "our") collects, uses, stores, and protects personal
          information that you provide when you subscribe to our daily
          automotive newsletter ("the Newsletter") through our website ("the
          Site"). By submitting your name and email address to subscribe to
          the Newsletter, you agree to the practices described in this
          Policy.
        </p>

        <p className="text-white/70 leading-relaxed mb-12">
          Shiftnex Media is currently operated by an individual creator and
          is not, at this time, a separately registered company,
          partnership, or corporate entity. References to "Shiftnex," "we,"
          or "us" in this Policy refer to that individual operator acting
          under the Shiftnex Media name. This Policy will be updated if and
          when Shiftnex Media is incorporated as a formal legal entity.
        </p>

        <Section number="1" title="Who We Are">
          <p>
            Shiftnex Media is a digital automotive content brand that
            publishes editorial content, visual storytelling, and a daily
            newsletter related to automotive history ("On This Day in
            Automotive History" style content). This Policy applies
            specifically to personal data collected through the Newsletter
            subscription feature on the Site.
          </p>
        </Section>

        <Section number="2" title="Information We Collect">
          <p className="mb-4">
            When you subscribe to the Newsletter, we collect the following
            information directly from you:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-6">
            <li>Your full name, as entered into the subscription form.</li>
            <li>
              Your email address, as entered into the subscription form.
            </li>
          </ul>
          <p className="mb-8">
            We do not request, and you should never submit, any of the
            following through the Newsletter subscription form: passwords,
            payment information, government identification numbers, physical
            addresses, phone numbers, or any other sensitive personal data.
            The form is designed to collect only the two fields listed
            above.
          </p>

          <h3 className="text-[#d8c9c0] text-base sm:text-lg font-display mb-3">
            2.1 Automatically Collected Information
          </h3>
          <p className="mb-4">
            When you visit the Site, our hosting provider and any analytics
            tools we use may automatically collect limited technical
            information, which may include:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Pages visited and time spent on the Site</li>
            <li>Referring website or source</li>
          </ul>
          <p>
            This technical information is collected in aggregate and is not
            used to identify you personally. It helps us understand how
            visitors use the Site and improve its performance.
          </p>
        </Section>

        <Section number="3" title="How We Use Your Information">
          <p className="mb-4">
            We use the personal information you provide solely for the
            following purposes:
          </p>
          <ol className="list-decimal list-outside ml-5 space-y-2 mb-4">
            <li>
              To send you the daily automotive newsletter you have
              subscribed to.
            </li>
            <li>
              To personalize the greeting or content of the newsletter using
              your name, where applicable.
            </li>
            <li>
              To manage your subscription, including processing unsubscribe
              requests.
            </li>
            <li>
              To maintain records of consent for sending you communications.
            </li>
            <li>
              To monitor and improve the quality, accuracy, and delivery of
              the Newsletter.
            </li>
          </ol>
          <p>
            We do not use your personal information for automated
            decision-making, profiling that produces legal effects, or any
            purpose beyond what is described in this Policy.
          </p>
        </Section>

        <Section number="4" title="What We Do Not Do With Your Information">
          <p className="mb-4">
            We want to be direct and specific about our commitments:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              We do not sell your personal information to any third party,
              under any circumstances.
            </li>
            <li>We do not rent, trade, or barter your personal information.</li>
            <li>We do not share your name or email address with advertisers.</li>
            <li>
              We do not use your information for purposes beyond operating
              and improving the Newsletter, unless you separately and
              explicitly consent to a different use.
            </li>
            <li>
              We do not knowingly collect personal information from children
              under the age of 13 (or the relevant minimum age in your
              jurisdiction).
            </li>
          </ul>
        </Section>

        <Section number="5" title="Newsletter Delivery Service Provider">
          <p className="mb-4">
            To deliver the Newsletter, we use{" "}
            <a
              href="https://www.mailerlite.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d8c9c0] underline hover:text-white transition-colors"
            >
              MailerLite
            </a>{" "}
            as our email service provider ("ESP") to store subscriber
            information and send daily emails. MailerLite processes your
            name and email address on our behalf solely for the purpose of
            delivering the Newsletter.
          </p>
          <p className="mb-4">
            MailerLite may use tracking technologies in the emails it sends
            on our behalf, including open tracking and click tracking, to
            help us measure engagement.
          </p>
          <p>
            MailerLite is located outside your country of residence,
            including in jurisdictions with different data protection laws
            than your own. Where required by applicable law, we take
            reasonable steps to ensure adequate protection of your data in
            such transfers.
          </p>
        </Section>

        <Section number="6" title="Data Storage and Security">
          <p className="mb-4">
            Your name and email address are stored within the systems of our
            newsletter service provider. We take reasonable steps to protect
            your personal information, including:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
            <li>
              Limiting access to subscriber data to the individual(s)
              operating Shiftnex Media.
            </li>
            <li>
              Relying on the security infrastructure of established,
              reputable email service providers rather than storing
              subscriber data on personal or unsecured systems.
            </li>
            <li>
              Reviewing our data handling practices periodically as Shiftnex
              Media grows.
            </li>
          </ul>
          <p>
            However, no method of electronic storage or transmission is
            100% secure. While we strive to protect your personal
            information, we cannot guarantee its absolute security, and you
            provide your information at your own risk.
          </p>
        </Section>

        <Section number="7" title="How Long We Keep Your Information">
          <p>
            We retain your name and email address for as long as you remain
            subscribed to the Newsletter. If you unsubscribe, your
            information will be removed from active sending lists within a
            reasonable period, generally no longer than 30 days, except
            where our service provider retains suppression records (i.e., a
            record that you unsubscribed) in order to ensure we do not
            contact you again by mistake. Suppression records typically
            contain only your email address and the date of unsubscription.
          </p>
        </Section>

        <Section number="8" title="Your Rights and Choices">
          <p className="mb-4">
            You have the following rights regarding your personal
            information:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
            <li>
              Unsubscribe at any time. Every Newsletter email includes a
              visible and functional unsubscribe link. Clicking it will
              immediately stop future emails.
            </li>
            <li>
              Request access to the personal information we hold about you.
            </li>
            <li>Request correction of inaccurate personal information.</li>
            <li>
              Request deletion of your personal information from our
              records and our service provider's systems.
            </li>
            <li>
              Withdraw consent at any time, which we will treat as
              equivalent to an unsubscribe request.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details in
            Section 12. We will respond to legitimate requests within a
            reasonable timeframe, and in any event within the period
            required by applicable law.
          </p>
        </Section>

        <Section number="9" title="Children's Privacy">
          <p>
            The Newsletter is not directed at, marketed to, or intended for
            use by children. We do not knowingly collect personal
            information from anyone under the age of 13. If we become aware
            that we have inadvertently collected personal information from
            a child under this age, we will delete it promptly. If you
            believe a child has subscribed to the Newsletter, please contact
            us immediately.
          </p>
        </Section>

        <Section number="10" title="Cookies &amp; Tracking Technologies">
          <p className="mb-4">
            The Site may use minimal, essential cookies required for the
            Site to function correctly (for example, remembering that you
            submitted the subscription form).
          </p>
          <p className="mb-4">
            We use MailerLite as our email service provider to send the
            Newsletter. MailerLite may use tracking technologies in the
            emails we send, including open tracking (detecting when an
            email is opened) and click tracking (recording which links are
            clicked). This helps us understand engagement with the
            Newsletter and improve its content.
          </p>
          <p>
            The Site does not currently use third-party advertising or
            tracking cookies on the Site itself. If this changes in the
            future, this Policy will be updated accordingly and, where
            required by law, your consent will be requested.
          </p>
        </Section>

        <Section number="11" title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time,
            particularly as Shiftnex Media formalizes its business
            structure, selects a newsletter service provider, or expands its
            offerings. Any changes will be reflected by updating the "Last
            updated" date at the top of this Policy. Material changes
            affecting how we use your personal information will be
            communicated to active subscribers via the Newsletter itself
            before taking effect.
          </p>
        </Section>

        <Section number="12" title="Contact Us">
          <p className="mb-4">
            If you have questions, concerns, or requests regarding this
            Privacy Policy or your personal information, you can reach us
            at:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
            <li>Email: shiftnexmediaofficial@gmail.com</li>
            <li>Instagram: @shiftnexmedia</li>
          </ul>
          <p>
            We aim to respond to all privacy-related inquiries within a
            reasonable timeframe.
          </p>
        </Section>

        <div className="h-px w-full bg-white/15 my-10" />

        <p className="text-white/40 text-sm leading-relaxed">
          This Privacy Policy is intended to comply with general principles
          of data protection applicable to small, individually operated
          digital publications, including reasonable practices reflected in
          frameworks such as India's Digital Personal Data Protection Act,
          2023, and, where relevant to subscribers located there, the EU
          General Data Protection Regulation (GDPR). This Policy does not
          constitute legal advice. As Shiftnex Media grows, registers as a
          formal business entity, or expands into new jurisdictions, this
          Policy should be reviewed and updated by a qualified legal
          professional.
        </p>
      </div>
    </main>
  );
}

function Section({ number, title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-[#d8c9c0] text-lg sm:text-xl font-display mb-3">
        {number}. {title}
      </h2>
      <div className="text-white/70 leading-relaxed">{children}</div>
    </div>
  );
}