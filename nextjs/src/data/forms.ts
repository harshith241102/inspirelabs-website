import type { FormConfig } from "@/types";

const CONSENT_TEXT =
  "I agree to the Privacy Policy and consent to Inspirelabs processing my data for this inquiry.";

const HONEYPOT_FIELD = "company_website_confirm";

export const partnerForm: FormConfig = {
  id: "partner",
  endpoint: "/api/forms/partner",
  successRedirect: "/contact/thank-you",
  consentText: CONSENT_TEXT,
  honeypotField: HONEYPOT_FIELD,
  fields: [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "lastName", label: "Last name", type: "text", required: true },
    { name: "email", label: "Work email", type: "email", required: true },
    { name: "phone", label: "Phone number", type: "tel", required: false },
    { name: "company", label: "Company", type: "text", required: true },
    { name: "role", label: "Your role", type: "text", required: true },
    {
      name: "partnerType",
      label: "Partnership type",
      type: "select",
      required: true,
      options: [
        "Brand partnership",
        "Agency partnership",
        "Technology partnership",
        "Affiliate partnership",
        "Other",
      ],
    },
    {
      name: "budget",
      label: "Estimated monthly budget",
      type: "select",
      required: false,
      options: [
        "Under $5,000",
        "$5,000 - $25,000",
        "$25,000 - $100,000",
        "$100,000+",
        "Prefer not to say",
      ],
    },
    { name: "website", label: "Website", type: "text", required: false },
    {
      name: "message",
      label: "Tell us about your goals",
      type: "textarea",
      required: true,
    },
  ],
};

export const briefingForm: FormConfig = {
  id: "briefing",
  endpoint: "/api/forms/briefing",
  successRedirect: "/strategic-relations/thank-you",
  consentText: CONSENT_TEXT,
  honeypotField: HONEYPOT_FIELD,
  fields: [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "lastName", label: "Last name", type: "text", required: true },
    { name: "email", label: "Work email", type: "email", required: true },
    { name: "phone", label: "Phone number", type: "tel", required: false },
    { name: "company", label: "Company or fund", type: "text", required: true },
    { name: "role", label: "Your role", type: "text", required: true },
    {
      name: "interest",
      label: "Area of interest",
      type: "select",
      required: true,
      options: [
        "Strategic investment",
        "Acquisition",
        "Strategic partnership",
        "Advisory",
        "Other",
      ],
    },
    {
      name: "context",
      label: "Brief context",
      type: "textarea",
      required: true,
    },
    {
      name: "nda",
      label: "NDA preference",
      type: "select",
      required: false,
      options: [
        "Mutual NDA preferred",
        "One-way NDA acceptable",
        "No NDA needed at this stage",
      ],
    },
  ],
};

export const generalForm: FormConfig = {
  id: "general",
  endpoint: "/api/forms/general",
  successRedirect: "/contact/thank-you",
  consentText: CONSENT_TEXT,
  honeypotField: HONEYPOT_FIELD,
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "topic",
      label: "Topic",
      type: "select",
      required: true,
      options: [
        "General inquiry",
        "Career inquiry",
        "Press inquiry",
        "Platform support",
        "Other",
      ],
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
    },
    { name: "phone", label: "Phone (optional)", type: "tel", required: false },
  ],
};

export const pressForm: FormConfig = {
  id: "press",
  endpoint: "/api/forms/press",
  successRedirect: "/press/thank-you",
  consentText: CONSENT_TEXT,
  honeypotField: HONEYPOT_FIELD,
  fields: [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "lastName", label: "Last name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "outlet", label: "Publication or outlet", type: "text", required: true },
    { name: "role", label: "Your role", type: "text", required: true },
    {
      name: "topic",
      label: "What is your inquiry about?",
      type: "textarea",
      required: true,
    },
    { name: "deadline", label: "Deadline (if any)", type: "text", required: false },
  ],
};
