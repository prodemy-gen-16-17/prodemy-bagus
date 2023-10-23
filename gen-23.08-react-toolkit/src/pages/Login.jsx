import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import FooterSimple from "../components/layout/FooterSimple";
import { login } from "../redux/reducers/authSlice";

function Login() {
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const [reveal, setReveal] = useState(false);
  function handleReveal() {
    setReveal(function (reveal) {
      return !reveal;
    });
  }

  const schema = yup.object({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
    rememberMe: yup.boolean(),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(login({ email: data.email, password: data.password }));

    navigate("/");
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between">
        <div className="m-auto flex w-full items-center justify-center bg-[url('')]">
          <div className="card card-compact max-w-xs bg-base-100">
            <Link
              to={"/"}
              className="btn mx-auto mt-4 border-0 bg-base-100 text-3xl text-primary"
            >
              <span className="">Kaffee</span>
            </Link>

            <div className="flex items-center justify-between pt-4">
              <h1 className="text-xl font-bold uppercase">Login</h1>
              <span className="flex">
                don&apos;t have an account?{" "}
                <Link to={"/register"} className="ml-1 text-primary">
                  Register
                </Link>
              </span>
            </div>

            <form
              className="card-body pb-0"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                  <span className="label-text-alt text-error">
                    {errors.email?.message}
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className={`input input-bordered ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span className="label-text-alt text-error">
                    {errors.password?.message}
                  </span>
                </label>
                <div className="input-group">
                  <input
                    type={reveal ? "text" : "password"}
                    placeholder="password"
                    className={`input input-bordered w-full ${
                      errors.email ? "input-error" : ""
                    }`}
                    {...register("password")}
                  />
                  <button className="btn bg-base-100" onClick={handleReveal}>
                    {reveal ? (
                      <svg
                        className="h-5 w-6 fill-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-6 fill-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input
                    type="checkbox"
                    className="checkbox h-4 w-4 rounded"
                    {...register("rememberMe")}
                  />
                </label>
              </div>
              <div className="flex flex-row-reverse items-center justify-between">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
                <Link className="btn border-0 bg-base-100 p-0 font-normal normal-case text-primary">
                  Forgot password?
                </Link>
              </div>
            </form>

            <div className="divider">or</div>

            <div className="card-body grid grid-cols-2 pt-0">
              <button className="btn bg-base-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M 6.43245 14.0866 L 5.73627 16.6855 L 3.19176 16.7393 C 2.43133 15.3289 2 13.7152 2 12.0003 C 2 10.342 2.40328 8.77829 3.11813 7.40137 H 3.11868 L 5.384 7.81668 L 6.37635 10.0684 C 6.16866 10.6739 6.05545 11.3239 6.05545 12.0003 C 6.05553 12.7344 6.1885 13.4377 6.43245 14.0866 Z"
                    fill="#FBBB00"
                  ></path>
                  <path
                    d="M 21.8262 10.1318 C 21.941 10.7368 22.0009 11.3615 22.0009 12 C 22.0009 12.7159 21.9256 13.4143 21.7822 14.0879 C 21.2954 16.3802 20.0234 18.3819 18.2614 19.7984 L 18.2608 19.7978 L 15.4075 19.6522 L 15.0037 17.1313 C 16.1729 16.4456 17.0867 15.3725 17.568 14.0879 H 12.2207 V 10.1318 H 17.646 H 21.8262 Z"
                    fill="#518EF8"
                  ></path>
                  <path
                    d="M 18.2596 19.798 L 18.2602 19.7985 C 16.5464 21.176 14.3695 22.0002 11.9997 22.0002 C 8.19143 22.0002 4.88044 19.8716 3.19141 16.7392 L 6.43209 14.0864 C 7.27659 16.3403 9.45078 17.9447 11.9997 17.9447 C 13.0953 17.9447 14.1217 17.6485 15.0024 17.1315 L 18.2596 19.798 "
                    fill="#28B446"
                  ></path>
                  <path
                    d="M 18.3841 4.3022 L 15.1445 6.9544 C 14.233 6.38463 13.1555 6.05549 12.0011 6.05549 C 9.39445 6.05549 7.17959 7.73351 6.3774 10.0682 L 3.11969 7.40112 H 3.11914 C 4.78345 4.19232 8.1362 2 12.0011 2 C 14.4275 2 16.6522 2.8643 18.3841 4.3022 Z"
                    fill="#F14336"
                  ></path>
                </svg>
                Google
              </button>
              <button className="btn bg-base-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M 15.175 5.32083 H 17.0008 V 2.14083 C 16.6858 2.0975 15.6025 2 14.3408 2 C 8.56417 2 10.1358 8.54167 9.90583 9.5 H 7 V 13.055 H 9.905 V 22 H 13.4667 V 13.0558 H 16.2542 L 16.6967 9.50083 H 13.4658 C 13.6225 7.1475 12.8317 5.32083 15.175 5.32083 Z"
                    fill="#3B5999"
                  ></path>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
        <FooterSimple></FooterSimple>
      </div>
    </>
  );
}

export default Login;
