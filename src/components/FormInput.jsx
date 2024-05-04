function FormInput({ name, type, label, defaultValue }) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        placeholder="Type here"
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered w-full "
      />
    </div>
  );
}

export default FormInput;
