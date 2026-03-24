"""Mock social service for interacting with social media platforms."""

from typing import List, Dict


def fetch_schedule_template() -> Dict:
    return {"monday": None, "wednesday": None, "friday": None}


def publish_post(content: str) -> bool:
    print(f"[mock] publishing post: {content}")
    return True
