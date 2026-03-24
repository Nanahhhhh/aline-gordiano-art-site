/**
 * Instagram Graph API Helper for Aline Gordiano Art
 * This service handles fetching the feed and account details.
 */

const INSTAGRAM_BUSINESS_ID = process.env.NEXT_PUBLIC_IG_BUSINESS_ID;
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const API_VERSION = 'v21.0';

export interface InstagramMedia {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

/**
 * Fetch the latest media from the Instagram Business Account
 */
export async function getInstagramFeed(limit: number = 12): Promise<InstagramMedia[]> {
  if (!INSTAGRAM_BUSINESS_ID || !ACCESS_TOKEN) {
    console.error('Missing Instagram credentials');
    return [];
  }

  const fields = 'id,caption,media_type,media_url,permalink,timestamp,thumbnail_url';
  const url = `https://graph.facebook.com/${API_VERSION}/${INSTAGRAM_BUSINESS_ID}/media?fields=${fields}&limit=${limit}&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('Instagram API Error:', data.error);
      return [];
    }

    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch Instagram feed:', error);
    return [];
  }
}

/**
 * Get basic profile info
 */
export async function getInstagramProfile() {
  if (!INSTAGRAM_BUSINESS_ID || !ACCESS_TOKEN) return null;

  const url = `https://graph.facebook.com/${API_VERSION}/${INSTAGRAM_BUSINESS_ID}?fields=id,username,profile_picture_url&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch Instagram profile:', error);
    return null;
  }
}
