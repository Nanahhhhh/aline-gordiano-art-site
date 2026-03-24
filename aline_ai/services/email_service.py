"""Mock email service for categorization and replying."""


def classify_email(subject: str, body: str) -> str:
    return "general"


def send_email(recipient: str, subject: str, body: str) -> bool:
    print(f"[mock] send email to {recipient}: {subject}")
    return True
