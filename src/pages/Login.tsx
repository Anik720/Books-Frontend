import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser } from "../redux/features/users/userSlice";
const Login = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  // let location = useLocation();
  // let from = location.state?.from?.pathname || "/";
  const { user, isLoading } = useAppSelector((state) => state.user);

  // const handleLogout = () => {
  //   console.log("Logout");
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //     dispatch(setUser(null));
  //   });
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome. Have the best experince by logging in our website. You
              will get your desire items and will be able to have the best
              service.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {/* {errors.email.message} */}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {/* {errors.email.message} */}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {/* {errors.password.message} */}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {/* {errors.password.message} */}
                      </span>
                    )}
                  </label>
                  {/* <p>{showError}</p> */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label>
                    <Link to="/signup">
                      <button className="">
                        Are you a new user? Sign Up here.
                      </button>
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
            {/* <div class="flex justify-center">
              <h1>OR</h1>{" "}
            </div> */}
            {/* <div class="form-control mt-6 px-7 pb-5">
              <button class="btn btn-dark " onClick={() => signInWithGoogle()}>
                Google Login
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
