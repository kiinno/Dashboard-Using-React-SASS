import { configureStore } from "@reduxjs/toolkit";
import lists from "./reducers/lists";
export default configureStore({ reducer: { lists } });
