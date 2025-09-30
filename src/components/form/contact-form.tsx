'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = { name: string; email: string; message: string; };

const schema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  message: yup.string().required().label("Message"),
});

type IProps = { btnCls?: string; }

export default function ContactForm({ btnCls = '' }: IProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef<number | null>(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: yupResolver(schema) });

  // Ruim eventuele timers op bij unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Send to customer's email
      await fetch('https://api.useplunk.com/v1/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer pk_4c039fde95b0ab2e15b214e105eeb812e51a0375d0a1f6f4',
        },
        body: JSON.stringify({
          event: 'contact form submitted',
          email: data.email,
          data: { name: data.name, message: data.message }
        }),
      });

      // Send to your email
      await fetch('https://api.useplunk.com/v1/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer pk_4c039fde95b0ab2e15b214e105eeb812e51a0375d0a1f6f4',
        },
        body: JSON.stringify({
          event: 'contact form submitted',
          email: 'lv-graphics@outlook.com',
          data: { name: data.name, message: data.message }
        }),
      });

      setShowSuccess(true);
      reset();

      // Auto-dismiss after 6 seconds
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  });

  const closeBanner = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setShowSuccess(false);
  };

  return (
    <div>
      {showSuccess && (
        <div
          className="mb-4 rounded-lg p-4 bg-green-50 border border-green-200 text-green-800 relative"
          role="status"
          aria-live="polite"
        >
          <strong className="block mb-1">Thanks!</strong>
          <span>We have received your request and will contact you as soon as possible.</span>
          <button
            type="button"
            onClick={closeBanner}
            className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md px-2 py-1 text-sm"
            aria-label="Melding sluiten"
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate>
        <div className="cn-contactform-input mb-25">
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name")} type="text" placeholder="John Doe" />
          <ErrorMsg msg={errors.name?.message!} />
        </div>

        <div className="cn-contactform-input mb-25">
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} type="email" placeholder="your@email.com" />
          <ErrorMsg msg={errors.email?.message!} />
        </div>

        <div className="cn-contactform-input mb-25">
          <label htmlFor="message">Message</label>
          <textarea id="message" {...register("message")} placeholder="Tell Us About Your Project" />
          <ErrorMsg msg={errors.message?.message!} />
        </div>

        <div className="cn-contactform-btn">
          <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
