function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className=" hover:bg-white hover:text-red-500 duration-1000 bg-red-500 p-2 rounded-md w-20 text-white border-outline font-semibold">
      {children}
    </button>
  );
}

export default Button;
