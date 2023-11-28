const TURBO_TEAM: Record<string, AuthorDetails> = {
  peter: {
    name: "Peter yang",
    picture: "/1D7F9E91-14B0-4914-9FBD-0E46CE340A78.png",
    xUsername: "peter1756",
  },

  alexanderlyon: {
    name: "雙龍體育",
    picture: "/team.jpeg",
    xUsername: "ssangyongsports",
  },
};

export type Author = keyof typeof TURBO_TEAM;
export type AuthorDetails = {
  name: string;
  picture: string;
  xUsername?: string;
};

export default TURBO_TEAM;
