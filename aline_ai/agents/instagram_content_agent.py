"""Agent responsible for preparing Instagram content for Aline Gordiano Art."""

from typing import Dict, Any, List

class InstagramContentAgent:
    def __init__(self, content_service, publish_service):
        """
        Initialize the agent with content and publish services.
        
        Args:
            content_service: Instance of InstagramContentService
            publish_service: Instance of InstagramPublishService
        """
        self.content_service = content_service
        self.publish_service = publish_service

    def prepare_post(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Main entry point to prepare any type of visual post.
        """
        post_type = self.content_service.detect_post_type(post_data)
        
        # Route to specific preparation logic
        if post_type == "single_artwork":
            return self.prepare_single_artwork_post(post_data)
        elif post_type == "carousel":
            return self.prepare_carousel_post(post_data)
        elif post_type == "artist_portrait":
            return self.prepare_artist_post(post_data)
        elif post_type in ["studio_process", "artwork_detail"]:
            return self.prepare_process_post(post_data)
        elif post_type == "story_teaser":
            return self.prepare_story_teaser(post_data)
        
        # Fallback for other types
        return self._generate_structure(post_data, post_type)

    def prepare_single_artwork_post(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """Specific preparation for a single artwork post."""
        return self._generate_structure(post_data, "single_artwork")

    def prepare_carousel_post(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """Specific preparation for a carousel post."""
        return self._generate_structure(post_data, "carousel")

    def prepare_artist_post(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """Specific preparation for an artist portrait post."""
        return self._generate_structure(post_data, "artist_portrait")

    def prepare_process_post(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """Specific preparation for studio process or detail posts."""
        post_type = self.content_service.detect_post_type(post_data)
        return self._generate_structure(post_data, post_type)

    def prepare_story_teaser(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """Specific preparation for story teasers."""
        return self._generate_structure(post_data, "story_teaser")

    def prepare_caption(self, post_data: Dict[str, Any]) -> str:
        """Isolated method to just get a caption."""
        return self.content_service.generate_caption(post_data)

    def prepare_hashtags(self, post_data: Dict[str, Any]) -> str:
        """Isolated method to just get hashtags."""
        post_type = self.content_service.detect_post_type(post_data)
        return self.content_service.generate_hashtags(post_type)

    def publish_now(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Prepares and immediately publishes a post, bypassing scheduled time.
        """
        prepared_post = self.prepare_post(post_data)
        # Update status for immediate publishing
        prepared_post["publish_status"] = "published"
        prepared_post["published_at"] = "now"
        
        return self.publish_service.publish_post(prepared_post)

    def _generate_structure(self, post_data: Dict[str, Any], post_type: str) -> Dict[str, Any]:
        """Internal helper to assemble the full post structure."""
        images = post_data.get("images", [])
        ordered_images = self.content_service.order_images(images, post_type)
        
        caption = self.content_service.generate_caption(post_data)
        cta = self.content_service.generate_cta(post_type)
        hashtags = self.content_service.generate_hashtags(post_type)
        
        return {
            "post_type": post_type,
            "title": post_data.get("title", "Untitled"),
            "cover_text": post_data.get("cover_text", post_data.get("title")),
            "image_order": ordered_images,
            "caption": f"{caption}\n.\n.\n{cta}",
            "cta": cta,
            "hashtags": hashtags,
            "alt_text": self.content_service.generate_alt_text(post_data),
            "pinned_comment": self.content_service.generate_pinned_comment(post_data),
            "story_teaser": self.content_service.generate_story_teaser(post_data),
            "suggested_post_time": self.content_service.suggest_best_time(),
            "publish_status": "draft"
        }
