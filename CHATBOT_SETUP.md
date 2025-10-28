# DataVruti Chatbot Setup Guide

## Overview

The DataVruti website now includes an AI-powered chatbot using **Groq API** with the **Llama 3.1 70B** model. The chatbot is trained on all website content and can help visitors with:

- Finding information about services
- Learning about available job positions
- Understanding the hiring process
- Getting answers about DataVruti's offerings
- Navigating to the right pages

---

## Setup Instructions

### 1. Get Groq API Key

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (you won't be able to see it again)

### 2. Configure Environment Variable

1. Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

2. Add your Groq API key:
   ```env
   GROQ_API_KEY=your_actual_groq_api_key_here
   ```

3. Make sure `.env.local` is in your `.gitignore` (it should be by default)

### 3. Install Dependencies

Dependencies are already installed, but if needed:
```bash
npm install groq-sdk
```

### 4. Start the Development Server

```bash
npm run dev
```

The chatbot will now be available on all pages!

---

## Features

### User Interface
- **Floating button**: Fixed position in bottom-right corner
- **Smooth animations**: Slide-up animation when opening
- **Responsive design**: Works on mobile and desktop
- **Notification indicator**: Red dot to catch attention
- **Message history**: Conversation persists while window is open

### Chatbot Capabilities
- **Context-aware**: Knows all about DataVruti services, jobs, and processes
- **Smart routing**: Directs users to appropriate pages (/contact, /candidates)
- **Professional tone**: Friendly yet professional communication
- **Real-time responses**: Fast responses powered by Groq's infrastructure

### Technical Features
- **Groq API integration**: Using Llama 3.1 70B model
- **Next.js API route**: Serverless function at `/api/chat`
- **Client-side component**: React component with state management
- **Error handling**: Graceful error messages
- **Loading states**: Visual feedback while waiting for responses

---

## File Structure

```
/app
  /api
    /chat
      route.ts          # Groq API integration and chat endpoint

/components
  Chatbot.tsx           # Main chatbot UI component

/styles
  globals.css           # Animations for chatbot

.env.local              # Environment variables (create this)
.env.example            # Example environment file
CHATBOT_SETUP.md        # This file
WEBSITE_CONTENT.md      # Content used to train the chatbot
```

---

## API Route Details

**Endpoint**: `POST /api/chat`

**Request Body**:
```json
{
  "messages": [
    {
      "role": "user",
      "content": "What services do you offer?"
    }
  ]
}
```

**Response**:
```json
{
  "message": "We specialize in three main services...",
  "success": true
}
```

**Model**: `llama-3.1-70b-versatile`
- Fast inference
- High-quality responses
- Good context understanding

---

## Customization

### Modify System Prompt

Edit the `SYSTEM_PROMPT` in `/app/api/chat/route.ts` to change how the chatbot behaves or add more information.

### Change Model

In `/app/api/chat/route.ts`, change the model parameter:
```typescript
model: 'llama-3.1-70b-versatile', // Try: llama-3.1-8b-instant for faster responses
```

Available models:
- `llama-3.1-70b-versatile` - Best quality (current)
- `llama-3.1-8b-instant` - Faster responses
- `mixtral-8x7b-32768` - Good balance

### Styling

Edit `/components/Chatbot.tsx` to customize:
- Colors and gradients
- Button position
- Window size
- Animation timing

---

## Usage Tips

### For Users
1. Click the chat icon in the bottom-right corner
2. Type your question or select from quick options
3. Press Enter or click send
4. View responses and continue the conversation

### Common Questions Handled
- "What services do you offer?"
- "How can I apply for a job?"
- "What is the hiring process?"
- "What technologies do you work with?"
- "How long does it take to hire?"
- "What industries do you serve?"
- "Tell me about data engineering roles"
- "How do I contact you?"

---

## Troubleshooting

### Chatbot not appearing
- Check if Chatbot component is imported in layout.tsx
- Verify the component is rendering
- Check browser console for errors

### API errors
- Verify GROQ_API_KEY is set in .env.local
- Check API key is valid at Groq console
- Ensure you haven't exceeded rate limits
- Check network tab for API call status

### Slow responses
- Groq is usually fast; check your internet connection
- Consider switching to a smaller model for faster inference
- Check Groq status page for any incidents

### Deployment Issues
- Make sure to add GROQ_API_KEY to your deployment environment variables
- On Vercel: Settings → Environment Variables → Add GROQ_API_KEY
- Redeploy after adding the environment variable

---

## Rate Limits

Groq has generous free tier limits:
- Check [Groq Pricing](https://wow.groq.com/pricing/) for current limits
- Implement rate limiting if needed for production
- Monitor usage in Groq console

---

## Future Enhancements

Possible improvements:
- [ ] Add conversation history (store in database)
- [ ] Implement typing indicators
- [ ] Add quick reply buttons for common questions
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Analytics tracking for popular questions
- [ ] Fallback to email/contact form if chatbot can't help
- [ ] Integration with CRM for lead capture

---

## Security Considerations

1. **Never expose API key**: Keep GROQ_API_KEY in .env.local, never commit to git
2. **Input validation**: API route validates message format
3. **Rate limiting**: Consider adding rate limiting for production
4. **Error handling**: Graceful error messages, no sensitive data exposure
5. **CORS**: API route is same-origin by default in Next.js

---

## Support

If you encounter issues:
1. Check Groq documentation: https://console.groq.com/docs
2. Verify API key is valid
3. Check browser console for errors
4. Review Next.js API routes documentation

---

## Credits

- **AI Model**: Llama 3.1 70B by Meta
- **API Provider**: Groq
- **Framework**: Next.js 14
- **UI**: Custom React components with Tailwind CSS

---

**Last Updated**: October 28, 2025
