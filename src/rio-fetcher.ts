import fetch from "node-fetch";

export interface MythicPlusRanking {
  dungeon: string;
  mythicPlusScore: number;
}

export interface GuildMythicPlusRankings {
  name: string;
  realm: string;
  region: string;
  rankings: MythicPlusRanking[];
}

export async function fetchGuildMythicPlusRankings(
  guildName: string,
  realm: string,
  region: string
): Promise<GuildMythicPlusRankings> {
  const url = `https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${guildName}&fields=mythic_plus_rankings`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch guild rankings: ${response.statusText}`);
  }

  const data = await response.json() as {
    name: string;
    realm: string;
    region: string;
    mythic_plus_rankings: MythicPlusRanking[];
    statusCode?: number;
    message?: string;
  };
  if (data.statusCode !== undefined && data.statusCode !== 200) {
    throw new Error(`Failed to fetch guild rankings: ${data.message}`);
  }

  return {
    name: data.name,
    realm: data.realm,
    region: data.region,
    rankings: data.mythic_plus_rankings,
  };
}
