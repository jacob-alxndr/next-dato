const media = {
  width: 700,
  webpSrcSet:
    "https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?dpr=0.25&fm=webp 175w,https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?dpr=0.5&fm=webp 350w,https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?dpr=0.75&fm=webp 525w,https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?fm=webp 700w",
  title: null,
  srcSet:
    "https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?dpr=0.25 175w,https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?dpr=0.5 350w,https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80?dpr=0.75 525w,https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80 700w",

  sizes: "(max-width: 700px) 100vw, 700px",
  height: 700,
  bgColor: "#865c33",
  base64:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYNFxcPDhgWGiIVDg4VHRUdGBYVFhgaHy0lHR0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7Ozs7NS8vOzs7Lzs7NTU1LzUvLzU1Oy81OzsvNTAvLy81LzUvLzUvLy8vNS8vL//AABEIABgAGAMBIgACEQEDEQH/xAAZAAEAAgMAAAAAAAAAAAAAAAAABAcCBQb/xAAgEAACAgEDBQAAAAAAAAAAAAAAAQIEEQMhQQUGEjEy/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABBP/EABwRAAICAgMAAAAAAAAAAAAAAAECABEDIRMiUf/aAAwDAQACEQMRAD8A2eveg+STRuwXJWy7jUn9E7Q6/iO0gnyWMqk0JYFu/Br2CvbHcWFvIBqFsyg0TOUtVHXWUSOm6ctSOWwCEdbgRRyTO/VcV5AAiqCNzPn0+p//2Q==",
  aspectRatio: 1,
  alt: "Unsplash",
};

export const data = [
  {
    id: "345663455346",
    slug: "project-one",
    eyebrow: "Eyebrow #1",
    title: "Title #1",
    subtitle: "Subtitle #1",
    description: "Description #1",
    image: {
      ...media,
      src: "https://images.unsplash.com/photo-1681124967889-e24f3ce5fa6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    },
    button: {
      buttonText: "Click Me",
      buttonType: "external",
      url: "www.google.com",
    },
  },
  {
    id: "345663455338",
    slug: "project-two",
    eyebrow: "Eyebrow #2",
    title: "Title #2",
    subtitle: "Subtitle #2",
    description: "Description #2",
    image: {
      ...media,
      src: "https://images.unsplash.com/photo-1682705605835-58dbad30e467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
    },
    button: {
      buttonText: "Click Me",
      buttonType: "external",
      url: "www.google.com",
    },
  },
  {
    id: "345667055338",
    slug: "project-three",
    eyebrow: "Eyebrow 3",
    title: "Title #3",
    subtitle: "Subtitle #3",
    description: "Description #3",
    image: {
      ...media,
      src: "https://images.unsplash.com/photo-1683005528969-1d583c0141b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
    },
    button: {
      buttonText: "Click Me",
      buttonType: "external",
      url: "www.google.com",
    },
  },
  {
    id: "345567055338",
    slug: "project-four",
    eyebrow: "Eyebrow #4",
    title: "Title #4",
    subtitle: "Subtitle #4",
    description: "Description #4",
    image: {
      ...media,
      src: "https://images.unsplash.com/photo-1682669779712-bdc691f177f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80",
    },
    button: {
      buttonText: "Click Me",
      buttonType: "external",
      url: "www.google.com",
    },
  },
];

export function getData() {
  return data;
}
export function getAllSlugs() {
  let slugs = getData().map((p) => `/project/${p?.slug}`);
  console.log("slugs", slugs);
  return slugs;
}
export function getProjectData(slug) {
  let data = null;
  getData().filter((p) => (p?.slug === slug ? (data = p) : null));

  return data;
}
