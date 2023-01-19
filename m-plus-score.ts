console.log('m+ scores')

function rating(keyLevel: number, time: any, timer: any): number {
    // https://www.wowhead.com/guide/blizzard-mythic-plus-rating-score-in-game
    let score: number = 37.5
    score += 7.5 * keyLevel
    let affix_levels: number[] = [2, 4, 7, 10]
    for (const level of affix_levels) {
        if (keyLevel >= level) {
            score += 7.5
        }
    }

    // https://www.wowhead.com/news/extra-2-score-for-each-mythic-keystone-level-above-10-in-dragonflight-329702
    let df_ten_plus_adj = Math.max(keyLevel - 10, 0) * 2;
    score += df_ten_plus_adj

    score += time_adjust(time, timer)
    return score
}

function time_adjust(time: any, timer: any) {
    let adj: number = 0
    if (time / timer <= 0.6) {
        adj = 7.5
    }
    if (time / timer >= 1.4) {
        adj = -15
    }
    return adj;
}

console.log(`${rating(18, 0, 0)}`)

function pair_rating() {
    // 100% + 33%
    return 0
}