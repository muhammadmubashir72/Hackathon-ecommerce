export const Product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },

    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "object",
      fields: [
        {
          name: "originalPrice",
          title: "Original Price",
          type: "number",
        },
        {
          name: "discountedPrice",
          title: "Discounted Price",
          type: "number",
        },
      ],
    },
  ],
};
