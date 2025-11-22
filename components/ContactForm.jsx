"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
        });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ display: "grid", gap: 12 }}>
      <div className="form-row">
        <input name="name" className="input" placeholder="?????" required />
        <input name="email" type="email" className="input" placeholder="?????? ??????????" required />
      </div>
      <input name="subject" className="input" placeholder="???????" />
      <textarea name="message" className="textarea" placeholder="??????" required />
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button className="button" disabled={status === "loading"}>
          {status === "loading" ? "???? ???????..." : "?????"}
        </button>
        {status === "success" && <span style={{ color: "#7bdcb5" }}>?? ??????? ?????</span>}
        {status === "error" && <span style={{ color: "#ff9f9f" }}>??? ??? ??? ?????</span>}
      </div>
    </form>
  );
}
