// src/email.d.ts
interface Window {
    emailjs: {
      init: (userId: string) => void;
      send: (serviceId: string, templateId: string, templateParams: any, userId: string) => Promise<any>;
    }
  }