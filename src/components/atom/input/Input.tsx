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
    <div className="flex flex-col w-80 d-1:w-64 gap-2">
      <label className="text-black text-xl font-bold" htmlFor={name}>
        {title}
      </label>
      <input
        className="text-primary py-2 px-4 text-lg bg-black rounded-xl placeholder:text-primary placeholder:opacity-50"
        name={name}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
