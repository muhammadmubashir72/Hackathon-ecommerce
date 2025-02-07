export const Order = {
    name: "order",
    type: "document",
    title: "Orders",
    fields: [
      { name: "userEmail", type: "string", title: "User Email" },
      { name: "items", type: "array", title: "Ordered Items", of: [{ type: "object", fields: [
        { name: "id", type: "string", title: "Product ID" },
        { name: "name", type: "string", title: "Product Name" },
        { name: "image", type: "url", title: "Product Image" },
        { name: "price", type: "number", title: "Price" },
        { name: "quantity", type: "number", title: "Quantity" }
      ]}]},
      { name: "totalAmount", type: "number", title: "Total Amount" },
      { name: "shippingAddress", type: "object", title: "Shipping Address", fields: [
        { name: "firstName", type: "string", title: "First Name" },
        { name: "lastName", type: "string", title: "Last Name" },
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "string", title: "Phone" },
        { name: "country", type: "string", title: "Country" },
        { name: "city", type: "string", title: "City" },
        { name: "zip", type: "string", title: "ZIP Code" },
        { name: "address1", type: "string", title: "Address Line 1" },
        { name: "address2", type: "string", title: "Address Line 2" }
      ]}
    ]
  };
  