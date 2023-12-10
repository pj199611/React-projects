import NikeLogo from "/images/brand_logo.png";
import Button from "./Button";

function Header() {
  return (
    <div className=" max-w-[calc(100%-15%)] mx-auto  p-5">
      <div className="flex flex-row space-between items-center justify-between">
        <div>
          <img src={NikeLogo} />
        </div>
        <div className="items-center flex flex-row space-x-6">
          <h1 className="font-semibold cursor-pointer">Menu</h1>
          <h1 className="font-semibold cursor-pointer">Location</h1>
          <h1 className="font-semibold cursor-pointer">About</h1>
          <h1 className="font-semibold cursor-pointer">Contact</h1>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
