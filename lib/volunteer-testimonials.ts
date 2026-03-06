export interface VolunteerTestimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  order?: number;
}

export const DEFAULT_VOLUNTEER_TESTIMONIALS: VolunteerTestimonial[] = [
  {
    quote:
      "Volunteering with TBHF has been one of the most rewarding experiences of my life. Knowing that I'm helping preserve our history for future generations gives me a sense of purpose.",
    name: "Michelle Johnson",
    role: "Research Volunteer",
    image: `https://ui-avatars.com/api/?name=Michelle+Johnson&size=96&background=B22222&color=fff`,
    order: 0,
  },
  {
    quote:
      "As a teacher, I've witnessed firsthand how TBHF's educational materials have transformed my students' understanding of Black history. The foundation is doing vital work.",
    name: "James Wilson",
    role: "Educator & Supporter",
    image: `https://ui-avatars.com/api/?name=James+Wilson&size=96&background=B22222&color=fff`,
    order: 1,
  },
  {
    quote:
      "I started volunteering to honor my grandparents, but I've gained so much more—knowledge, community, and a deeper connection to my heritage.",
    name: "Alisha Thomas",
    role: "Community Outreach Volunteer",
    image: `https://ui-avatars.com/api/?name=Alisha+Thomas&size=96&background=B22222&color=fff`,
    order: 2,
  },
];
