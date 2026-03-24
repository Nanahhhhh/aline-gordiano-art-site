"""Collector agent for tracking leads and interest."""

from typing import List, Dict


class CollectorAgent:
    def __init__(self, service):
        self.service = service

    def record_collector(self, info: Dict) -> bool:
        """Save collector information via service."""
        return self.service.save_collector(info)

    def get_leads(self) -> List[Dict]:
        """Retrieve current leads."""
        return self.service.fetch_leads()

    def note_interest(self, collector_id: int, artwork_id: int) -> bool:
        """Register interest of a collector in an artwork."""
        return self.service.register_interest(collector_id, artwork_id)
