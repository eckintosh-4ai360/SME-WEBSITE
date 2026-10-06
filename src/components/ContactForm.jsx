import { useRef, useState } from "react";
import { CircleAlert, CircleCheck, Send } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons.jsx";
import { services } from "../data/content.js";
import { site, whatsappLink } from "../data/site.js";

// Set VITE_CONTACT_ENDPOINT (see .env.example) to post messages to a form service such as Formspree.
// Without it, submitting opens the visitor's email app with the message filled in.
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

const empty = { name: "", email: "", company: "", phone: "", service: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Please enter your name.";
  if (!v.email.trim()) errors.email = "Please enter your email address.";
  else if (!emailPattern.test(v.email.trim())) errors.email = "That email address doesn't look right.";
  if (v.message.trim().length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  return errors;
}

function compose(v) {
  return [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.company ? `Company / site: ${v.company}` : null,
    v.phone ? `Phone: ${v.phone}` : null,
    v.service ? `Interested in: ${v.service}` : null,
    "",
    v.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error
  const formRef = useRef(null);

  const errors = submitted ? validate(values) : {};
  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    if (Object.keys(found).length) {
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    if (!endpoint) {
      const subject = `Website enquiry${values.service ? ` — ${values.service}` : ""} from ${values.name}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose(values))}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setValues(empty);
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  }

  const field = (name, label, props = {}) => (
    <div className={`field${props.full ? " full" : ""}`}>
      <label htmlFor={`f-${name}`}>
        {label} {props.required && <em aria-hidden="true">*</em>}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={`f-${name}`}
          name={name}
          value={values[name]}
          onChange={update}
          placeholder={props.placeholder}
          required={props.required}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `f-${name}-err` : undefined}
        />
      ) : (
        <input
          id={`f-${name}`}
          name={name}
          type={props.type ?? "text"}
          value={values[name]}
          onChange={update}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          required={props.required}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `f-${name}-err` : undefined}
        />
      )}
      {errors[name] && (
        <span className="field-error" id={`f-${name}-err`}>
          {errors[name]}
        </span>
      )}
    </div>
  );

  const waText = values.message.trim() ? compose(values) : undefined;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        {field("name", "Full name", { required: true, placeholder: "e.g. Kwame Mensah", autoComplete: "name" })}
        {field("email", "Email address", { required: true, type: "email", placeholder: "you@company.com", autoComplete: "email" })}
        {field("company", "Company / mine site", { placeholder: "Company or site name", autoComplete: "organization" })}
        {field("phone", "Phone number", { type: "tel", placeholder: "+233 …", autoComplete: "tel" })}
        <div className="field full">
          <label htmlFor="f-service">What do you need help with?</label>
          <select id="f-service" name="service" value={values.service} onChange={update}>
            <option value="">Choose a service (optional)</option>
            {services.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </div>
        {field("message", "Message", {
          required: true,
          full: true,
          as: "textarea",
          placeholder: "Tell us about your operation — site type, number of workers, gates — and what you need.",
        })}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"} <Send aria-hidden="true" />
        </button>
        <a className="btn btn-ghost" href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Send via WhatsApp
        </a>
      </div>

      <div role="status" aria-live="polite">
        {status === "sent" && (
          <p className="form-status ok">
            <CircleCheck aria-hidden="true" /> Thank you — your message has been sent. We'll reply within one business day.
          </p>
        )}
        {status === "mailto" && (
          <p className="form-status ok">
            <CircleCheck aria-hidden="true" /> Your email app should now be open with your message ready — just press
            send. Nothing opened? Use “Send via WhatsApp” or email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {status === "error" && (
          <p className="form-status error">
            <CircleAlert aria-hidden="true" /> Sorry, your message couldn't be sent. Please try WhatsApp or call{" "}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
          </p>
        )}
      </div>

      <p className="form-note">
        Need urgent help? Call our 24/7 hotline: <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
      </p>
    </form>
  );
}
