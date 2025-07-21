export function maxValueRodSteel(prices: number[], n: number) {
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp[i] = prices[i];

        for (let w = 0; w <= i; w++) {
            // >>>>>: [1] dp means that when the total weight is "i", 
            // there are two kinds of status for each available "w", pick | non-pick
            //  pick:     dp[i-w] + prices[w]
            //  non-pick: dp[i]
            //
            // dp[i] = Math.max(dp[i], dp[i - w] + prices[w]);
            //
            // <<<<<: [1]

            // >>>>>: [2] dp means when the total weight is "i":
            // it is simply consists of two status which are: "i-w" | "w"
            dp[i] = Math.max(dp[i], dp[i - w] + dp[w]); // > "same hierarchy, same status" results compare and compute
            // <<<<<: [2]
        }
    }

    return dp[n]
}
