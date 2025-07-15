"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";

export function ScheduleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    service: "",
    urgency: "",
    photos: [],
  });

  const [previewImages, setPreviewImages] = useState([]);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const filteredFiles = newFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    const previews = filteredFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...filteredFiles],
    }));

    setPreviewImages((prev) => [...prev, ...previews]);
  };

  const handleRemoveImage = (index) => {
    setPreviewImages((prev) => {
      URL.revokeObjectURL(prev[index].url);
      return prev.filter((_, i) => i !== index);
    });

    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        alert("reCAPTCHA verification failed. Please try again.");
        return;
      }

      const form = new FormData();
      form.append("token", token);

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "photos") {
          form.append(key, value);
        }
      });

      formData.photos.forEach((file) => {
        form.append("photos", file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: form,
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
          service: "",
          urgency: "",
          photos: [],
        });
        setPreviewImages([]);
      } else {
        alert("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    }
  };

  const services = [
    { value: "roof-washing", label: "Roof Washing" },
    { value: "driveway-washing", label: "Driveway Washing" },
    { value: "window-cleaning", label: "Window Cleaning" },
    { value: "house-washing", label: "House Washing" },
    { value: "general-repairs", label: "General Repairs" },
    { value: "blinds-installation", label: "Blinds Installation" },
    { value: "interior-painting", label: "Interior Painting" },
    { value: "exterior-painting", label: "Exterior Painting" },
    { value: "furniture-assembly", label: "Furniture Assembly" },
    { value: "wallpaper-installation", label: "Wallpaper Installation" },
    { value: "mounting", label: "Mounting" },
    { value: "pool-washing", label: "Pool Washing" },
    { value: "flooring", label: "Flooring" },
    { value: "services", label: "Other / Not Listed" },
  ];

  const urgencyOptions = [
    { value: "soon", label: "As soon as possible" },
    { value: "week", label: "This week" },
    { value: "not-sure", label: "Not sure yet" },
  ];

  return (
    <div className="bg-stone-300 company-blue-text w-screen xl:py-25 py-10">
      <h2 className="text-center text-2xl uppercase py-5">get schedule</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="xl:grid justify-items-center w-[90vw] flex flex-col xl:grid-cols-3 gap-5 xl:px-10 xl:py-12 company-blue-text">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
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

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="placeholder-sky-900 xl:w-100 h-10 shadow-lg shadow-sky-900/70 my-4 px-4 rounded-lg company-blue-text"
          >
            <option value="">Select Service</option>
            {services.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Urgency Select */}
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
            className="placeholder-sky-900 xl:w-100 h-10 shadow-lg shadow-sky-900/70 my-4 px-4 rounded-lg company-blue-text"
          >
            <option value="">When do you need the service?</option>
            {urgencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/* Drag & Drop + Preview */}
        <div className="xl:col-span-3 w-full px-4 flex flex-col items-center">
          <label className="block mb-2 font-semibold text-sky-900">
            Upload Photos (This is very helpful for correctly assessing the
            problem and the cost of the work.)
          </label>
          <div
            className="w-1/2 border-2 border-dashed border-sky-600 rounded-lg p-6 text-center bg-white hover:bg-sky-50 transition-colors cursor-pointer relative"
            onDrop={(e) => {
              e.preventDefault();
              const droppedFiles = Array.from(e.dataTransfer.files).filter(
                (f) => f.type.startsWith("image/")
              );
              handleFileChange({ target: { files: droppedFiles } });
            }}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <p className="text-sky-800 font-semibold">
              Drag & drop photos here or click to select
            </p>
            <input
              type="file"
              id="fileInput"
              name="photos"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Preview */}
            <div className="flex flex-wrap gap-4 mt-4">
              {previewImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border border-gray-300 rounded overflow-hidden"
                >
                  <img
                    src={img.url}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Button variant="blur" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}
