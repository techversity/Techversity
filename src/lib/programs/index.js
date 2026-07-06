import honoraryDoctorate from "./honorary-doctorate";
import dba from "./dba";
import phd from "./phd";
import honoraryProfessorship from "./honorary-professorship";

// registry of rich program detail pages (added incrementally)
const programDetails = {
  "honorary-doctorate": honoraryDoctorate,
  "dba-esdst": dba,
  "phd-kennedy": phd,
  "honorary-professorship": honoraryProfessorship,
};

export function getProgramDetail(slug) {
  return programDetails[slug] || null;
}

export function getProgramDetailSlugs() {
  return Object.keys(programDetails);
}