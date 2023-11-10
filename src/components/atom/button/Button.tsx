
type ButtonPropsSchema = {
  title: string;
  type: "submit" | "button" | "reset" | undefined;
};

export const Button = ({ title, type, ...rest }: ButtonPropsSchema) => {
  return (
      <button
        className="font-bold w-80 d-1:w-64 p-2 mt-4 u-0:p-3 u-1:p-4 u-0:w-96 u-1:w-[30rem] u-1:text-3xl u-0:text-xl text-primary text-lg uppercase bg-black rounded-xl hover:bg-slate-950 duration-300"
        type={type}
        {...rest}
      >
        {title}
      </button>
  );
};
