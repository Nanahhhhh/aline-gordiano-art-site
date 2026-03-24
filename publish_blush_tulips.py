import os
import json
import sys

# Ensure the local aline_ai package is in the path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from aline_ai.agents.instagram_content_agent import InstagramContentAgent
from aline_ai.services.instagram_content_service import InstagramContentService
from aline_ai.services.instagram_publish_service import InstagramPublishService

# 1. Setup Services and Agent
content_service = InstagramContentService()
publish_service = InstagramPublishService()
agent = InstagramContentAgent(content_service, publish_service)

# 2. Define Project Paths (Relative to this script)
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
ARTWORKS_DIR = os.path.join(PROJECT_ROOT, "public/artworks")

# 3. Artwork Data for "Blush Tulips"
blush_tulips_data = {
    "type": "carousel",
    "title": "Blush Tulips",
    "description": "A delicate floral study capturing the soft textures and vibrant tones of blooming tulips.",
    "images": [
        os.path.join(ARTWORKS_DIR, "blush-tulips-overview.jpeg"),
        os.path.join(ARTWORKS_DIR, "blush-tulips.jpeg")
    ],
    "forced_type": "carousel" # Ensure it stays a carousel
}

# 4. Execute "POST NOW" Command
print(f"🚀 Initializing immediate publish for: {blush_tulips_data['title']}...")
result = agent.publish_now(blush_tulips_data)

# 5. Output Result
print("\n--- PUBLISH SUCCESSFUL ---")
print(f"Status: {result.get('status')}")
print(f"Timestamp: {result.get('timestamp')}")
print("\nFinal Caption:")
print(result['payload']['caption'])
print("\n--- END ---")
