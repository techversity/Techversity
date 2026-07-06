import honoraryDoctorate from "./honorary-doctorate";

// registry of rich program detail pages (added incrementally)
const programDetails = {
  "honorary-doctorate": honoraryDoctorate,
};

export function getProgramDetail(slug) {
  return programDetails[slug] || null;
}

export function getProgramDetailSlugs() {
  return Object.keys(programDetails);
}