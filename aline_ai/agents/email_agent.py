"""Email agent for categorization and replies."""

from typing import List


class EmailAgent:
    def __init__(self, service):
        self.service = service

    def categorize_email(self, subject: str, body: str) -> str:
        """Return a category label based on content."""
        # mock classification logic
        return "inquiry"

    def suggest_reply(self, category: str, context: str) -> str:
        """Provide a suggested reply based on category and context."""
        return f"Reply template for {category}: {context[:100]}"
