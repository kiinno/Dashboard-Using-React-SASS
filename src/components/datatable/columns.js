import StarIcon from "@mui/icons-material/Star";
export const USERS_PATTERN = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Username",
    width: 170,
    renderCell: ({ row: { username, image } }) => {
      return (
        <div className="thumbnail-cell">
          <img
            src={image}
            alt={`${username}`}
            title={`@${username}`}
            className="image"
          />
          <span className="title">{username}</span>
        </div>
      );
    },
  },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 50,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 70,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "phone",
    width: 165,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 190,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.maidenName || ""} ${
        params.row.lastName || ""
      }`,
  },
];

export const PRODUCTS_PATTERN = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Product",
    width: 220,
    renderCell: ({ row: { thumbnail, title, price } }) => {
      return (
        <div className="thumbnail-cell">
          <img
            src={thumbnail}
            alt={`${title}/thumbnail`}
            title={`${title} / $${price}`}
            className="image"
          />
          <span className="title">{title}</span>
        </div>
      );
    },
  },
  { field: "description", headerName: "Description", width: 280 },
  {
    field: "price",
    type: "number",
    headerName: "Amount",
    width: 100,
    valueGetter: ({ row: { price } }) => `$${price ?? 0}`,
  },
  {
    field: "discountPercentage",
    type: "number",
    headerName: "Discount",
    width: 80,
    valueGetter: ({ row: { discountPercentage } }) =>
      `${discountPercentage ?? 0}%`,
  },
  { field: "stock", headerName: "Stocks", width: 70 },
  { field: "brand", headerName: "Brand", width: 100 },
  {
    field: "category",
    headerName: "Catigory",
    width: 120,
    valueGetter: ({ row: { category } }) => `${category.toUpperCase() || ""}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    renderCell: ({ row: { rating } }) => {
      return (
        <div className="rating-cell">
          {new Array(Math.trunc(+rating)).fill(
            <StarIcon fontSize="small" className="icon" />
          )}
        </div>
      );
    },
  },
];
