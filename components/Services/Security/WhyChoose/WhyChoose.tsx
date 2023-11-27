import Card from "../../Reusables/Card";

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Security ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Elevate your cybersecurity posture with Hyperce Security - the
            ultimate solution for fortifying your digital fortress. Benefit from
            our expertise in Web Application Firewall (WAF), DDoS Protection,
            End-to-End Encryption, Penetration Testing, Security Audits, PCI DSS
            Compliance, Multi-Factor Authentication (MFA), Secure Code Review,
            Intrusion Detection and Prevention Systems (IDPS), and Data Backup
            and Disaster Recovery to secure your digital landscape. Trust in our
            commitment to proactive defense and compliance to drive your
            organization towards unprecedented security. Choose Hyperce Security
            for a fortified digital presence and resilient operations.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: "10x", des: "Risk Mitigation" },
              { num: "10x", des: "Compliance Assurance" },
              { num: "50x", des: "Threat Detection" },
              { num: "20x", des: "Incident Response" },
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
