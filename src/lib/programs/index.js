import honoraryDoctorate from "./honorary-doctorate";
import dba from "./dba";
import phd from "./phd";
import honoraryProfessorship from "./honorary-professorship";
import masters from "./masters";
import bachelors from "./bachelors";

// registry of rich program detail pages (added incrementally)
const programDetails = {
  "honorary-doctorate": honoraryDoctorate,
  "dba": dba,
  "phd": phd,
  "honorary-professorship": honoraryProfessorship,
  "masters": masters,
  "bachelors": bachelors,
};

export function getProgramDetail(slug) {
  return programDetails[slug] || null;
}

export function getProgramDetailSlugs() {
  return Object.keys(programDetails);
}