"""Report agent for daily summaries and engagement overviews."""

from typing import Dict, List


class ReportAgent:
    def __init__(self, service):
        self.service = service

    def daily_summary(self) -> Dict:
        """Generate a daily activity summary."""
        return self.service.fetch_daily_activity()

    def collector_interactions(self) -> List[Dict]:
        """Return recent interactions with collectors."""
        return self.service.fetch_collector_interactions()

    def engagement_overview(self) -> Dict:
        """Provide engagement metrics."""
        return self.service.fetch_engagement_report()
