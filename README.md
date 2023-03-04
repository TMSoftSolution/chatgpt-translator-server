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

#### 1. chatbot

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

#### 2. translator

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

#### 3. Image Generator

```bash
http://localhost:3000/api/generate-image
```
Params
```json
{
    "query": "doc eating hamburger",
}
```

Result
```json
{
    "result": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Q1aMbbwmthFymBoCilnCWoAW/user-8u9iL8u2hwIrMx35EU2dUK8S/img-BZApLoSojTRA9TXeFgFEMMs7.png?st=2023-03-04T09%3A11%3A58Z&se=2023-03-04T11%3A11%3A58Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-03T15%3A17%3A44Z&ske=2023-03-04T15%3A17%3A44Z&sks=b&skv=2021-08-06&sig=nbgnsTsPCGQVhxawVVHfsLvdE46d1N/Qqfs%2BkbUY5l4%3D"
}
```
