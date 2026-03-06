export type ComingSoonCardIcon =
  | "book"
  | "video"
  | "archive"
  | "blockchain"
  | "default";

export interface ComingSoonCard {
  title: string;
  description: string;
  icon: ComingSoonCardIcon;
  order: number;
  expectedTimeframe?: string;
}

export const DEFAULT_COMING_SOON_CARDS: ComingSoonCard[] = [
  {
    title: "Interactive Learning Modules",
    description:
      "Interactive modules designed for educators to incorporate Black history into their curriculum with engaging activities and lesson plans.",
    icon: "book",
    order: 0,
    expectedTimeframe: "Coming Soon",
  },
  {
    title: "Oral History Collection",
    description:
      "A growing collection of recorded interviews with community elders sharing personal stories and experiences that connect to important moments in Black history.",
    icon: "video",
    order: 1,
    expectedTimeframe: "Coming Soon",
  },
  {
    title: "Digital Archive Toolkit",
    description:
      "Resources and tools for communities to create their own digital archives of local Black history, including best practices for preservation and documentation.",
    icon: "archive",
    order: 2,
    expectedTimeframe: "Coming Soon",
  },
  {
    title: "Decentralized Decision-Making Environment (DDME)",
    description:
      "A blockchain-based platform that will foster collaboration and community engagement by providing digital forums and crowdsourced archives for documenting and preserving African history and culture.",
    icon: "blockchain",
    order: 3,
    expectedTimeframe: "Coming Soon",
  },
];
