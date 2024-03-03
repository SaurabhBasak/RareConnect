from fastapi import FastAPI
import csv
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000/", "http://localhost:3000/portal/register/patient"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app = FastAPI()
csv_file_path = "./RareDiseases.csv"


@app.post("/questionaire")
def getSymptomsCsv():
    symptomArray = {}
    with open(csv_file_path, mode="r", encoding="utf-8") as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            symptomArray[row[0]] = row[1].lower().split(", ")
    return symptomArray


@app.post("/portal/register/patient")
def findSimilarSymptoms(patientSymptoms: dict):
    print(patientSymptoms)
    symptomScores = {}
    diseases = getSymptomsCsv()
    print(diseases)
    # patientSymptoms = {"symptoms": ["double vision", "cough", "headache", ""]}
    # print(patientSymptoms)

    for dSymptoms in diseases:
        for pSymptom in patientSymptoms["symptoms"]:
            if pSymptom in diseases[dSymptoms]:
                if dSymptoms in symptomScores:
                    symptomScores[dSymptoms] += 1
                else:
                    symptomScores[dSymptoms] = 1
    symptomScores = dict(
        sorted(symptomScores.items(), key=lambda item: item[1], reverse=True)
    )
    return symptomScores

findSimilarSymptoms({"symptoms": ["double vision", "cough", "headache"]})
