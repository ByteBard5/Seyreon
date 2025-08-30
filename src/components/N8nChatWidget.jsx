import { useEffect } from "react";

export default function N8nChatWidget() {
  useEffect(() => {
    // Dynamically load the n8n CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // Add custom CSS variables + overrides
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        /* Brand colors */
        --chat--color-primary: #9333ea; /* Purple accent */
        --chat--color-primary-shade-50: #7e22ce;
        --chat--color-primary-shade-100: #6b21a8;

        --chat--color-secondary: #20b69e; /* Teal user bubble */
        --chat--color-secondary-shade-50: #1ca08a;

        --chat--color-white: #ffffff;
        --chat--color-light: #111827; /* Dark background instead of white */
        --chat--color-light-shade-50: #1f2937;
        --chat--color-light-shade-100: #374151;
        --chat--color-medium: #9ca3af;
        --chat--color-dark: #0e0e0e; /* Match site bg */
        --chat--color-disabled: #6b7280;
        --chat--color-typing: #9ca3af;

        /* Layout */
        --chat--window--width: 350px;
        --chat--window--height: 500px;
        --chat--spacing: 1rem;
        --chat--border-radius: 1rem;
        --chat--transition-duration: 0.25s;

        /* Header */
        --chat--header-height: auto;
        --chat--header--padding: var(--chat--spacing);
        --chat--header--background: linear-gradient(135deg, #9333ea, #3b82f6);
        --chat--header--color: #ffffff;
        --chat--heading--font-size: 1.1em;
        --chat--subtitle--line-height: 1.6;

        /* Messages */
        --chat--message--font-size: 0.95rem;
        --chat--message--padding: 0.7rem 1rem;
        --chat--message--border-radius: 1rem;
        --chat--message-line-height: 1.5;
        --chat--message--bot--background: #1f2937; /* dark gray bubble */
        --chat--message--bot--color: #f9fafb;
        --chat--message--user--background: linear-gradient(135deg, #9333ea, #3b82f6);
        --chat--message--user--color: #ffffff;

        /* Toggle button */
        --chat--toggle--background: linear-gradient(135deg, #9333ea, #3b82f6);
        --chat--toggle--hover--background: #7e22ce;
        --chat--toggle--active--background: #6b21a8;
        --chat--toggle--color: #ffffff;
        --chat--toggle--size: 56px;
      }

      /* Extra custom overrides for cooler look */
      .chat__header {
        font-weight: 600;
        letter-spacing: 0.5px;
        border-bottom: none;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      }

      .chat__message--bot {
        border: 1px solid #374151;
      }

      .chat__message--user {
        font-weight: 500;
        box-shadow: 0 2px 8px rgba(147, 51, 234, 0.5);
      }

      .chat__toggle {
        box-shadow: 0 4px 12px rgba(147, 51, 234, 0.6);
      }

      .chat__textarea {
        border-radius: 9999px !important; /* pill shape */
        padding: 0.6rem 1rem !important;
        border: 1px solid #374151 !important;
        background: #1f2937 !important;
        color: #f9fafb !important;
      }

      .chat__textarea::placeholder {
        color: #9ca3af !important;
      }
    `;
    document.head.appendChild(style);

    // Dynamically load the n8n script
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://n8n.seyreon.com/webhook/ac0e66d5-0ec3-46de-95b9-b78be0ba3b6b/chat',
        initialMessages: [
          'Hi there! 👋',
          'I’m your Seyreon Assistant. How can I help you today?'
        ],
        i18n: {
          en: {
            title: 'Hi there! 👋',
            subtitle: "Start a chat. We're here to help you 24/7.",
            inputPlaceholder: 'Type your question..',
          },
        }
      });
    `;
    document.body.appendChild(script);

    // cleanup (optional)
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
