"""Mock report service for generating summaries and metrics."""

from typing import Dict, List


def fetch_daily_activity() -> Dict:
    return {"emails": 5, "posts": 2, "new_leads": 1}


def fetch_collector_interactions() -> List[Dict]:
    return [{"collector_id": 1, "notes": "Interested in new series"}]


def fetch_engagement_report() -> Dict:
    return {"likes": 120, "comments": 15}
