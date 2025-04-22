import NavbarItem from "./NavbarItem";
export default function Navbar() {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-center gap-8">
        <NavbarItem title="Trending" param="trending" />
        <NavbarItem title="Top Rated" param="rated" />
      </div>
    </div>
  );
}
