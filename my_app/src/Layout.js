import NavHeader from './Nav';
import {Outlet} from "react-router-dom";

///no use for now


export default function Layout() {
  return (
    <main>
      <NavHeader />
      <Outlet />
    </main>
  );
}