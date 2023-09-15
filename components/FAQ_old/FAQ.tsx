export default function FAQ(faq: any) {
  return (
    <>
      <dt aria-expanded={faq.open ? "true" : "false"}>
        {faq.question}
        <img
          src={`/${faq.open ? "minus" : "plus"}.svg`}
          alt={faq.open ? "Collapse" : "Expand"}
          width="20"
          height="20"
        />
      </dt>
      <dd className={!faq.open ? "hidden" : undefined}>{faq.answer}</dd>
    </>
  );
}
