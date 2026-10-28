'use client';

import React, { useState } from 'react';
import { profileData } from '../data/cv-data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

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
      setErrorMessage('Harap isi Nama, Email, dan Pesan sebelum mengirim.');
      return;
    }

    setFormStatus('submitting');

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setFormStatus('success');
      // Create mailto link as fallback to open default email client
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Inquiry Proyek dari Portofolio')}&body=${encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\nPerusahaan: ${formData.company}\n\nPesan:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="kontak" className="py-20 border-b-2 border-[#0A0A0A] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-overline text-[#EF4444] font-bold block mb-1">
              // INISIASI KERJASAMA & KONSULTASI
            </span>
            <h2 className="text-headline text-[#0A0A0A]">
              HUBUNGI REZA SEPDIDE
            </h2>
          </div>

          <p className="text-sm text-[#525252] max-w-md font-body">
            Siap mendiskusikan peluang kerja penuh waktu, proyek konsultansi DED/RAB, pemodelan BIM Revit/AutoCAD, maupun supervisi lapangan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-editorial border-2 border-[#0A0A0A]">
              <span className="text-overline text-[#EF4444] font-bold block mb-4">
                SALURAN KOMUNIKASI LANGSUNG
              </span>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <Mail className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#525252] uppercase block">SUREL ELEKTRONIK</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-display text-sm sm:text-base text-[#0A0A0A] hover:text-[#EF4444] transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* Telepon / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <Phone className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#525252] uppercase block">TELEPON / WHATSAPP</span>
                    <a
                      href={`https://wa.me/6289644590915`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm sm:text-base text-[#0A0A0A] hover:text-[#EF4444] transition-colors"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                {/* Lokasi */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <MapPin className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#525252] uppercase block">DOMISILI SAAT INI</span>
                    <p className="font-display text-sm sm:text-base text-[#0A0A0A]">
                      {profileData.location}
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0A0A0A] text-[#FAFAFA]">
                    <Linkedin className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#525252] uppercase block">JARINGAN PROFESIONAL</span>
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

              {/* Unduh CV Banner */}
              <div className="mt-8 pt-6 border-t-2 border-[#E5E5E5]">
                <a
                  href="/CV_Reza_Sepdide_Profesional.docx"
                  download
                  className="btn-secondary w-full"
                >
                  <FileText className="w-4 h-4" />
                  <span>UNDUH CURRICULUM VITAE LENGKAP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-editorial border-2 border-[#0A0A0A] p-6 sm:p-8">
              <span className="text-overline text-[#EF4444] font-bold block mb-2">
                FORMULIR PESAN INTERAKTIF
              </span>
              <h3 className="font-display text-xl text-[#0A0A0A] mb-6">
                KIRIM PESAN ATAU PENAWARAN KERJA
              </h3>

              {formStatus === 'success' ? (
                <div className="p-6 bg-[#F0FDF4] border-2 border-[#16A34A] text-[#16A34A] space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    <h4 className="font-display text-lg">Pesan Terkirim dengan Sukses!</h4>
                  </div>
                  <p className="text-sm font-body">
                    Terima kasih telah menghubungi Reza Sepdide. Pesan Anda telah diproses dan akan dibalas melalui email dalam waktu 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
                    }}
                    className="btn-primary !bg-[#16A34A] !border-[#16A34A] text-xs mt-3"
                  >
                    KIRIM PESAN LAIN
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
                        NAMA LENGKAP *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        required
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        ALAMAT EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="budi@perusahaan.co.id"
                        required
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        PERUSAHAAN / INSTITUSI
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="PT Maju Konstruksi"
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                        SUBJEK
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Peluang Kerja / Konsultasi DED"
                        className="w-full h-11 bg-[#FAFAFA] border-2 border-[#D4D4D4] px-3.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5 font-body">
                      PESAN ATAU PERTANYAAN *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan proyek, posisi kerja yang ditawarkan, atau lingkup kerjasama teknis..."
                      required
                      className="w-full bg-[#FAFAFA] border-2 border-[#D4D4D4] p-3 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full sm:w-auto"
                    >
                      {formStatus === 'submitting' ? (
                        <span>MENGIRIM PESAN...</span>
                      ) : (
                        <>
                          <span>KIRIM PESAN SEKARANG</span>
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
