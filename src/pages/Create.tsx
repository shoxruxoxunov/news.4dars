import { Link } from "react-router-dom";
function Create() {
  return (
    <div className=" grid h-screen w-full place-items-center">
      <form>
        <h1 className="md:font-bold md:text-2xl font-medium text-base mb-2">
          Create News
        </h1>
        <label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <Link
          to="/"
          className="btn btn-outline btn-secondary mt-[10px]"
        >
          Create
        </Link>
      </form>
    </div>
  );
}

export default Create;
