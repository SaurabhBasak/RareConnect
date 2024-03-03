from fastapi import FastAPI

app = FastAPI()


@app.post("/questionaire")
async def questionaire(symptoms: str):
    symptomsList = symptoms.split(", ")
    return {"symptoms": symptomsList}
