from api import getAuth
import requests
import json

authToken = getAuth.getAccessToken()

search_query = "Juice Wrld - Lucid Dreams"
headers = {
    "Authorization": f"Bearer {authToken}",
}

params = {
    "q": search_query,
    "type": "track",
    "limit": 1,
}

response = requests.get("https://api.spotify.com/v1/search", headers=headers, params=params)
results = response.json()

with open('results.json', 'w') as file:
    json.dump(results, file, indent=2)

def getTrackID():
    track_id = results["tracks"]["items"][0]["id"]
    return(track_id)
