import { GuildMythicPlusRankings, fetchGuildMythicPlusRankings } from "./rio-fetcher";

// Example usage
fetchGuildMythicPlusRankings("IgnorHunters", "Nemesis", "eu")
  .then((rankings: GuildMythicPlusRankings) => {
    console.log(`Guild: ${rankings.name} - ${rankings.realm} (${rankings.region})`);
    console.log(`Mythic Plus Rankings:`);
    for (const ranking of rankings.rankings) {
      console.log(`- ${ranking.dungeon}: ${ranking.mythicPlusScore}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch guild rankings: ${error}`);
  });
