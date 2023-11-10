type InputPropsSchema = {
  title: string;
  type: string;
  name: string;
  placeholder: string;
};

export const Input = ({
  title,
  type,
  name,
  placeholder,
  ...rest
}: InputPropsSchema) => {
  return (
    <div className="flex flex-col w-80 d-1:w-64 u-0:w-96 u-1:w-[30rem] gap-2 u-1:gap-4">
      <label
        className="text-black text-xl u-0:text-2xl u-1:text-3xl font-bold"
        htmlFor={name}
      >
        {title}
      </label>
      <input
        className="text-primary py-2 px-4 u-0:py-3 u-0:px-6 u-1:py-5 u-1:text-[1.65rem] text-lg u-0:text-xl outline-none bg-black rounded-xl placeholder:text-primary placeholder:opacity-50"
        name={name}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
