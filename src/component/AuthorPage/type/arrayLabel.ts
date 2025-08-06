import type { DataCreateAuthor } from "./authors.types";

  const array: { label: string; nameValue: keyof DataCreateAuthor }[] = [
    {
      label: "Name",
      nameValue: "name",
    },
    {
      label: "Email",
      nameValue: "email",
    },
    {
      label: "Bio",
      nameValue: "bio",
    },
    {
      label: "Avatar",
      nameValue: "avatar",
    },
  ];


export default array;