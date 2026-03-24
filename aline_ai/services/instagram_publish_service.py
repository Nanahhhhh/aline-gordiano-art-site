"""Mock service for Instagram publishing and scheduling."""

from typing import Dict, Any

class InstagramPublishService:
    def __init__(self):
        self.history = []

    def schedule_post(self, payload: Dict[str, Any], publish_time: str) -> Dict[str, Any]:
        """Mocks scheduling a post."""
        print(f"[mock] Scheduling post for {publish_time}")
        status = {"status": "scheduled", "time": publish_time, "payload": payload}
        self.history.append(status)
        return status

    def publish_post(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Mocks immediate publishing."""
        print("[mock] Publishing post now...")
        status = {"status": "published", "timestamp": "now", "payload": payload}
        self.history.append(status)
        return status

    def save_draft(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Mocks saving a draft."""
        print("[mock] Saving draft...")
        status = {"status": "draft", "payload": payload}
        self.history.append(status)
        return status
