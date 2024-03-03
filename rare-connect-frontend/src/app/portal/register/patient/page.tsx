"use client";
import { useState } from "react";

export default function Patient() {
  const [symptoms, setSymptoms] = useState([""]);

  const handleChange = (event: any) => {
    setSymptoms(event.target.value.split(", "));
  };

  async function handleSubmit() {
    // const response = await fetch(
    //   "http://127.0.0.1:8000/portal/register/patient",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({ symptoms }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //   }
    // );
    let symptomScores = {}
    let patientSymptoms = {"symptoms": symptoms}
    let allSymptoms = {'\ufeffDisease name': ['common symptoms'], 'HOD': ['balance/gait unsteadiness', 'nystagmus', 'double vision', 'fatigue', 'myoclonus', 'palatal tremor', 'ataxia/poor', 'coordination', 'headache', 'numbness', 'pins and needles feelings that don’t resolve quickly'], 'FoxP1': ['delays in early motor and language milestones', 'mild-to-severe intellectual deficits', 'speech and language impairment in all individuals regardless of cognitive ability', 'behaviour abnormalities', 'autism spectrum disorder or autistic features', 'attention-deficit/hyperactivity disorder', 'anxiety', 'repetitive behaviors', 'sleep disturbances', 'and sensory symptoms'], 'USP7': ['dysmorphic facial', 'abnormal mri', 'hypotonia', 'eye anomalies (esotropia', 'myopia', 'strabismus', 'nystagmus)', 'feeding problems (including need for special feeding technique)', 'gerd', 'seizures', 'neonatal hypotonia', 'hypogonadism', 'asthma', 'abnormal gait', 'difficulty gaining weight\n- sleep apnea/sleep disturbance', 'chronic constipation', 'short stature', 'scoliosis or kyphosis', 'neonatal poor suck', 'contractures', 'small hands', 'small feet', 'excessive weight gain', 'chronic diarrhea', 'decreased fetal movement', 'hip dysplasia', 'hearing difficulties', 'speech delay (some nonverbal)', 'developmental delay/intellectual disability', 'behavioral anomalies (aggressive behavior', 'temper tantrums', 'impulsivity', 'compulsivity', 'stubbornness', 'manipulative behavior)', 'autism spectrum disorder', 'adhd', 'skin picking'], 'CMT4J': ['progressive muscle weakness', 'muscle atrophy', 'sensory loss', 'joint deformities and instability', 'difficulty with motor skills', 'respiratory compromise', 'increased susceptibility to respiratory infections'], 'Alport Syndrome': ['proteinuria', 'hypertension', 'hearing loss', 'vision problems', 'hematuria (blood in the urine)'], 'Dup15q': ['hypotonia and motor delays', 'intellectual disability', 'autism spectrum disorder (asd)', 'epilepsy including infantile spasms', 'subtle facial features (e.g.', 'flat nasal bridge', 'epicanthic folds)', 'hearing loss from ear infections', 'vision problems like strabismus', 'gastrointestinal issues', 'sensory processing disorders', 'attention deficit disorders', 'and anxiety disorders'], 'ADCY5': ['-'], '22q11.2': ['-'], 'ABL+': ['-'], 'ALD': ['-'], 'ALS': ['-'], "Behcet's Disease": ['balance/gait unsteadiness', 'nystagmus', 'double vision', 'fatigue', 'myoclonus', 'palatal tremor', 'ataxia/poor', 'coordination', 'headache', 'numbness', 'pins and needles feelings that don’t resolve quickly'], 'Infantile Neuroaxonal Dystrophy': ['-']};

    for (let [key, value] of Object.entries(allSymptoms)) {
        for (let pSymptom of patientSymptoms["symptoms"]) {
            if (value.includes(pSymptom)) {
                if (symptomScores.hasOwnProperty(key)) {
                    symptomScores[key] += 1;
                } else {
                    symptomScores[key] = 1;
                }
            }
        }
    }
    
    symptomScores = Object.entries(symptomScores).sort((a, b) => b[1] - a[1]).reduce((obj, [key, value]) => ({...obj, [key]: value}), {});

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mt-10">Patient Request Form</h1>
      <div className="flex gap-10 p-5">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          className="border-2 border-blue-400 rounded-full px-2"
        />
      </div>
      <div className="flex gap-10 p-5">
        <label htmlFor="name">Birth</label>
        <input
          type="name"
          className="border-2 border-blue-400 rounded-full px-2"
        />
      </div>
      <div className="flex gap-10 p-5">
        <label htmlFor="name">Description</label>
        <input
          type="name"
          className="border-2 border-blue-400 rounded-full px-2"
        />
      </div>
      <div className="flex gap-10 p-5">
        <label htmlFor="name">Symptoms (separate by commas)</label>
        <input
          type="name"
          className="border-2 border-blue-400 rounded-full px-2"
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="flex justify-center border-2 border-blue-500 p-2 rounded-full bg-blue-500 text-white"
      >
        Submit
      </button>
    </div>
  );
}
