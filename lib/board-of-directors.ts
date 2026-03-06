export interface BoardMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  order?: number;
}

export const DEFAULT_BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Theresa Kennedy",
    role: "Director and President",
    bio: "Theresa brings over 15 years of experience in non-profit leadership and a passion for educational equity.",
    image: "/theresakennedy2.jpg",
    order: 0,
  },
  {
    name: "Deborah Sieh",
    role: "Director of Web Development",
    bio: "Deborah brings expert web development skills, combining creative design with functional precision to build impactful, user-friendly digital experiences.",
    image: "/deborahsieh.jpg",
    order: 1,
  },
  {
    name: "Mike Evans",
    role: "Director and Secretary",
    bio: "Mike ensures organizational integrity and governance while driving strategic initiatives with a strong focus on compliance and operational excellence.",
    image: "/MikeEvans.jpg",
    order: 2,
  },
  {
    name: "Jeff St-Louis",
    role: "Board of Directors",
    bio: "Jeff leverages his expertise in digital infrastructure and innovation to drive cutting-edge tech solutions that support and scale the Foundation's mission.",
    image: "/JeffStLouis.jpg",
    order: 3,
  },
  {
    name: "Jacqui Kennedy",
    role: "Director of Marketing",
    bio: "Jacqui has a background in museum curation and specializes in artifact preservation.",
    image: "/JacquiKennedy.jpg",
    order: 4,
  },
];
