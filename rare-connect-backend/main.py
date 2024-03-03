from fastapi import FastAPI
import csv
#import numpy as np

app = FastAPI()
csv_file_path = "./RareDiseases.csv"


@app.post("/questionaire")
def getSymptomsCsv():
    symptomArray = {}
    with open(csv_file_path, mode = 'r', encoding='utf-8') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader: # cycles through possible diseases
            #print(row[1])
            symptomArray.append(row[1].split(", "))
    return symptomArray

async def findSimilarSymptoms(userSymptoms: str):
    symptomScores = [0] * 14
    symptomMaxScores = [0] * 14
    diseaseSymptoms = getSymptomsCsv()
    

print(getSymptomsCsv())
        #for() # cycle through the symptoms for possible diseases, split by commas
        # compare symptoms with the user's symptoms
