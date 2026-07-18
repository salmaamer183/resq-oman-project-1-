# RESQ OMAN

**RESQ OMAN** is an AI-assisted prototype for emergency response and search & rescue operations. The project demonstrates how artificial intelligence can support emergency teams through a modern command center dashboard.

## Features

* Emergency Command Center dashboard
* AI-assisted rescue recommendations (simulation)
* Incident monitoring interface
* Interactive charts and statistics
* Multi-role login (Demo)
* Arabic and English language support
* Responsive user interface

## Project Structure

```text
resq-oman/
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
└── backend/
    ├── app/
    ├── requirements.txt
    └── ...
```

## Technologies

* HTML5
* CSS3
* JavaScript
* Chart.js
* Python (FastAPI)

## Getting Started

### Frontend

Open the following file in your browser:

```text
frontend/index.html
```

### Backend

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

## Disclaimer

This project is an academic prototype developed for demonstration purposes. It uses simulated data and does not connect to real emergency services or production databases.

## License

This project is intended for educational and academic use.
