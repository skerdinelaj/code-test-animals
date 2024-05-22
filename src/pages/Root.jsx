import { Outlet } from "react-router";
import Header from "../navigations/Header";

export default function Root() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
