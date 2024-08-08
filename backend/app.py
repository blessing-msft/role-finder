from flask import Flask, request, jsonify
from azure.search.documents import SearchClient
from azure.core.credentials import AzureKeyCredential
import os
from flask_cors import CORS

from dotenv import load_dotenv
import logging

load_dotenv()

app = Flask(__name__)
CORS(app)



search_service_endpoint = os.getenv("SEARCH_SERVICE_ENDPOINT")
index_name = os.getenv("INDEX_NAME")
api_key = os.getenv("SEARCH_SERVICE_API_KEY")

# print(search_service_endpoint)
# print(index_name)
# print(api_key)

logging.basicConfig(level=logging.DEBUG)

# Initialize SearchClient
try:
    search_client = SearchClient(
        endpoint=search_service_endpoint,
        index_name=index_name,
        credential=AzureKeyCredential(api_key)
    )
    logging.debug("SearchClient initialized successfully")
except Exception as e:
    logging.error("Failed to initialize SearchClient", exc_info=e)
    raise

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')
    try:
        logging.debug(f"Received query: {query}")
        results = search_client.search(query)
        
        if results is None:
            logging.error("No results returned from search client")
            return jsonify([]), 200
        
        result_list = [result for result in results]
        logging.debug(f"Search results list: {result_list}")
        return jsonify(result_list), 200
    except Exception as e:
        logging.error("Error during search operation", exc_info=e)
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
