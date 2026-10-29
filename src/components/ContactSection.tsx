'use client';

import React, { useState } from 'react';
import { profileData } from '../data/cv-data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, FileText, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in your Name, Email, and Message before sending.');
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        formData.subject || 'Engineering Inquiry from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // DIRECT INITIATIVE & CONSULTATION
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              LET&apos;S BUILD TOGETHER
            </h2>
          </div>

          <p className="text-sm text-[#404040] max-w-md font-body leading-relaxed">
            Available for full-time civil engineering positions, DED &amp; BoQ quantity surveying consultancies, Revit/AutoCAD BIM modeling, and on-site field supervision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-editorial border-2 border-[#0A0A0A]">
              <span className="text-overline text-[#EF4444] font-bold block mb-4">
                DIRECT COMMUNICATION CHANNELS
              </span>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <Mail className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#404040] uppercase block font-bold">ELECTRONIC MAIL</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-display text-sm sm:text-base text-[#0A0A0A] hover:text-[#EF4444] transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <Phone className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#404040] uppercase block font-bold">PHONE &amp; WHATSAPP</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-sm sm:text-base text-[#0A0A0A] hover:text-[#EF4444] transition-colors"
                      >
                        {profileData.phone}
                      </a>
                      <a
                        href="https://wa.me/6289644590915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono bg-[#16A34A] text-white px-2 py-0.5 font-bold hover:bg-[#15803d] transition-colors"
                      >
                        CHAT ON WA
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <MapPin className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#404040] uppercase block font-bold">LOCATION &amp; RELOCATION</span>
                    <p className="font-display text-sm sm:text-base text-[#0A0A0A]">
                      {profileData.location}
                    </p>
                    <span className="text-xs font-mono text-[#404040] mt-0.5 block font-medium">
                      Open to domestic &amp; international site deployment
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <Linkedin className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#404040] uppercase block font-bold">PROFESSIONAL NETWORK</span>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm sm:text-base text-[#0A0A0A] hover:text-[#EF4444] transition-colors inline-flex items-center gap-1"
                    >
                      linkedin.com/in/rezasepdide
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Resume Banner */}
              <div className="mt-8 pt-6 border-t-2 border-[#E5E5E5] space-y-2">
                <a
                  href="/CV_Reza_Sepdide_English.docx"
                  download
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>DOWNLOAD COMPLETE CV (ENGLISH .DOCX)</span>
                </a>
                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="btn-secondary w-full text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>DOWNLOAD PROFESSIONAL CV (INDONESIAN .DOCX)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-editorial border-2 border-[#0A0A0A] p-6 sm:p-8">
              <span className="text-overline text-[#EF4444] font-bold block mb-2">
                INTERACTIVE MESSAGE DISPATCH
              </span>
              <h3 className="font-display text-xl text-[#0A0A0A] mb-6">
                SEND A MESSAGE OR WORK PROPOSAL
              </h3>

              {formStatus === 'success' ? (
                <div className="p-6 bg-[#F0FDF4] border-2 border-[#16A34A] text-[#16A34A] space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    <h4 className="font-display text-lg">Message Dispatched Successfully!</h4>
                  </div>
                  <p className="text-sm font-body text-[#15803d]">
                    Thank you for reaching out to Reza Sepdide. Your inquiry has been forwarded and will be answered directly via email within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
                    }}
                    className="btn-primary !bg-[#16A34A] !border-[#16A34A] text-xs mt-3"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3 bg-[#FEF2F2] border-2 border-[#EF4444] text-[#EF4444] text-xs font-mono font-bold">
                      ⚠ {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Anderson"
                        required
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@constructionfirm.com"
                        required
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Pacific Infrastructure Ltd."
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        INQUIRY SUBJECT
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Quantity Surveying & Scheduling Role"
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                      MESSAGE OR PROJECT SCOPE *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your project requirements, timeline, open engineering roles, or consulting scope..."
                      required
                      className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] p-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors resize-y font-body"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full sm:w-auto"
                    >
                      {formStatus === 'submitting' ? (
                        <span>DISPATCHING MESSAGE...</span>
                      ) : (
                        <>
                          <span>SEND INQUIRY DIRECTLY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
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
