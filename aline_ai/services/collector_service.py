"""Mock collector service for database interactions."""

from typing import Dict, List


_collectors = []
_leads = []
_interests = []


def save_collector(info: Dict) -> bool:
    _collectors.append(info)
    return True


def fetch_leads() -> List[Dict]:
    return _leads


def register_interest(collector_id: int, artwork_id: int) -> bool:
    _interests.append({"collector_id": collector_id, "artwork_id": artwork_id})
    return True
