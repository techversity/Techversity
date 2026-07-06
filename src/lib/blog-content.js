
export const blogContent = {
  "dba-vs-phd": {
    dek:
      "Both credentials end with the same two letters in front of your name. Almost nothing else about them is the same — the research, the audience, and the reason you'd choose one over the other are three separate questions.",
    keyTakeaways: [
      "A DBA is built around a real problem inside your own industry; a PhD is built around a new contribution to theory.",
      "Neither is a shortcut. Both require sustained, examined, original work — the difference is where that work points.",
      "The title you receive — \"Dr.\" — is identical either way. The distinction lives in the pathway, not the honorific.",
      "The right choice depends on your career stage and what you want the doctorate to do for you next, not on which one \"sounds harder.\"",
    ],
    blocks: [
      {
        type: "paragraph",
        text:
          "It's the question almost every senior professional asks us before they ask anything else about accreditation, cost, or timelines: \"Should I do a DBA or a PhD?\" It's a fair question, and a genuinely important one — because these two doctorates are built for different people, doing different kinds of work, for different reasons. Picking the wrong one doesn't just cost you time; it means spending two or three years producing research that never quite fits what you actually wanted the degree to do for you.",
      },
      {
        type: "h2",
        text: "What a DBA Actually Is",
      },
      {
        type: "paragraph",
        text:
          "A Doctor of Business Administration is a practitioner's doctorate. It exists for people who already have significant business experience and want to formalise that experience into original, examined research — research that stays rooted in a live problem rather than an abstract one.",
      },
      {
        type: "paragraph",
        text:
          "In practice, that means your dissertation topic usually comes from your own desk. A DBA candidate might study how their organisation's leadership style shaped a digital transformation programme, or what actually happened when their industry adopted AI tools faster than its governance could keep up. The output is meant to be usable well before the final defence — not just publishable years later.",
      },
      {
        type: "paragraph",
        text:
          "This pathway tends to suit senior executives, founders, consultants, and directors — typically with ten or more years in the field — who want doctoral-level credibility attached to work they're already doing, without stepping out of their career to get it.",
      },
      {
        type: "h2",
        text: "What a PhD Actually Is",
      },
      {
        type: "paragraph",
        text:
          "A PhD is a research doctorate aimed at generating new theoretical or academic knowledge. Where a DBA asks \"what does this mean for my organisation,\" a PhD asks \"what does this mean for the field.\" It's the traditional academic route, and it's built to produce an original contribution that other researchers can build on.",
      },
      {
        type: "paragraph",
        text:
          "A PhD candidate in business might develop a new framework for understanding organisational behaviour, or design a methodology for analysing market dynamics that didn't exist before. The audience for that work is primarily scholarly — journals, conferences, and future researchers — even when the topic itself is drawn from industry.",
      },
      {
        type: "paragraph",
        text:
          "This route generally fits people aiming at academic careers, teaching positions, publishing, or research leadership roles — or professionals who simply want to go deep on theory for its own sake, not just as a means to a corporate outcome.",
      },
      {
        type: "h2",
        text: "DBA vs PhD, Side by Side",
      },
      {
        type: "table",
        headers: ["", "DBA", "PhD"],
        rows: [
          ["Research focus", "Applied — solves a real organisational problem", "Theoretical — creates new academic knowledge"],
          ["Typical candidate", "Senior executive, founder, consultant (10+ yrs experience)", "Aspiring academic, researcher, subject specialist"],
          ["Assessment style", "Applied project or professional portfolio, often alongside a thesis", "Traditional dissertation and defence"],
          ["Primary audience", "Your industry and organisation", "Journals, academia, future researchers"],
          ["Typical outcome", "Board credibility, consulting authority, executive standing", "Academic career, publishing record, research leadership"],
          ["Duration (executive format)", "Roughly 18–30 months", "Roughly 24–48 months"],
        ],
      },
      {
        type: "h2",
        text: "You Get the Same Title Either Way",
      },
      {
        type: "paragraph",
        text:
          "This is worth stating plainly, because it trips people up: both credentials carry the title \"Doctor.\" There is no honorary weighting, no asterisk, no lesser version of \"Dr.\" attached to a DBA. The difference isn't in what you're called afterwards — it's in the road you took to get there, and what that road prepared you to do next.",
      },
      {
        type: "quote",
        text:
          "Neither pathway is the easier version of the other. A DBA is not a PhD without the theory, and a PhD is not a DBA without the practicality. They are two different disciplines wearing the same word.",
      },
      {
        type: "h2",
        text: "How to Actually Decide",
      },
      {
        type: "paragraph",
        text:
          "The honest answer is that the right pathway depends on what you want the doctorate to do for your career after graduation — not on which one has a reputation for being more prestigious or more difficult. Both require the same level of rigour; they simply point that rigour in different directions.",
      },
      {
        type: "list",
        items: [
          "If you want the research to strengthen your standing inside the industry you already work in — board seats, advisory work, consulting credibility — a DBA is usually the closer fit.",
          "If you want to teach, publish, or build a research career, or if your interest is genuinely in advancing theory rather than solving a workplace problem, a PhD tends to serve that goal better.",
          "If you're not sure yet, that's normal — a short conversation about your background and what you actually want next usually surfaces the answer faster than reading comparison charts alone.",
        ],
      },
      {
        type: "h2",
        text: "Our Take, for What It's Worth",
      },
      {
        type: "paragraph",
        text:
          "We don't have a house preference between the two — we've seen candidates who were certain they needed a PhD end up far better served by a DBA, and others who assumed a DBA would be the lighter option, which is a misconception either way. What matters is matching the pathway to where you actually are in your career and where you're trying to go, not to which title sounds more impressive at a dinner party.",
      },
    ],
  },
};

export function getBlogContent(slug) {
  return blogContent[slug] || null;
}