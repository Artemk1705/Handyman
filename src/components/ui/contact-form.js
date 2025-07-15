"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";

export function FormContact() {
  const customerOptions = [
    {
      id: "new customer",
      title: "New Customer",
      specs: "We never worked with you before",
    },
    {
      id: "current customer",
      title: "Current Customer",
      specs: "We wroked with your problem before",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    clientType: "",
  });

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Отправка данных на сервер
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset(); // очищаем после выполнения

      if (!token) {
        alert("reCAPTCHA verification failed. Please try again.");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, token }),
      });

      if (response.ok) {
        alert("Форма успешно отправлена!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          clientType: "",
        });
      } else {
        alert("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    }
  };

  return (
    <div className="bg-stone-300 company-blue-text w-screen xl:py-25 py-10">
      <h2 className="text-center text-2xl uppercase py-5">CONTACT US TODAY</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="xl:grid justify-items-center w-[90vw] flex flex-col  xl:grid-cols-3 gap-5 xl:px-10 xl:py-12 company-blue-text mb-6">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phone}
          />
          <Input
            id="addressLine1"
            name="addressLine1"
            type="text"
            placeholder="Address Line 1"
            onChange={handleChange}
            value={formData.addressLine1}
            required
          />
          <Input
            id="addressLine2"
            name="addressLine2"
            type="text"
            placeholder="Address Line 2"
            onChange={handleChange}
            value={formData.addressLine2}
          />
          <Input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            value={formData.city}
            required
          />
        </div>

        <Button variant="blur" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
