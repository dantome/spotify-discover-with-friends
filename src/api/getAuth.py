import os
from dotenv import load_dotenv
import base64
import requests

load_dotenv()

def getAccessToken():
    client_id = os.environ.get("CLIENT_ID")
    client_secret = os.environ.get("CLIENT_SECRET")
    credentials = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()
    headers = {
        "Authorization": f"Basic {credentials}",
    }
    data = {
        "grant_type": "client_credentials"
    }
    response = requests.post("https://accounts.spotify.com/api/token", headers=headers, data=data)
    access_token = response.json().get("access_token")
    return(access_token)

if __name__ == "__main__":
    getAccessToken()



