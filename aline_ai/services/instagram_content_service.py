"""Service for generating and structuring Instagram content."""

import datetime
from typing import List, Dict, Any

class InstagramContentService:
    def __init__(self):
        self.post_types = [
            "single_artwork", "carousel", "artwork_detail", "studio_process",
            "artist_portrait", "room_mockup", "availability_post",
            "collection_post", "print_announcement", "story_teaser"
        ]

    def detect_post_type(self, post_data: Dict[str, Any]) -> str:
        """Simple mock logic to detect post type based on input data."""
        if post_data.get("is_teaser"):
            return "story_teaser"
        if len(post_data.get("images", [])) > 1:
            return "carousel"
        # Check for 'type' or 'forced_type'
        return post_data.get("type") or post_data.get("forced_type") or "single_artwork"

    def suggest_structure(self, post_type: str) -> List[str]:
        """Suggests the ideal sequence of content elements."""
        structures = {
            "carousel": ["cover", "detail_1", "detail_2", "room_view", "artist_shot"],
            "single_artwork": ["main_view"],
            "studio_process": ["process_video", "wip_shot", "palette_shot"],
            "default": ["main_view"]
        }
        return structures.get(post_type, structures["default"])

    def order_images(self, images: List[str], post_type: str) -> List[str]:
        """Mock logic to order images optimally."""
        # In a real scenario, this might use AI to rank aesthetic appeal
        return sorted(images)

    def generate_caption(self, post_data: Dict[str, Any]) -> str:
        """Generates a professional, artistic caption."""
        title = post_data.get("title", "Untitled")
        description = post_data.get("description", "")
        return f"✨ {title}\n\n{description}\n\nSeeking the essence of texture and mood in every stroke."

    def generate_hashtags(self, post_type: str) -> str:
        """Returns a string of relevant hashtags."""
        base = "#AlineGordiano #OriginalPainting #ContemporaryArt"
        type_specific = {
            "studio_process": "#ArtProcess #StudioVibes #PaletteKnife",
            "room_mockup": "#InteriorDesignArt #ArtForInteriors",
            "artwork_detail": "#TexturedArt #ArtDetail"
        }
        return f"{base} {type_specific.get(post_type, '')}".strip()

    def generate_cta(self, post_type: str) -> str:
        """Generates a call to action."""
        if post_type == "availability_post":
            return "DM for acquisition details or visit the link in bio."
        return "Which detail resonates most with you? Let me know in the comments."

    def generate_alt_text(self, post_data: Dict[str, Any]) -> str:
        """Generates descriptive alt text for accessibility."""
        return f"Original acrylic painting by Aline Gordiano titled '{post_data.get('title', 'Untitled')}'. Focus on texture and atmospheric colors."

    def generate_pinned_comment(self, post_data: Dict[str, Any]) -> str:
        """Generates the text for a pinned comment."""
        return f"🎨 {post_data.get('title')} | Available | Link in bio for more details."

    def generate_story_teaser(self, post_data: Dict[str, Any]) -> str:
        """Generates a short teaser text for stories."""
        return f"New on the feed: Diving into the details of '{post_data.get('title')}'. Tap to see more!"

    def suggest_best_time(self) -> str:
        """Returns a suggested posting time."""
        # Mock logic: usually Tue/Thu at 6pm is good for art profiles
        return "Tuesday, 18:00 UTC"
