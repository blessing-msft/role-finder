from flask import Flask, request, jsonify
from azure.search.documents import SearchClient
from azure.core.credentials import AzureKeyCredential
import os
from flask_cors import CORS

from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)



search_service_endpoint = os.getenv("SEARCH_SERVICE_ENDPOINT")
index_name = os.getenv("INDEX_NAME")
api_key = os.getenv("SEARCH_SERVICE_API_KEY")

search_client = SearchClient(
    endpoint=search_service_endpoint,
    index_name=index_name,
    credential=AzureKeyCredential(api_key)
)

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')
    try:
        results = search_client.search(query)
        result_list = [result for result in results]
        return jsonify(result_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
