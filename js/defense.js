export const cityDefenseThreshold = 90;

export function cityDefenseOutcome(score, total, threshold = cityDefenseThreshold) {
  const safeScore = Number.isFinite(score) ? score : 0;
  const safeTotal = Number.isFinite(total) && total > 0 ? total : 0;
  const percent = safeTotal ? Math.round((safeScore / safeTotal) * 100) : 0;

  return {
    percent,
    threshold,
    protected: percent > threshold
  };
}
