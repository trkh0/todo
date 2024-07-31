import { login, signup } from "./actions";

export default function LoginPage() {
  // Login and sign up form
  return (
    <div className="d-flex w-100 h-100 justify-content-center align-items-center py-5">
      <form className="d-flex flex-column tw-max-w-96">
      <h4 className="py-2 text-center">Log in or sign up</h4>
        <div className="input-group mb-3">
          <span
            className="input-group-text"
            id="inputGroup-sizing-default"
            htmlFor="email"
          >
            Email
          </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text"
            id="inputGroup-sizing-default"
            htmlFor="password"
          >
            Password
          </span>
          <input
            id="password"
            name="password"
            type="password"
            minLength={6}
            required
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-primary my-1" formAction={login}>
          Log in
        </button>
        <button className="btn btn-secondary my-1" formAction={signup}>
          Sign up
        </button>
      </form>
    </div>
  );
}
