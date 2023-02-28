## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### This is just API for chatGTP translator.

1. ask-a-question 

```bash
http://localhost:3000/api/ask-a-question
```
Params
```json
{
    "question": "What is chatGPT?"
}
```

Result
```json
{
    "result": "\n\nChatGPT is a natural language processing (NLP) based chatbot platform. It combines GPT-3, the state-of-the-art language model, with proprietary AI and NLP technologies to create a powerful, engaging conversation experience for end users. ChatGPT enables developers to create conversational experiences with minimal technical effort, enabling them to rapidly deploy bots and chatbot-driven applications."
}
```

2. translate

```bash
http://localhost:3000/api/translate
```
Params
```json
{
    "query": "Tell me what is chatGPT.",
    "language": "Spanish"
}
```

Result
```json
{
    "result": "\n\nDime qué es chatGPT."
}
```