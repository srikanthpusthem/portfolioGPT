from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()  # Make sure your .env file is in the same directory or specify its path

app = FastAPI()

# Enable CORS for your frontend (adjust the allowed origins as necessary)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variable to store resume details
resume_details = "No resume provided yet."

# Pydantic model for updating resume
class ResumeUpdate(BaseModel):
    resume: str

@app.post("/update_resume")
async def update_resume(update: ResumeUpdate = Body(...)):
    global resume_details
    resume_details = update.resume
    return {"message": "Resume updated successfully."}

# Pydantic model for chat requests
class ChatRequest(BaseModel):
    prompt: str

@app.post("/chat_hf")
async def chat_hf(request: ChatRequest = Body(...)):
    # Construct a detailed prompt that includes the current resume details
    modified_prompt = (
        "You are SrikanthGPT, an intelligent and friendly chatbot for Srikanth's portfolio website. "
        "Below is the current resume information:\n" + resume_details + "\n"
        "Provide clear, accurate, and succinct answers about Srikanth's projects, skills, and professional background. "
        "Do not repeat the question in your answer. "
        "Question: " + request.prompt + " Answer:"
    )
    
    # Format the message as required by the Qwen API via OpenRouter
    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": modified_prompt
                }
            ]
        }
    ]
    
    # Build the payload with generation parameters
    payload = {
        "model": "qwen/qwen-vl-plus:free",
        "messages": messages,
        "max_new_tokens": 100,
        "temperature": 0.3,
        "top_p": 0.7
    }
    
    # Qwen API endpoint via OpenRouter
    api_url = "https://openrouter.ai/api/v1/chat/completions"
    
    # Retrieve the OpenRouter API key from your .env file
    token = os.getenv("OPENROUTER_API_KEY")
    if not token:
        raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY is not set")
    
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(api_url, headers=headers, json=payload)
    print(response)  # Debug print
    
    if response.status_code == 200:
        data = response.json()
        print("Qwen API response data:", data)  # Debug print
        
        # Extract the assistant's answer from the response
        try:
            answer = data["choices"][0]["message"]["content"].strip()
        except (KeyError, IndexError):
            answer = ""
        
        # Remove the modified prompt if it is repeated in the output
        if answer.startswith(modified_prompt):
            answer = answer[len(modified_prompt):].strip()
        if "Answer:" in answer:
            answer = answer.split("Answer:", 1)[1].strip()
        
        if not answer:
            answer = "No output"
        
        return {"answer": answer}
    else:
        error_detail = f"Status: {response.status_code}, Response: {response.text}"
        print("Qwen API Error:", error_detail)  # Debug print
        raise HTTPException(status_code=response.status_code, detail=f"Error from Qwen API: {error_detail}")