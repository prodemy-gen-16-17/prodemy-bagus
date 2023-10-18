import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function Form() {
  const schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    shipping: yup.string().required(),
    insurance: yup.boolean(),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      shipping: "",
      insurance: false,
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            {/* noValidate mencegah validasi default browser */}
            <form
              className="card-body"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name")}
                />
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.name?.message}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="input input-bordered"
                  {...register("phone")}
                />
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.phone?.message}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shipping Method</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("shipping")}
                >
                  <option disabled value="">
                    Shipping Method
                  </option>
                  <option value="same-day">Same-Day</option>
                  <option value="express">Express</option>
                  <option value="regular">Regular</option>
                </select>
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.shipping?.message}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Insurance</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    {...register("insurance")}
                  />
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Order"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
